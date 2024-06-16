const { addRawData, getProcessedData } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/',
        handler: addRawData,
    },
    {
        method: 'GET',
        path: '/',
        handler: getProcessedData,
    },
  ];
   
  module.exports = routes;
  