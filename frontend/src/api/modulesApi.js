export async function getModules() {
  const response = await fetch('http://localhost:4000/modules');
  return response.json();
}

export async function toggleModule(moduleName, enabled) {
  await fetch('http://localhost:4000/modules/toggle', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ moduleName, enabled })
  });
}
