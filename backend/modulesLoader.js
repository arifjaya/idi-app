const fs = require('fs');
const path = require('path');
const config = require('./config.json');

function loadModules(app) {
  const modulesPath = path.join(__dirname, 'modules');
  const moduleFolders = fs.readdirSync(modulesPath);

  moduleFolders.forEach(folder => {
    const moduleConfig = config.modules[folder];
    if (moduleConfig) {
      const moduleIndex = path.join(modulesPath, folder, 'index.js');
      if (fs.existsSync(moduleIndex)) {
        const mod = require(moduleIndex);
        if (mod.enabled) {
          mod.init(app);
        }
      }
    }
  });
}

function setModuleStatus(moduleName, enabled) {
  const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')));
  config.modules[moduleName] = enabled;
  fs.writeFileSync(path.join(__dirname, 'config.json'), JSON.stringify(config, null, 2));
}

function getModulesList() {
  const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')));
  return Object.entries(config.modules).map(([name, enabled]) => ({ name, enabled }));
}

module.exports = { loadModules, setModuleStatus, getModulesList };
