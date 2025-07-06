module.exports = {
  name: 'Dokumen & Sertifikat',
  route: '/documents',
  enabled: true,
  permissions: ['admin', 'anggota'],
  init: (app) => {
    app.get('/documents', (req, res) => {
      res.json({ message: 'Dokumen Modul Aktif!' });
    });
  }
};
