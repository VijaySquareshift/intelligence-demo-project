-- Database Query Optimizations
-- Create composite index for users table
CREATE INDEX idx_users_email_created ON users(email, created_at);

-- Optimize user profile query
CREATE MATERIALIZED VIEW user_profiles_mv AS
SELECT u.id, u.email, u.name, p.bio, p.avatar_url
FROM users u
LEFT JOIN profiles p ON u.id = p.user_id;

-- Refresh materialized view periodically
CREATE OR REPLACE FUNCTION refresh_user_profiles()
RETURNS trigger AS $$
BEGIN
  REFRESH MATERIALIZED VIEW CONCURRENTLY user_profiles_mv;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;
