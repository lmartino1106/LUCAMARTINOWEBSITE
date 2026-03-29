-- =============================================
-- SCHEMA: Luca Martino Personal Brand Dashboard
-- =============================================

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  service TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'scheduled', 'closed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Page views and analytics
CREATE TABLE IF NOT EXISTS page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  country TEXT,
  city TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Content ideas and prompts tracker
CREATE TABLE IF NOT EXISTS content_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  pillar TEXT CHECK (pillar IN ('educativo', 'tutorial', 'opinion')),
  platform TEXT DEFAULT 'linkedin',
  status TEXT DEFAULT 'idea' CHECK (status IN ('idea', 'draft', 'review', 'published')),
  scheduled_date DATE,
  published_date DATE,
  content TEXT,
  impressions INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  comments INTEGER DEFAULT 0,
  shares INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Brand metrics (weekly snapshots)
CREATE TABLE IF NOT EXISTS brand_metrics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  week_start DATE NOT NULL,
  linkedin_followers INTEGER DEFAULT 0,
  linkedin_impressions INTEGER DEFAULT 0,
  linkedin_engagement_rate DECIMAL(5,2) DEFAULT 0,
  website_visits INTEGER DEFAULT 0,
  website_unique_visitors INTEGER DEFAULT 0,
  contact_form_submissions INTEGER DEFAULT 0,
  diagnostics_scheduled INTEGER DEFAULT 0,
  new_connections INTEGER DEFAULT 0,
  direct_messages INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- SEO keywords tracking
CREATE TABLE IF NOT EXISTS seo_keywords (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  keyword TEXT NOT NULL,
  current_position INTEGER,
  previous_position INTEGER,
  search_volume INTEGER,
  difficulty TEXT CHECK (difficulty IN ('low', 'medium', 'high')),
  target_page TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Daily prompts / content calendar
CREATE TABLE IF NOT EXISTS daily_prompts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL UNIQUE,
  day_of_week TEXT NOT NULL,
  prompt_type TEXT CHECK (prompt_type IN ('educativo', 'tutorial', 'opinion', 'rest')),
  prompt_text TEXT NOT NULL,
  topic_suggestion TEXT,
  hashtags TEXT[],
  completed BOOLEAN DEFAULT FALSE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE brand_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_keywords ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_prompts ENABLE ROW LEVEL SECURITY;

-- Public: only INSERT on contacts and page_views (for contact form and analytics)
CREATE POLICY "Allow public insert on contacts" ON contacts
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public insert on page_views" ON page_views
  FOR INSERT TO anon WITH CHECK (true);

-- Service role: full access to all tables (for dashboard API routes)
CREATE POLICY "Service role full access contacts" ON contacts
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access page_views" ON page_views
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access content_posts" ON content_posts
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access brand_metrics" ON brand_metrics
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access seo_keywords" ON seo_keywords
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access daily_prompts" ON daily_prompts
  FOR ALL TO service_role USING (true) WITH CHECK (true);
