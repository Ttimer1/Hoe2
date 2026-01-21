-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflows ENABLE ROW LEVEL SECURITY;
ALTER TABLE steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE screenshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE share_links ENABLE ROW LEVEL SECURITY;

-- Profiles: users can only read/update their own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Workflows: users can CRUD their own workflows
CREATE POLICY "Users can view own workflows"
  ON workflows FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create workflows"
  ON workflows FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own workflows"
  ON workflows FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own workflows"
  ON workflows FOR DELETE
  USING (auth.uid() = user_id);

-- Public workflows can be viewed by anyone
CREATE POLICY "Anyone can view public workflows"
  ON workflows FOR SELECT
  USING (is_public = TRUE);

-- Steps: users can CRUD steps in their own workflows
CREATE POLICY "Users can view steps in own workflows"
  ON steps FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM workflows
      WHERE workflows.id = steps.workflow_id
      AND workflows.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create steps in own workflows"
  ON steps FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM workflows
      WHERE workflows.id = steps.workflow_id
      AND workflows.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update steps in own workflows"
  ON steps FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM workflows
      WHERE workflows.id = steps.workflow_id
      AND workflows.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete steps in own workflows"
  ON steps FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM workflows
      WHERE workflows.id = steps.workflow_id
      AND workflows.user_id = auth.uid()
    )
  );

-- Anyone can view steps in public workflows
CREATE POLICY "Anyone can view steps in public workflows"
  ON steps FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM workflows
      WHERE workflows.id = steps.workflow_id
      AND workflows.is_public = TRUE
    )
  );

-- Screenshots: same rules as steps
CREATE POLICY "Users can view screenshots in own workflows"
  ON screenshots FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM steps
      JOIN workflows ON workflows.id = steps.workflow_id
      WHERE steps.id = screenshots.step_id
      AND workflows.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create screenshots in own workflows"
  ON screenshots FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM steps
      JOIN workflows ON workflows.id = steps.workflow_id
      WHERE steps.id = screenshots.step_id
      AND workflows.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete screenshots in own workflows"
  ON screenshots FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM steps
      JOIN workflows ON workflows.id = steps.workflow_id
      WHERE steps.id = screenshots.step_id
      AND workflows.user_id = auth.uid()
    )
  );

-- Anyone can view screenshots in public workflows
CREATE POLICY "Anyone can view screenshots in public workflows"
  ON screenshots FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM steps
      JOIN workflows ON workflows.id = steps.workflow_id
      WHERE steps.id = screenshots.step_id
      AND workflows.is_public = TRUE
    )
  );

-- Share links: users can manage share links for own workflows
CREATE POLICY "Users can view share links for own workflows"
  ON share_links FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM workflows
      WHERE workflows.id = share_links.workflow_id
      AND workflows.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create share links for own workflows"
  ON share_links FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM workflows
      WHERE workflows.id = share_links.workflow_id
      AND workflows.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update share links for own workflows"
  ON share_links FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM workflows
      WHERE workflows.id = share_links.workflow_id
      AND workflows.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete share links for own workflows"
  ON share_links FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM workflows
      WHERE workflows.id = share_links.workflow_id
      AND workflows.user_id = auth.uid()
    )
  );

-- Anyone can read share links by short_id (for public access)
CREATE POLICY "Anyone can view share link by short_id"
  ON share_links FOR SELECT
  USING (TRUE);
