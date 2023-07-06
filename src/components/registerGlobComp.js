import Text from './text/index.vue';

const components = [Text];

export function registerGlobComp(app) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
}
