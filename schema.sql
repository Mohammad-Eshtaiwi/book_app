DROP TABLE books;
CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  isbn VARCHAR(255) UNIQUE,
  image_url VARCHAR(255),
  description TEXT
);