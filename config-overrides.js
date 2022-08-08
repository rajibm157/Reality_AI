const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "_components": "src/components",
    "_constants": "src/constants",
    "_containers": "src/containers",
    "_contexts": "src/contexts",
    "_routes": "src/routes",
    "_screens": "src/screens",
    "_services": "src/services",
  })(config);

  return config;
};
