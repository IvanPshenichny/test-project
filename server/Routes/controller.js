const DataBase = require("../db");
const queries = require("./queries");

const getUsers = (req, res) => {
  DataBase.query(queries.getUser, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);
  DataBase.query(queries.getUserById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const addUsers = (req, res) => {
  const {firstName, lastName, email, password } = req.body;
  //check if email exist
  DataBase.query(queries.checkEmailExist, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exist");
    }
    //add user to DB
    DataBase.query(
      queries.addUsers,
      [firstName, lastName, email, password],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("New user added successfully");
        console.log("User Create");
      }
    );
  });
};
const deleteUsers = (req, res) => {
  const id = parseInt(req.params.id);
  DataBase.query(queries.getUserById, [id], (error, results) => {
    if (!results.rows.length) {
      res.send("User doesnt exist in the data base");
    }
    DataBase.query(queries.removeUsers, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("User remove successfuly");
    });
  });
};

const updateUser = (req,res) => {
    const id = parseInt(req.params.id);
    const {firstname} = req.body;

    DataBase.query(queries.getUserById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send("User doesnt exist in the data base"); 
        }
        DataBase.query(queries.updateUsers, [firstname, id], (error,results) => {
            if (error) throw error;
            res.status(200).send('Users first name update successfully');
        })
    })
}

module.exports = {
  getUsers,
  getUsersById,
  addUsers,
  deleteUsers,
  updateUser,
};
