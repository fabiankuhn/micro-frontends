const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "client",

  exposes: {
    "./Component": "./src/app/app.component.ts",
    "./routes": "./src/app/app.routes.ts",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }),
  }

});
