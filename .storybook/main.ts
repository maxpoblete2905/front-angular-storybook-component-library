import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  // ESTA es la clave para la documentación en SB9:
  docs: {
    defaultName: 'Documentation',
  },
};

export default config;