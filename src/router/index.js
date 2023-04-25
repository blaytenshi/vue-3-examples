import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import pick from "lodash/pick";

const routeProperties = ["path", "name", "component"];

const router = createRouter({
  history: createWebHistory(),
  routes: routes.map((route) => {
    const routes = pick(route, routeProperties);

    console.log(routes);
    return routes;
  }),
});

export default router;
