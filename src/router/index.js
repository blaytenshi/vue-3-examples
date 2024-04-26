import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import pick from "lodash/pick";
import qs from "qs";

const routeProperties = ["path", "name", "component"];

const router = createRouter({
  history: createWebHistory(),
  routes: routes.map((route) => {
    const routes = pick(route, routeProperties);

    console.log(routes);
    return routes;
  }),
  parseQuery: (query) => qs.parse(query, { comma: true }),
  stringifyQuery: (query) => qs.stringify(query, { encode: false, arrayFormat: "comma" }),
});

export default router;
