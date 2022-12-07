var dbConn = require("../config/db.config");

var Endamnite = function (endamnite) {
  this.personnel = endamnite.personnel;
  this.heure_travail = endamnite.heure_travail;
};

Endamnite.getAllEndamnite = function (result) {
  dbConn.query(
    "SELECT endamnite.id_endamnite as id_endamnite, personnel.id_perso as id_perso, personnel.nom as nom, service.libelle as service, endamnite.heure_travail as heure_travail, service.salaire_heure as salaire_heure, (service.nb_jour * service.salaire_heure * endamnite.heure_travail) as montant FROM endamnite INNER JOIN personnel on endamnite.personnel = personnel.id_perso INNER JOIN service on service.id_service = personnel.service",
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Endamnite.addEndamnite = async function (newendamnite, result) {
  await dbConn.query(
    "insert into endamnite set ?",
    newendamnite,
    function (err, res) {
      dbConn.query(
        "SELECT  (service.nb_jour * service.salaire_heure * endamnite.heure_travail) as montant FROM endamnite INNER JOIN personnel on endamnite.personnel = personnel.id_perso INNER JOIN service on service.id_service = personnel.service where id_endamnite=?",
        res.insertId,
        (ers, ress) => {
          const netApayer = ress[0].montant;
          dbConn.query(
            'insert into payement set endamnite = ? , description = "Non Payé", payement = ?',
            [res.insertId, netApayer],
            (error, response) => {
              if (err || error) {
                result({ err, error }, null);
              } else {
                result(null, {
                  message: `Ajout avec succes id: ${res.insertId}`,
                });
              }
            }
          );
        }
      );
    }
  );
};

Endamnite.getByIDEndamnite = function (id, result) {
  dbConn.query(
    "SELECT endamnite.id_endamnite as id_endamnite, personnel.id_perso as id_perso, personnel.nom as nom, service.libelle as service, endamnite.heure_travail as heure_travail, service.salaire_heure as salaire_heure, (service.nb_jour * service.salaire_heure * endamnite.heure_travail) as montant FROM endamnite INNER JOIN personnel on endamnite.personnel = personnel.id_perso INNER JOIN service on service.id_service = personnel.service where id_endamnite = ?",
    id,
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Endamnite.updateEndamnite = function (newendamnite, id, result) {
  dbConn.query(
    `update endamnite set ? where id_endamnite = ${id}`,
    newendamnite,
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, { message: `Modification succes id : ${id}` });
      }
    }
  );
};

Endamnite.deleteEndamnite = function (id, result) {
  dbConn.query(
    `delete from endamnite  where id_endamnite = ${id}`,
    async function (err, res) {
      await dbConn.query(
        `delete from payement  where endamnite = ${id}`,
        (error, response) => {
          if (err || error) {
            result({ err, error }, null);
          } else {
            result(null, { message: `Suppression succes id : ${id}` });
          }
        }
      );
    }
  );
};

Endamnite.getArgentPayerParSociete = function (result) {
  dbConn.query(
    "SELECT  SUM(service.nb_jour * service.salaire_heure * endamnite.heure_travail) as montant FROM endamnite INNER JOIN personnel on endamnite.personnel = personnel.id_perso INNER JOIN service on service.id_service = personnel.service",
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, res[0]);
      }
    }
  );
};
module.exports = Endamnite;
