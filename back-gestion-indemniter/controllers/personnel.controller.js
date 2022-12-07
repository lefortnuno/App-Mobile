"use strict";
const Personnel = require("../models/personnel.model");

module.exports.getAllPersonnel = (req, res) => {
  Personnel.getAllPerso((err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};

module.exports.getbyIDPersonnel = (req, res) => {
  Personnel.getByIDPerso(req.params.id, (err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};

module.exports.addPersonnel = (req, res) => {
  const { nom, adresse, service } = req.body;
  const newPerso = {
    nom,
    adresse,
    service,
  };
  Personnel.addPerso(newPerso, (err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};

module.exports.updatePersonnel = (req, res) => {
  const { nom, adresse, service } = req.body;
  const newPerso = {
    nom,
    adresse,
    service,
  };
  Personnel.updatePerso(newPerso, req.params.id, (err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};

module.exports.deletePersonnel = (req, res) => {
  Personnel.deletePerso(req.params.id, (err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};
