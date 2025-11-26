-- Tworzenie typów enum dla różnych statusów
CREATE TYPE public.processing_status AS ENUM ('pending', 'processing', 'completed', 'failed');
CREATE TYPE public.llm_model AS ENUM ('gemini-2.5-pro', 'gemini-2.5-flash', 'gpt-5', 'gpt-5-mini');
CREATE TYPE public.translation_language AS ENUM ('pl', 'en', 'de', 'fr', 'es', 'it', 'ru', 'ja', 'zh', 'ar');

-- Tabela dla sesji użytkowników LLM
CREATE TABLE public.llm_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  model llm_model NOT NULL,
  system_prompt TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Tabela dla wiadomości w sesjach LLM
CREATE TABLE public.llm_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES public.llm_sessions(id) ON DELETE CASCADE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Tabela dla żądań tłumaczeń
CREATE TABLE public.translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  source_language translation_language NOT NULL,
  target_language translation_language NOT NULL,
  source_text TEXT NOT NULL,
  translated_text TEXT,
  status processing_status DEFAULT 'pending' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Tabela dla skanów bezpieczeństwa
CREATE TABLE public.security_scans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  scan_type TEXT NOT NULL CHECK (scan_type IN ('malware', 'vulnerability', 'network')),
  target TEXT NOT NULL,
  results JSONB,
  threat_level TEXT CHECK (threat_level IN ('none', 'low', 'medium', 'high', 'critical')),
  status processing_status DEFAULT 'pending' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Tabela dla wygenerowanych mediów (obrazy, wideo)
CREATE TABLE public.generated_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  media_type TEXT NOT NULL CHECK (media_type IN ('image', 'video')),
  prompt TEXT NOT NULL,
  file_url TEXT,
  metadata JSONB,
  status processing_status DEFAULT 'pending' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Tabela dla kluczy kwantowych
CREATE TABLE public.quantum_keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  key_name TEXT NOT NULL,
  encrypted_key TEXT NOT NULL,
  key_metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT true NOT NULL
);

-- Tabela dla syntezy głosu
CREATE TABLE public.voice_synthesis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  text TEXT NOT NULL,
  voice_model TEXT NOT NULL,
  audio_url TEXT,
  status processing_status DEFAULT 'pending' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Włączenie RLS dla wszystkich tabel
ALTER TABLE public.llm_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.llm_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.security_scans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.generated_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quantum_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.voice_synthesis ENABLE ROW LEVEL SECURITY;

-- Polityki RLS - użytkownicy mogą widzieć tylko swoje dane
CREATE POLICY "Users can view own llm_sessions" ON public.llm_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own llm_sessions" ON public.llm_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own llm_sessions" ON public.llm_sessions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own llm_sessions" ON public.llm_sessions FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own llm_messages" ON public.llm_messages FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.llm_sessions WHERE id = llm_messages.session_id AND user_id = auth.uid())
);
CREATE POLICY "Users can insert own llm_messages" ON public.llm_messages FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM public.llm_sessions WHERE id = llm_messages.session_id AND user_id = auth.uid())
);

CREATE POLICY "Users can view own translations" ON public.translations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own translations" ON public.translations FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own translations" ON public.translations FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own security_scans" ON public.security_scans FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own security_scans" ON public.security_scans FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own generated_media" ON public.generated_media FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own generated_media" ON public.generated_media FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own quantum_keys" ON public.quantum_keys FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own quantum_keys" ON public.quantum_keys FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own quantum_keys" ON public.quantum_keys FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own voice_synthesis" ON public.voice_synthesis FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own voice_synthesis" ON public.voice_synthesis FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Funkcja do automatycznego aktualizowania updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger dla llm_sessions
CREATE TRIGGER update_llm_sessions_updated_at
  BEFORE UPDATE ON public.llm_sessions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();