import development from './envs/development';
import production from './envs/production';
import test from './envs/test';

export type ConfigType = typeof development & typeof test & typeof production;

const configs = { development, production, test };

export default configs[process.env.NODE_ENV || 'development'] as ConfigType;
