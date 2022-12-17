const routes = require("next-routes")();

routes
  .add("/projects", "/projects")
  .add("/profiles", "/profiles")
  .add("/profiles/:address", "/profile")
  .add("/projects/:id", "/project")
  // .add("/campaigns/:address", "/campaigns/show")
  // .add("/campaigns/:address/requests", "campaigns/requests/index")
  // .add("/campaigns/:address/requests/new", "/campaigns/requests/new");

module.exports = routes;
