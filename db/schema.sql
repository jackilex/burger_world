CREATE DATABASE burger_world

USE burger_world

CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
eaten_burger BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);



