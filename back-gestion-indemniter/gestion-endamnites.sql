
CREATE TABLE `endamnite` (
  `id_endamnite` int(11) NOT NULL AUTO_INCREMENT,
  `personnel` int(11) NOT NULL,
  `heure_travail` int(11) NOT NULL,
    PRIMARY KEY (id_endamnite)
) ;


CREATE TABLE `payement` (
  `id_payement` int(11) NOT NULL AUTO_INCREMENT,
  `endamnite` int(11) NOT NULL,
  `description` varchar(25) NOT NULL,
  `date` date,
  `payement` int(11) NOT NULL,
    PRIMARY KEY (id_payement));

CREATE TABLE `personnel` (
  `id_perso` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(25) NOT NULL,
  `service` int(11) NOT NULL,
  `adresse` varchar(25) NOT NULL,
    PRIMARY KEY (id_perso));

CREATE TABLE `service` (
  `id_service` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(25) NOT NULL,
  `salaire_heure` int(11) NOT NULL,
  `nb_jour` int(11) NOT NULL,
    PRIMARY KEY (id_service));
