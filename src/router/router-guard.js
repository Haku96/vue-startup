export default function createRouterGuard(router) {
  router.beforeEach(async (to, from, next) => {
    if (to.matched.length === 0) {
      from.name ? next({ name: from.name }) : next('/');
    } else {
      console.log('Route Exist');
      next();
    }
  });
}
