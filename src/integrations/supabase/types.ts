export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      generated_media: {
        Row: {
          completed_at: string | null
          created_at: string
          file_url: string | null
          id: string
          media_type: string
          metadata: Json | null
          prompt: string
          status: Database["public"]["Enums"]["processing_status"]
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          file_url?: string | null
          id?: string
          media_type: string
          metadata?: Json | null
          prompt: string
          status?: Database["public"]["Enums"]["processing_status"]
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          file_url?: string | null
          id?: string
          media_type?: string
          metadata?: Json | null
          prompt?: string
          status?: Database["public"]["Enums"]["processing_status"]
          user_id?: string
        }
        Relationships: []
      }
      llm_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          role: string
          session_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          role: string
          session_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          role?: string
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "llm_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "llm_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      llm_sessions: {
        Row: {
          created_at: string
          id: string
          model: Database["public"]["Enums"]["llm_model"]
          system_prompt: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          model: Database["public"]["Enums"]["llm_model"]
          system_prompt?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          model?: Database["public"]["Enums"]["llm_model"]
          system_prompt?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      quantum_keys: {
        Row: {
          created_at: string
          encrypted_key: string
          expires_at: string | null
          id: string
          is_active: boolean
          key_metadata: Json | null
          key_name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          encrypted_key: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          key_metadata?: Json | null
          key_name: string
          user_id: string
        }
        Update: {
          created_at?: string
          encrypted_key?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          key_metadata?: Json | null
          key_name?: string
          user_id?: string
        }
        Relationships: []
      }
      security_scans: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          results: Json | null
          scan_type: string
          status: Database["public"]["Enums"]["processing_status"]
          target: string
          threat_level: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          results?: Json | null
          scan_type: string
          status?: Database["public"]["Enums"]["processing_status"]
          target: string
          threat_level?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          results?: Json | null
          scan_type?: string
          status?: Database["public"]["Enums"]["processing_status"]
          target?: string
          threat_level?: string | null
          user_id?: string
        }
        Relationships: []
      }
      translations: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          source_language: Database["public"]["Enums"]["translation_language"]
          source_text: string
          status: Database["public"]["Enums"]["processing_status"]
          target_language: Database["public"]["Enums"]["translation_language"]
          translated_text: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          source_language: Database["public"]["Enums"]["translation_language"]
          source_text: string
          status?: Database["public"]["Enums"]["processing_status"]
          target_language: Database["public"]["Enums"]["translation_language"]
          translated_text?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          source_language?: Database["public"]["Enums"]["translation_language"]
          source_text?: string
          status?: Database["public"]["Enums"]["processing_status"]
          target_language?: Database["public"]["Enums"]["translation_language"]
          translated_text?: string | null
          user_id?: string
        }
        Relationships: []
      }
      voice_synthesis: {
        Row: {
          audio_url: string | null
          completed_at: string | null
          created_at: string
          id: string
          status: Database["public"]["Enums"]["processing_status"]
          text: string
          user_id: string
          voice_model: string
        }
        Insert: {
          audio_url?: string | null
          completed_at?: string | null
          created_at?: string
          id?: string
          status?: Database["public"]["Enums"]["processing_status"]
          text: string
          user_id: string
          voice_model: string
        }
        Update: {
          audio_url?: string | null
          completed_at?: string | null
          created_at?: string
          id?: string
          status?: Database["public"]["Enums"]["processing_status"]
          text?: string
          user_id?: string
          voice_model?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      llm_model: "gemini-2.5-pro" | "gemini-2.5-flash" | "gpt-5" | "gpt-5-mini"
      processing_status: "pending" | "processing" | "completed" | "failed"
      translation_language:
        | "pl"
        | "en"
        | "de"
        | "fr"
        | "es"
        | "it"
        | "ru"
        | "ja"
        | "zh"
        | "ar"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      llm_model: ["gemini-2.5-pro", "gemini-2.5-flash", "gpt-5", "gpt-5-mini"],
      processing_status: ["pending", "processing", "completed", "failed"],
      translation_language: [
        "pl",
        "en",
        "de",
        "fr",
        "es",
        "it",
        "ru",
        "ja",
        "zh",
        "ar",
      ],
    },
  },
} as const
