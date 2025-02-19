/*
  # Create stock items table

  1. New Tables
    - `stock_items`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `sku` (text, unique)
      - `description` (text)
      - `quantity` (integer, not null)
      - `price` (decimal, not null)
      - `category` (text)
      - `created_at` (timestamp with time zone)
      - `updated_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `stock_items` table
    - Add policies for authenticated users to:
      - Read all stock items
      - Create/update/delete stock items (admin only)
*/

CREATE TABLE IF NOT EXISTS stock_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  sku text UNIQUE NOT NULL,
  description text,
  quantity integer NOT NULL DEFAULT 0,
  price decimal(10,2) NOT NULL,
  category text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE stock_items ENABLE ROW LEVEL SECURITY;

-- Policy for reading stock items (all authenticated users)
CREATE POLICY "Anyone can view stock items"
  ON stock_items
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy for managing stock items (admin only)
CREATE POLICY "Only admins can manage stock items"
  ON stock_items
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin')
  WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update the updated_at column
CREATE TRIGGER update_stock_items_updated_at
  BEFORE UPDATE ON stock_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();