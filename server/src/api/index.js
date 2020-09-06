const express = require("express");
const router = express.Router();
const monk = require("monk");
const joi = require("joi");
const db = require("../db");
const schema = require("../model");

const todo = db.get("todo"); //collection todo iside our database;

//Read all the todos
router.get("/", async (req, res, next) => {
  try {
    const items = await todo.find();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

//Read one todo
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await todo.find({
      _id: id,
    });
    if (!item) return next();
    return res.json(item);
  } catch (error) {
    next(error);
  }
});

//create post

router.post("/add", async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    const inserted = await todo.insert(value);
    res.status(200).json(inserted);
  } catch (error) {
    next(error);
  }
});

//Update todo
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = todo.findOne({
      _id: id,
    });

    if (!item) return next();
    const value = await schema.validateAsync(req.body);
    const update = await todo.update(
      {
        _id: id,
      },
      {
        $set: value,
      }
    );
    res.json(update);
  } catch (error) {
    next(error);
  }
});

//Delete one
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await todo.findOneAndDelete({
      _id: id,
    });
    res.json(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
