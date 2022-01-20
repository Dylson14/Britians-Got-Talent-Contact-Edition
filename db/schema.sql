DROP DATABASE IF EXISTS talent_db;
CREATE DATABASE talent_db;

USE talent_db;

CREATE TABLE employee (
name VARCHAR(30) NOT NULL,
location VARCHAR(30) NOT NULL,
date_of_birth DATE NOT NULL
);


