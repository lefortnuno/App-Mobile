"use strict";
const Payement = require("../models/payement.model");

module.exports.getAllPayements = (req, res) => {
  Payement.getAllPayement((err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};

module.exports.getbyIDPayements = (req, res) => {
  Payement.getByIDPayement(req.params.id, (err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};

module.exports.updatePayements = (req, res) => {
  const { endamnite, description } = req.body;
  const newPayements = {
    endamnite,
    description,
  };
  Payement.updatePayement(newPayements, req.params.id, (err, resp) => {
    if (!err) {
      res.send({ data: resp });
    } else {
      res.send({ err });
    }
  });
};
