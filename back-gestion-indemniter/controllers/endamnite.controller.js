"use strict";
const Endamnite = require("../models/endamnite.model");

module.exports.getAllEndamnites = (req, res) => {
  Endamnite.getAllEndamnite((err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};

module.exports.getbyIDEndamnites = (req, res) => {
  Endamnite.getByIDEndamnite(req.params.id, (err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};

module.exports.addEndamnites = (req, res) => {
  const { personnel, heure_travail } = req.body;
  const newEndamnites = {
    personnel,
    heure_travail,
  };
  Endamnite.addEndamnite(newEndamnites, (err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};

module.exports.updateEndamnites = (req, res) => {
  const { personnel, heure_travail } = req.body;
  const newEndamnites = {
    personnel,
    heure_travail,
  };
  Endamnite.updateEndamnite(newEndamnites, req.params.id, (err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};

module.exports.deleteEndamnites = (req, res) => {
  Endamnite.deleteEndamnite(req.params.id, (err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};
module.exports.getArgentPayerParSocietes = (req, res) => {
  Endamnite.getArgentPayerParSociete((err, resp) => {
    if (!err) {
      res.send(resp);
    } else {
      res.send({ err });
    }
  });
};
