CREATE TABLE users
(
    id         INT GENERATED ALWAYS AS IDENTITY,
    first_name TEXT,
    last_name  TEXT,
    username   TEXT NOT NULL
);

INSERT INTO users (first_name, last_name, username)
VALUES ('Tim', 'Whitbeck', 'twhitbeck');
