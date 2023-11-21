export const defineModule = (title, reducers, routes) => {
  return { title, reducers, routes };
};

export const flatModules = (modules) =>
  Object.keys(modules)
    .map((x) => {
      const res = Array.isArray(modules[x]) ? modules[x] : [modules[x]];
      res.forEach((y) => (y["module"] = x));
      return res;
    })
    .reduce((c, n) => c.concat(n));

export const combineModuleReducers = (modules, isCoreModules = false) => {
  const reducers = {};
  const flat = flatModules(modules);

  for (let i = 0; i < flat.length; i++) {
    const module = flat[i]["module"];
    const moduleReducers = flat[i].reducers;

    for (let key in moduleReducers) {
      if (moduleReducers.hasOwnProperty(key)) {
        if (typeof moduleReducers[key] !== "function") {
          throw new Error("Module " + i + " does not define reducer!");
        } else {
          let reducerName = module + (isCoreModules ? "Core" : "");
          if (module !== key) {
            reducerName += key.charAt(0).toUpperCase() + key.slice(1);
          }
          reducers[reducerName] = moduleReducers[key];
        }
      }
    }
    //@todo add support for nested modules if we need
  }

  return reducers;
};

export const moduleRoutes = (modules) => {
  let routes = [];
  const flat = flatModules(modules);

  for (let i = 0; i < flat.length; i++) {
    routes = routes.concat(flat[i].routes);
  }

  return routes;
};
