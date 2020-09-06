const monk = require('monk');
const url = "localhost:27017/crud-app";

const db = monk(url);

db.then(() => {
  console.log("database is connected");
}).catch((error) => {
  console.log("error");
});

module.exports=db