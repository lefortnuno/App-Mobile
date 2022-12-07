var dbConn = require("../config/db.config");

var Personnel = function (etudiant) {
  this.nom = etudiant.nom;
  this.adresse = etudiant.adresse;
  this.service = etudiant.service;
};

Personnel.getAllPerso = function (result) {
  dbConn.query(
    "SELECT personnel.id_perso as id_perso, personnel.nom as nom, personnel.adresse as adresse, service.libelle as service, service.id_service as id_service FROM personnel INNER JOIN service ON personnel.service = service.id_service",
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Personnel.addPerso = function (newPerso, result) {
  dbConn.query("insert into personnel set ?", newPerso, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, { message: `Ajout avec succes id: ${res.insertId}` });
    }
  });
};

Personnel.getByIDPerso = function (id, result) {
  dbConn.query(
    "SELECT personnel.id_perso as id_perso, personnel.nom as nom, personnel.adresse as adresse, service.libelle as service, service.id_service as id_service FROM personnel INNER JOIN service ON personnel.service = service.id_service where id_perso = ? or nom = ?",
    [id, id],
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Personnel.updatePerso = function (newPerso, id, result) {
  dbConn.query(
    `update personnel set ? where id_perso = ${id}`,
    newPerso,
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, { message: `Modification succes id : ${id}` });
      }
    }
  );
};

Personnel.deletePerso = function (id, result) {
  dbConn.query(
    `delete from personnel  where id_perso = ${id}`,
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, { message: `Suppression succes id : ${id}` });
      }
    }
  );
};
module.exports = Personnel;
