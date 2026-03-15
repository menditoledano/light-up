/*
  # Lightup Community Landing Page Tables

  1. New Tables
    - `lightup_sparks` - Weekly spark articles for the knowledge base section
      - `id` (uuid, primary key)
      - `title` (text) - Article title in Hebrew
      - `category` (text) - Article category
      - `read_time` (text) - Estimated reading time
      - `is_highlight` (boolean) - Whether to visually highlight this spark
      - `is_published` (boolean) - Publication flag
      - `sort_order` (integer) - Display ordering
      - `created_at` (timestamptz)

    - `lightup_events` - Community events for the events section
      - `id` (uuid, primary key)
      - `title` (text) - Event title in Hebrew
      - `event_day` (text) - Day of the event
      - `event_month` (text) - Month in Hebrew
      - `location` (text) - Event location
      - `event_type` (text) - Type of event (frontal, virtual, open)
      - `is_special` (boolean) - Special visual treatment
      - `is_published` (boolean) - Publication flag
      - `sort_order` (integer) - Display ordering
      - `created_at` (timestamptz)

    - `lightup_gallery` - Gallery items for the community photos section
      - `id` (uuid, primary key)
      - `title` (text) - Photo caption
      - `date_label` (text) - Date label in Hebrew
      - `placeholder_text` (text) - Placeholder description for image
      - `image_url` (text) - Optional image URL
      - `is_published` (boolean) - Publication flag
      - `sort_order` (integer) - Display ordering
      - `created_at` (timestamptz)

  2. Security
    - RLS enabled on all tables
    - Read policies for published content only
*/

-- Lightup Sparks (knowledge base articles)
CREATE TABLE IF NOT EXISTS lightup_sparks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  read_time text NOT NULL DEFAULT '2 דק'' קריאה',
  is_highlight boolean DEFAULT false,
  is_published boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE lightup_sparks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read published lightup sparks"
  ON lightup_sparks FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- Lightup Events (community events)
CREATE TABLE IF NOT EXISTS lightup_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  event_day text NOT NULL,
  event_month text NOT NULL,
  location text NOT NULL,
  event_type text NOT NULL DEFAULT 'פרונטלי',
  is_special boolean DEFAULT false,
  is_published boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE lightup_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read published lightup events"
  ON lightup_events FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- Lightup Gallery (community photos)
CREATE TABLE IF NOT EXISTS lightup_gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  date_label text NOT NULL,
  placeholder_text text NOT NULL,
  image_url text,
  is_published boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE lightup_gallery ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read published lightup gallery items"
  ON lightup_gallery FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- Seed data: Sparks
INSERT INTO lightup_sparks (title, category, read_time, is_highlight, sort_order) VALUES
('זהות יהודית במשרד הגלובלי: איך להביא את עצמנו לעבודה באותנטיות', 'זהות וקריירה', '2 דק'' קריאה', false, 1),
('איך לשתף את ערכי חגי ישראל עם קולגות מסביב לעולם?', 'גשרים של תקשורת', '3 דק'' קריאה', true, 2),
('שולחן משותף: ליצור אירועי גיבוש שמתאימים ופתוחים לכולם', 'חיבורים וקהילה', '2.5 דק'' קריאה', false, 3);

-- Seed data: Events
INSERT INTO lightup_events (title, event_day, event_month, location, event_type, is_special, sort_order) VALUES
('הרמת כוסית קהילתית ושיח לקראת חג הפסח', '14', 'ניסן', 'הלאונג'' המרכזי, קומה 4', 'פרונטלי', false, 1),
('מעגל שיח: מנהיגות בראי הערכים המשותפים שלנו', '22', 'מרץ', 'Microsoft Teams', 'וירטואלי', true, 2),
('סדנת אפיית חלות וחיבור למסורת מקרבת', '05', 'אפר', 'קפיטריה ראשית', 'פרונטלי', false, 3),
('מפגש שולחן עגול: בין משפחה, קריירה וזהות', '12', 'אפר', 'חדר ישיבות D', 'פתוח לכולם', false, 4);

-- Seed data: Gallery
INSERT INTO lightup_gallery (title, date_label, placeholder_text, sort_order) VALUES
('הרמת כוסית לפסח', 'מרץ 2024', 'תמונה של הרמת כוסית קהילתית לפסח במשרדי החברה', 1),
('הדלקת נרות חנוכה', 'דצמבר 2023', 'תמונה של הדלקת נרות חנוכה משותפת בלובי המשרדים', 2),
('מפגש נטוורקינג וחיבורים', 'ינואר 2024', 'תמונה של מפגש נטוורקינג לעובדים במתחם העבודה', 3);
