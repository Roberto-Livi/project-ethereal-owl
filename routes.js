const routes = require("next-routes")();

routes
  .add("/admin", "/admin")
  .add("/projects", "/projects/index")
  .add("/profiles", "/profiles")
  .add("/projects/users-projects", "/projects/users-projects")
  .add("/profiles/:address", "/profile")
  .add("/projects/create-project", "/projects/create-project")
  .add("/projects/:id", "/project")
  .add("/notifications", "/notifications")
  // .add("/campaigns/:address", "/campaigns/show")
  // .add("/campaigns/:address/requests", "campaigns/requests/index")
  // .add("/campaigns/:address/requests/new", "/campaigns/requests/new");

module.exports = routes;
