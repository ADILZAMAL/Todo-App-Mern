const joi = require("joi");

const schema = joi.object({
  todo_description: joi.string().trim().required(),
  todo_responsible: joi.string().required(),
  todo_priority: joi.string().required(),
  todo_completed: joi.boolean().required(),
});

module.exports = schema;
