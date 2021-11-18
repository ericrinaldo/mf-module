// import "../src/styles/app.scss";

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
    sort: 'alpha',
  },
  docs: {
    source: {
      state: 'open',
      type: 'dynamic',
    },
  },
  layout: 'centered',
};
