const { setModuleStatus, getModulesList } = require('../../modulesLoader');

module.exports = {
  name: 'Manajemen Modul',
  route: '/modules',
  enabled: true,
  permissions: ['admin'],
  init: (app) => {
    // List modules
    app.get('/modules', (req, res) => {
      res.json(getModulesList());
    });

    // Toggle module status
    app.post('/modules/toggle', (req, res) => {
      const { moduleName, enabled } = req.body;
      setModuleStatus(moduleName, enabled);
      res.json({ success: true });
    });
  }
};
