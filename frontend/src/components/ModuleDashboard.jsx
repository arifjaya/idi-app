import React, { useEffect, useState } from 'react';
import { getModules, toggleModule } from '../api/modulesApi';

function ModuleDashboard() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    getModules().then(setModules);
  }, []);

  const handleToggle = async (moduleName, currentStatus) => {
    await toggleModule(moduleName, !currentStatus);
    setModules(await getModules());
  };

  return (
    <div>
      <h2>Manajemen Modul</h2>
      {modules.map(m => (
        <div key={m.name}>
          <span>{m.name}</span>
          <input
            type="checkbox"
            checked={m.enabled}
            onChange={() => handleToggle(m.name, m.enabled)}
          />
        </div>
      ))}
    </div>
  );
}

export default ModuleDashboard;
