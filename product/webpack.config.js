const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "client",

  exposes: {
    "./routes": "./src/app/app.routes.ts",
    "./chart": "./src/component/chart.component.ts",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }),
  }

});
