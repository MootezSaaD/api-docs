var fs = require('fs');

var description = fs.readFileSync('./docs/description.md', 'utf8');

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'REST API for SMU/Portal',
    version: '1.0.0',
    description: description,
    contact: {
      name: "the developer",
      email: "mohamedbechir.jamoussi@medtech.tn"
    },
    license: {
      name: "AGPL-3.0",
      url: "https://www.gnu.org/licenses/agpl-3.0-standalone.html"
    },
  },
  servers: [
    {
      "url": "http://localhost:3000/api",
      "description": "Development server"
    },
  ],
  host: "localhost:3000",
  basePath: "/api",
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    }
  },
  security: [{
    bearerAuth: []
  }],
};

module.exports = swaggerDefinition;