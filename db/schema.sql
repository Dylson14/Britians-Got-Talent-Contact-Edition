-- [
--   {
--     "name": "Homer Simpson",
--     "location": "Springfield",
--     "date_of_birth": "1956-05-12"
--   },
--   {
--     "name": "Frank Reynolds",
--     "location": "Philidelphia",
--     "date_of_birth": "1944-11-17"
--   },
--   {
--     "name": "Diane Nguyen",
--     "location": "Los Angeles",
--     "date_of_birth": "1980-03-19"
--   },
--   {
--     "name": "Krusty the Clown",
--     "location": "SpringField",
-- 		"date_of_birth": "1957-10-29"
--   }
-- ]

DROP DATABASE IF EXISTS talent_db;
CREATE DATABASE talent_db;

USE talent_db;

CREATE TABLE employee (
name VARCHAR(30) NOT NULL,
location VARCHAR(30) NOT NULL,
date_of_birth DATE NOT NULL
);


