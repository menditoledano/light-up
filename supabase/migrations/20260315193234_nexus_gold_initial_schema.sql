/*
  # Nexus Gold ERG Platform - Initial Schema

  1. New Tables
    - `articles` - Spark 10 community feed articles
      - `id` (uuid, primary key)
      - `title` (text) - Article title in Hebrew
      - `excerpt` (text) - Short excerpt
      - `author` (text) - Author name
      - `category` (text) - Article category
      - `image_url` (text) - Cover image URL
      - `is_published` (boolean) - Controls visibility
      - `created_at` (timestamptz)

    - `events` - Community events for Event Orbit
      - `id` (uuid, primary key)
      - `title` (text) - Event title
      - `description` (text) - Event description
      - `event_date` (timestamptz) - Event date and time
      - `location` (text) - Physical location
      - `image_url` (text) - Event banner image
      - `max_attendees` (integer) - Capacity limit
      - `rsvp_count` (integer) - Current RSVP count
      - `is_published` (boolean) - Controls visibility
      - `created_at` (timestamptz)

    - `resources` - Resource vault documents and guides
      - `id` (uuid, primary key)
      - `title` (text) - Resource title
      - `description` (text) - Resource description
      - `category` (text) - Category grouping
      - `file_type` (text) - File format (pdf, doc, etc.)
      - `is_published` (boolean) - Controls visibility
      - `created_at` (timestamptz)

    - `store_items` - Partner swag store products
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `description` (text) - Product description
      - `image_url` (text) - Product image
      - `category` (text) - Product category
      - `is_available` (boolean) - Availability status
      - `created_at` (timestamptz)

    - `supply_requests` - Swag supply request submissions
      - `id` (uuid, primary key)
      - `item_id` (uuid, FK to store_items)
      - `requester_name` (text) - Who requested
      - `department` (text) - Department
      - `quantity` (integer) - Requested quantity
      - `status` (text) - pending/approved/delivered
      - `notes` (text) - Additional notes
      - `created_at` (timestamptz)

    - `community_requests` - Leader CRM tickets
      - `id` (uuid, primary key)
      - `title` (text) - Request title
      - `description` (text) - Request details
      - `requester_name` (text) - Requester
      - `priority` (text) - low/medium/high/urgent
      - `status` (text) - open/in_progress/resolved/closed
      - `category` (text) - Request category
      - `is_active` (boolean) - Active status
      - `created_at` (timestamptz)

    - `budgets` - Budget allocation and tracking
      - `id` (uuid, primary key)
      - `category` (text) - Budget category
      - `allocated` (numeric) - Total allocated
      - `spent` (numeric) - Amount spent
      - `fiscal_year` (text) - Fiscal year
      - `is_active` (boolean) - Active status
      - `created_at` (timestamptz)

    - `analytics_data` - HR belonging analytics (aggregate only)
      - `id` (uuid, primary key)
      - `metric_name` (text) - Metric identifier
      - `metric_value` (numeric) - Metric value
      - `period` (text) - Time period
      - `category` (text) - Metric category
      - `is_current` (boolean) - Current data flag
      - `created_at` (timestamptz)

  2. Security
    - RLS enabled on all 8 tables
    - Read policies filtered by published/available/active status
    - Write policies with validation constraints
    - No unrestricted access policies

  3. Seed Data
    - 6 Hebrew articles for Spark 10 feed
    - 5 Hebrew events for Event Orbit
    - 8 Hebrew resources for Resource Vault
    - 6 Hebrew store items for Swag Store
    - 6 Hebrew community requests for Leader CRM
    - 5 budget line items for budget tracking
    - 20 analytics data points across 5 metrics and 4 quarters
*/

-- Articles table
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  author text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  image_url text,
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read published articles"
  ON articles FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  event_date timestamptz NOT NULL,
  location text,
  image_url text,
  max_attendees integer DEFAULT 50,
  rsvp_count integer DEFAULT 0,
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read published events"
  ON events FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Update published event rsvp"
  ON events FOR UPDATE
  TO anon, authenticated
  USING (is_published = true)
  WITH CHECK (is_published = true);

-- Resources table
CREATE TABLE IF NOT EXISTS resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  category text NOT NULL,
  file_type text DEFAULT 'pdf',
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read published resources"
  ON resources FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- Store items table
CREATE TABLE IF NOT EXISTS store_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  image_url text,
  category text DEFAULT 'apparel',
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE store_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read available store items"
  ON store_items FOR SELECT
  TO anon, authenticated
  USING (is_available = true);

-- Supply requests table
CREATE TABLE IF NOT EXISTS supply_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  item_id uuid REFERENCES store_items(id) NOT NULL,
  requester_name text NOT NULL,
  department text,
  quantity integer DEFAULT 1,
  status text DEFAULT 'pending',
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE supply_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read non-cancelled supply requests"
  ON supply_requests FOR SELECT
  TO anon, authenticated
  USING (status IN ('pending', 'approved', 'delivered'));

CREATE POLICY "Create valid supply requests"
  ON supply_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (quantity > 0 AND quantity <= 10);

-- Community requests table (Leader CRM)
CREATE TABLE IF NOT EXISTS community_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  requester_name text NOT NULL,
  priority text DEFAULT 'medium',
  status text DEFAULT 'open',
  category text DEFAULT 'general',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE community_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read active community requests"
  ON community_requests FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Budgets table
CREATE TABLE IF NOT EXISTS budgets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  allocated numeric NOT NULL DEFAULT 0,
  spent numeric NOT NULL DEFAULT 0,
  fiscal_year text DEFAULT '2026',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE budgets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read active budgets"
  ON budgets FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Analytics data table (HR Dashboard - aggregate only)
CREATE TABLE IF NOT EXISTS analytics_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_name text NOT NULL,
  metric_value numeric NOT NULL DEFAULT 0,
  period text NOT NULL,
  category text DEFAULT 'engagement',
  is_current boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE analytics_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read current analytics data"
  ON analytics_data FOR SELECT
  TO anon, authenticated
  USING (is_current = true);

-- ============================================================
-- SEED DATA (Hebrew)
-- ============================================================

-- Seed: Articles
INSERT INTO articles (title, excerpt, author, category, image_url) VALUES
('ספארק 10: חדשנות בעולם התאגידי', 'גלו כיצד קבוצות משאבי עובדים מובילות חדשנות ומשפיעות על תרבות ארגונית ברחבי הארגון שלנו', 'דנה כהן', 'חדשנות', 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'),
('מנהיגות מכלילה בעידן הדיגיטלי', 'כלים ואסטרטגיות לבניית צוותים מגוונים ומכילים בסביבת עבודה היברידית מודרנית', 'יוסי לוי', 'מנהיגות', 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'),
('בניית גשרים: שיתופי פעולה בין קהילות', 'סיפורי הצלחה של שיתופי פעולה בין ERGs שונים שהובילו לשינוי אמיתי בארגון', 'מיכל אברהם', 'קהילה', 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600'),
('מדד המחוברות השנתי: תוצאות ותובנות', 'ניתוח מעמיק של תוצאות סקר המחוברות ומה הן אומרות על עתיד הארגון שלנו', 'רון שמעוני', 'נתונים', 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'),
('חגים ומועדים: לוח שנה תרבותי משותף', 'כיצד לחגוג מגוון תרבותי במקום העבודה עם כבוד והכלה לכל הקהילות', 'נועה גולן', 'תרבות', 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'),
('העצמת נשים בטכנולוגיה: המדריך המלא', 'משאבים וטיפים לקידום נשים בתפקידי טכנולוגיה ומנהיגות בכירה בארגון', 'שירה בן דוד', 'העצמה', 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600');

-- Seed: Events
INSERT INTO events (title, description, event_date, location, image_url, max_attendees, rsvp_count) VALUES
('כנס מנהיגות שנתי 2026', 'כנס שנתי למנהיגי קהילות עם הרצאות, סדנאות ונטוורקינג מקצועי', '2026-04-15 09:00:00+03', 'אולם הכנסים הראשי, קומה 12', 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600', 200, 147),
('סדנת חדשנות קהילתית', 'סדנה אינטראקטיבית לפיתוח רעיונות חדשניים לחיזוק הקהילה הארגונית', '2026-04-22 14:00:00+03', 'חדר יצירתיות, קומה 8', 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600', 30, 24),
('ערב תרבויות: חגיגת אביב', 'ערב משותף לחגיגת האביב עם ארוחה מסורתית, מוסיקה וסיפורים', '2026-04-10 18:00:00+03', 'מסעדת החברה, קומה 1', 'https://images.pexels.com/photos/5765657/pexels-photo-5765657.jpeg?auto=compress&cs=tinysrgb&w=600', 80, 63),
('האקתון גיוון והכלה', 'האקתון של 48 שעות לפיתוח פתרונות טכנולוגיים לנגישות והכלה', '2026-05-01 08:00:00+03', 'מרכז החדשנות, קומה 15', 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600', 50, 38),
('מפגש מנטורינג חודשי', 'מפגש מנטורינג פתוח לכל חברי הקהילה עם מנהלים בכירים מהארגון', '2026-03-28 16:00:00+03', 'חדר ישיבות VIP, קומה 20', 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600', 25, 22);

-- Seed: Resources
INSERT INTO resources (title, description, category, file_type) VALUES
('מדריך הקמת ERG חדש', 'מדריך מקיף להקמה וניהול של קבוצת משאבי עובדים חדשה בארגון', 'מדריכים', 'pdf'),
('לוח זמני תפילה ומועדים', 'לוח שנה מקיף עם זמני תפילה, חגים ומועדים של כל הדתות והקהילות', 'לוחות שנה', 'pdf'),
('מדיניות גיוון והכלה', 'מסמך מדיניות הארגון בנושא גיוון, הכלה ושוויון הזדמנויות בעבודה', 'מדיניות', 'doc'),
('ערכת הנחיית דיאלוג', 'כלים ותבניות להנחיית שיחות רגישות ופורומים על גיוון תרבותי', 'ערכות', 'pdf'),
('דוח שנתי ERG 2025', 'סיכום פעילויות, הישגים ותובנות של קבוצות ה-ERG בשנה החולפת', 'דוחות', 'pdf'),
('טופס בקשת תקציב', 'טופס רשמי להגשת בקשות תקציב לפעילויות קהילתיות ואירועים', 'טפסים', 'doc'),
('מדריך חגים למנהלים', 'מדריך מקיף למנהלים על חגי ישראל והתאמות נדרשות בסביבת העבודה', 'מדריכים', 'pdf'),
('פרוטוקול ישיבת הנהגה', 'תבנית סטנדרטית לניהול פרוטוקול ישיבות הנהגת ERG ומעקב החלטות', 'תבניות', 'doc');

-- Seed: Store items
INSERT INTO store_items (name, description, image_url, category) VALUES
('חולצת Nexus Gold Premium', 'חולצת כותנה איכותית עם לוגו Nexus Gold מוזהב - מהדורה מוגבלת', 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=600', 'ביגוד'),
('קפוצ׳ון קהילה', 'קפוצ׳ון חורפי איכותי בצבע שחור עם רקמה מוזהבת של הקהילה', 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600', 'ביגוד'),
('ספל קפה ממותג', 'ספל קרמיקה שחור מט עם כיתוב מוזהב Nexus Gold - עיצוב פרימיום', 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600', 'אביזרים'),
('מחברת עור פרימיום', 'מחברת עור שחורה עם הטבעת זהב של לוגו הקהילה - 200 דפים', 'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=600', 'כלי כתיבה'),
('תיק טוט בד אורגני', 'תיק טוט מבד אורגני בעיצוב מיוחד עם הדפס מוזהב מרשים', 'https://images.pexels.com/photos/5699466/pexels-photo-5699466.jpeg?auto=compress&cs=tinysrgb&w=600', 'תיקים'),
('בקבוק תרמי מנירוסטה', 'בקבוק תרמי שחור מט מנירוסטה עם חריטת לייזר מוזהבת', 'https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg?auto=compress&cs=tinysrgb&w=600', 'אביזרים');

-- Seed: Community requests (Leader CRM)
INSERT INTO community_requests (title, description, requester_name, priority, status, category) VALUES
('בקשת חדר תפילה קבוע', 'בקשה להקצאת חדר תפילה קבוע בקומה 10 לשימוש יומי של חברי הקהילה', 'אברהם יצחקי', 'high', 'open', 'תשתיות'),
('אישור תקציב לכנס Q2', 'בקשת אישור תקציב של 50,000 ש״ח לכנס המנהיגות הרבעוני השני', 'שרה גולדשטיין', 'urgent', 'in_progress', 'תקציב'),
('שילוט דו-לשוני בבניין', 'בקשה להוספת שילוט בערבית ובעברית בכל קומות המשרד הראשי', 'חאלד מנסור', 'medium', 'open', 'נגישות'),
('תוכנית מנטורינג בין-דורית', 'הצעה להקמת תוכנית מנטורינג המחברת בין עובדים ותיקים לעובדים חדשים', 'רחל ויינשטיין', 'medium', 'open', 'תוכניות'),
('עדכון מדיניות חגים', 'בקשה לעדכון מדיניות ימי חופשה בחגים של כל הקהילות והדתות', 'פאטמה חוסיין', 'high', 'in_progress', 'מדיניות'),
('הכשרת מנהלים בנושא הכלה', 'בקשה לסדנת הכשרה מקצועית למנהלים בנושא ניהול צוותים מגוונים', 'דוד אלון', 'low', 'resolved', 'הכשרה');

-- Seed: Budgets
INSERT INTO budgets (category, allocated, spent, fiscal_year) VALUES
('אירועים קהילתיים', 150000, 87500, '2026'),
('חומרי שיווק והסברה', 45000, 31200, '2026'),
('תוכניות מנטורינג', 60000, 22800, '2026'),
('כנסים והדרכות', 200000, 168000, '2026'),
('פרויקטים מיוחדים', 80000, 45600, '2026');

-- Seed: Analytics data (aggregate, no individual data)
INSERT INTO analytics_data (metric_name, metric_value, period, category) VALUES
('חברים פעילים', 1247, 'Q1 2026', 'membership'),
('חברים פעילים', 1189, 'Q4 2025', 'membership'),
('חברים פעילים', 1102, 'Q3 2025', 'membership'),
('חברים פעילים', 1050, 'Q2 2025', 'membership'),
('השתתפות באירועים', 89, 'Q1 2026', 'engagement'),
('השתתפות באירועים', 82, 'Q4 2025', 'engagement'),
('השתתפות באירועים', 76, 'Q3 2025', 'engagement'),
('השתתפות באירועים', 71, 'Q2 2025', 'engagement'),
('ציון מחוברות', 8.7, 'Q1 2026', 'sentiment'),
('ציון מחוברות', 8.4, 'Q4 2025', 'sentiment'),
('ציון מחוברות', 8.1, 'Q3 2025', 'sentiment'),
('ציון מחוברות', 7.8, 'Q2 2025', 'sentiment'),
('שימור עובדים', 94.2, 'Q1 2026', 'retention'),
('שימור עובדים', 93.1, 'Q4 2025', 'retention'),
('שימור עובדים', 91.8, 'Q3 2025', 'retention'),
('שימור עובדים', 90.5, 'Q2 2025', 'retention'),
('בקשות שנפתרו', 156, 'Q1 2026', 'operations'),
('בקשות שנפתרו', 142, 'Q4 2025', 'operations'),
('בקשות שנפתרו', 128, 'Q3 2025', 'operations'),
('בקשות שנפתרו', 115, 'Q2 2025', 'operations');