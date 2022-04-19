const client = require("pg/lib/client");
// const client = require('serverless-postgres')
const db = require("./models/index")
const User = db['user']



module.exports.hello = async (event) => {

    var res = await client.Query(`
    CREATE TABLE IF NOT EXISTS users
    (
        id serial not null PRIMARY KEY, 
        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        uuid char(36) not null, 
        name varchar(100) not null
    );  
    `)

    console.log(res)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
