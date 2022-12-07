var dbConn = require("../config/db.config");

var Service = function (service) {
  this.libelle = service.libelle;
  this.salaire_heure = service.salaire_heure;
  this.nb_jour = service.nb_jour;
};

Service.getAllService = function (result) {
  dbConn.query("SELECT * from service", function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Service.addService = function (newService, result) {
  dbConn.query("insert into service set ?", newService, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, { message: `Ajout avec succes id: ${res.insertId}` });
    }
  });
};

Service.getByIDService = function (id, result) {
  dbConn.query(
    "select * from service where id_service = ? or libelle = ?",
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

Service.updateService = function (newService, id, result) {
  dbConn.query(
    `update service set ? where id_service = ${id}`,
    newService,
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, { message: `Modification succes id : ${id}` });
      }
    }
  );
};

Service.deleteService = function (id, result) {
  dbConn.query(
    `delete from service  where id_service = ${id}`,
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, { message: `Suppression succes id : ${id}` });
      }
    }
  );
};
module.exports = Service;
