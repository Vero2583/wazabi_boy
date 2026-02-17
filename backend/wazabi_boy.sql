--sql base de données:

--Creation de la base de données:
CREATE DATABASE wazaby_boy

--Creation des tables:
CREATE TABLE `contact`(
`Id` INT PRIMARY KEY AUTO_INCREMENT,
`avatar` VARCHAR(255),
`name` VARCHAR(255),
`prenom` VARCHAR(255),	
`adresse` VARCHAR(255),
`telephone` DECIMAL(3.1),
`email` VARCHAR(255) UNIQUE,
`reseaux` VARCHAR(255),
`loisirs` VARCHAR(255),
`Id_professionnel` INT,
FOREIGN KEY (id_professionnel) REFERENCES professionnel(id)
);

CREATE TABLE `professionnel` (
`Id` INT PRIMARY KEY AUTO_INCREMENT,
`titre` VARCHAR(255),
`competences` VARCHAR(255),
`experiences_professionnelles` VARCHAR(255),
`diplomes` VARCHAR(255),
`langues` VARCHAR(255)
) ;