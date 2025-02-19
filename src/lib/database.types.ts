export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          message: string
          forward_to: string
          created_at: string
          status: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          message: string
          forward_to: string
          created_at?: string
          status?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          message?: string
          forward_to?: string
          created_at?: string
          status?: string
        }
      }
      stock_items: {
        Row: {
          id: string
          name: string
          sku: string
          description: string | null
          quantity: number
          price: number
          category: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          sku: string
          description?: string | null
          quantity?: number
          price: number
          category?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          sku?: string
          description?: string | null
          quantity?: number
          price?: number
          category?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}