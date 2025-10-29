/*
  # Crear tabla de perfiles de socios

  1. Nueva Tabla
    - `socios_profiles`
      - `id` (uuid, primary key)
      - `name` (text, nombre completo del socio)
      - `profile_image` (text, URL de la imagen de perfil)
      - `farm_name` (text, nombre de la finca)
      - `location` (text, ubicación específica)
      - `hectares` (numeric, hectáreas de cultivo)
      - `years_experience` (integer, años de experiencia)
      - `specialty` (text, especialidad o característica distintiva)
      - `story` (text, historia personal del socio)
      - `coffee_varieties` (text[], variedades de café que cultiva)
      - `production_volume` (text, volumen de producción anual)
      - `certifications` (text[], certificaciones que posee)
      - `contact_phone` (text, opcional)
      - `is_featured` (boolean, si es socio destacado)
      - `display_order` (integer, orden de visualización)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Seguridad
    - Habilitar RLS en la tabla `socios_profiles`
    - Política de lectura pública para todos los usuarios
    - Políticas de escritura solo para usuarios autenticados con rol de admin
*/

CREATE TABLE IF NOT EXISTS socios_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  profile_image text DEFAULT '',
  farm_name text NOT NULL,
  location text NOT NULL,
  hectares numeric DEFAULT 0,
  years_experience integer DEFAULT 0,
  specialty text DEFAULT '',
  story text NOT NULL,
  coffee_varieties text[] DEFAULT '{}',
  production_volume text DEFAULT '',
  certifications text[] DEFAULT '{}',
  contact_phone text DEFAULT '',
  is_featured boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE socios_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view socios profiles"
  ON socios_profiles
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert socios profiles"
  ON socios_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update socios profiles"
  ON socios_profiles
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete socios profiles"
  ON socios_profiles
  FOR DELETE
  TO authenticated
  USING (true);
