'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:     process.env.SERVER_IP ||
          process.env.IP ||
          undefined,

  // Server port
  port:   process.env.SERVER_PORT ||
          process.env.PORT ||
          8080,

  // Seed database on startup
  seedDB: false,

  // MongoDB connection options
  mongo: {
    uri:  process.env.MONGO_URI ||
          'mongodb://localhost/paizaqa'
  }
};
