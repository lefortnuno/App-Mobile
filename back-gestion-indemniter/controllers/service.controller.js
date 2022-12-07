"use strict";
const Service= require("../models/service.model");

module.exports.getAllServices = (req, res) => {
  Service.getAllService((err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};

module.exports.getbyIDServices = (req, res) => {
  Service.getByIDService(req.params.id, (err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};

module.exports.addServices = (req, res) => {
  const { libelle, salaire_heure, nb_jour } = req.body;
  const newServices = {
    libelle,
    salaire_heure,
    nb_jour,
  };
  Service.addService(newServices, (err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};

module.exports.updateServices = (req, res) => {
  const { libelle, salaire_heure, nb_jour } = req.body;
  const newServices = {
    libelle,
    salaire_heure,
    nb_jour,
  };
  Service.updateService(newServices, req.params.id, (err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};

module.exports.deleteServices = (req, res) => {
  Service.deleteService(req.params.id, (err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};
