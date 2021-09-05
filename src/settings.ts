import { readdirSync, readFileSync } from 'fs';
import path from 'path';


const basePath = path.join(__dirname, '..');
export const rootPath = () => basePath;
export const srcPath = () => path.join(basePath, 'src');
const configsPath = () => path.join(basePath, 'configs');
export const getConfigPath = (relativePathInConfigs: string) => path.join(configsPath(), relativePathInConfigs);
export const configs: any = {};

function readConfigs(p: string[] = []) {
  const base = path.join(configsPath(), ...p);
  const files = readdirSync(base, { withFileTypes: true });
  for (const obj of files) {
    const parent = p.reduce((acc, key) => acc[key], configs);
    if (obj.isFile()) {
      // const isSecret = !!obj.name.match(/secret/gi);
      const objname = obj.name.replace(/\.secret/, '');
      const _name = objname.split('.');
      const ext = _name.pop();
      if (ext?.toLocaleLowerCase() == 'json') {
        const parsed = JSON.parse(readFileSync(`${base}/${obj.name}`, { encoding: 'utf-8' }));
        parent[_name.join('.')] = { ...parent[_name.join('.')], ...parsed };
      }
      else {
        const parsed = readFileSync(`${base}/${obj.name}`, { encoding: 'utf-8' });
        parent[objname] = parsed;
      }
    }
    if (obj.isDirectory()) {
      if (!parent[obj.name]) parent[obj.name] = {};
      readConfigs([...p, obj.name]);
    }
  }
}
readConfigs();

function readEnvs() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV.toUpperCase() !== 'PRODUCTION') {
    // console.log('requiring dotenv');
    // require('dotenv').config();
  }
  return process.env;
}
export const env = readEnvs();
configs.env = env;
export const ENV_PROD = env.NODE_ENV?.toUpperCase().startsWith('PROD') ? true : false;
export const pkgJson = JSON.parse(readFileSync(path.join(rootPath(), 'package.json'), 'utf-8'));
// console.log(configs);
