CREATE DATABASE IF NOT EXISTS nexus_ai CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE nexus_ai;

CREATE TABLE IF NOT EXISTS contact_leads (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(160) NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_contact_leads_created_at (created_at),
  INDEX idx_contact_leads_email (email)
) ENGINE=InnoDB;
