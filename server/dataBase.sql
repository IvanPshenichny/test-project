CREATE DATABASE usersdata;

CREATE TABLE userauthdata(
user_id SERIAL PRIMARY KEY,
firstname VARCHAR(255) NOT NULL,
lastname VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
passwords VARCHAR(255) NOT NULL,
statusi VARCHAR(255) NOT NULL,
age VARCHAR(255) NOT NULL,
);

-- INSERT INTO UserAuthData (firstname, lastname, email, passwords ) VALUES ('Ivan', 'Pshenichniy', 'ivan@yandex.ru', 'qwerty12345')