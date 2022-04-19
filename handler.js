// "use strict";
//
// module.exports.hello = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: "Go Serverless v3.0! Your function executed successfully!",
//         input: event,
//       },
//       null,
//       2
//     ),
//   };
// };


const { Sequelize } = require("sequelize");

let sequelize = null;

async function loadSequelize() {
    const sequelize = new Sequelize();

    // or `sequelize.sync()`
    await sequelize.sync();

    return sequelize;
}

// module.exports.handler = async function (event, callback) {
//     // re-use the sequelize instance across invocations to improve performance
//     if (!sequelize) {
//         sequelize = await loadSequelize();
//     } else {
//         // restart connection pool to ensure connections are not re-used across invocations
//         sequelize.connectionManager.initPools();
//
//         // restore `getConnection()` if it has been overwritten by `close()`
//         if (sequelize.connectionManager.hasOwnProperty("getConnection")) {
//             delete sequelize.connectionManager.getConnection;
//         }
//     }
//
//     try {
//         return await doSomethingWithSequelize(sequelize);
//     } finally {
//         // close any opened connections during the invocation
//         // this will wait for any in-progress queries to finish before closing the connections
//         await sequelize.connectionManager.close();
//     }
//
// };

module.exports.hello = async (event) => {
    await loadSequelize();
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
