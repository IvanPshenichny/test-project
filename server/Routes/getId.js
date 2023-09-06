const router = require("express").Router();
const DataBase = require("../db");
const { getId } = require("./queries");

const getID = async (req, res) => {
    try {
  
      const ID = await DataBase.query(getId);
      res.json(ID.id)
    } catch (err) {
      console.error(err.message);
      res.status(500).json("Server Error");
    }
  }

  module.exports = getID;