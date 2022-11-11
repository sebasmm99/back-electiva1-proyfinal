const express = require('express');
const userController = require("../controllers/user.controller");

const api = express.Router();

api.post("/signup", userController.signUp);
api.post("/signin", userController.signIn);

module.exports = api;

// const express = require('express');
// const userRoutes = express.Router('/',(req, res)=>{});
// const userSchema = require('../models/user.model.js');


// userRoutes.post('/user', (req, res)=>{
//     const new_user = userSchema(req.body);
//     new_user
//         .save()
//         .then((data)=>res.json(data))
//         .catch((error)=>res.json({message:error}))

// })

// userRoutes.get('/user', (req,res)=>{
//     userSchema
//         .find()
//         .then((data)=>res.json(data))
//         .catch((error)=>res.json({message:error}))
// })

// userRoutes.get('/user/:id', (req,res)=>{
//     const {id} = req.params
//     userSchema
//         .findById(id)
//         .then((data)=>res.json(data))
//         .catch((error)=>res.json({message:error}))
// })

// userRoutes.delete('/user/:id', (req,res)=>{
//     const {id} = req.params
//     userSchema
//         .remove({ _id: id })
//         .then((data)=>res.json(data))
//         .catch((error)=>res.json({message:error}))
// })

// userRoutes.put('/user/:id', (req,res)=>{
//     const {id} = req.params
//     const {name,lastname,email,contact,proffession} = req.body
//     userSchema
//         .updateOne({ _id: id },{$set:{name, lastname, email, contact, proffession}})
//         .then((data)=>res.json(data))
//         .catch((error)=>res.json({message:error}))
// })

// module.exports = userRoutes