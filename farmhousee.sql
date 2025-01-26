CREATE DATABASE farmhouse_calendar;

USE farmhouse_calendar;

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    start_date DATETIME NOT NULL,
    end_date DATETIME,
    description TEXT
);