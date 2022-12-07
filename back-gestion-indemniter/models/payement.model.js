var dbConn = require("../config/db.config");

var Payement = function (payement) {
  this.endamnite = payement.endamnite;
  this.description = payement.description;
  this.date = payement.date;
};

Payement.getAllPayement = function (result) {
  dbConn.query("SELECT payement.id_payement as id_payement,payement.endamnite, personnel.nom as nom, payement.description as description, payement.payement as payement, payement.date as date FROM payement INNER JOIN endamnite ON endamnite.id_endamnite = payement.endamnite INNER JOIN personnel ON personnel.id_perso = endamnite.personnel", function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Payement.getByIDPayement = function (id, result) {
  dbConn.query(
    "SELECT payement.id_payement as id_payement,payement.endamnite, personnel.nom as nom, payement.description as description, payement.payement as payement, payement.date as date FROM payement INNER JOIN endamnite ON endamnite.id_endamnite = payement.endamnite INNER JOIN personnel ON personnel.id_perso = endamnite.personnel where id_payement = ? or personnel.nom=?",
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

Payement.updatePayement = function (newpayement, id, result) {
  dbConn.query(
    `update payement set ? where id_payement = ${id}`,
    newpayement,
    function (err, res) {
      if (err) {
        result(err, null);
      } else {
        result(null, { message: `Modification succes id : ${id}` });
      }
    }
  );
};

module.exports = Payement;
