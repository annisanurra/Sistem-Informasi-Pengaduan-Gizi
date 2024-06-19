// Tambah komplain pasien
app.post('/complaints', async (req, res) => {
    const { nama, telp, alamat, jenisKelamin, ruang, penyakit, aduan } = req.body;
    try {
      const pasien = await prisma.pasien.upsert({
        where: { telp },
        update: {},
        create: {
          nama,
          telp,
          alamat,
          jenisKelamin,
          ruang,
          penyakit,
        },
      });
  
      const newComplaint = await prisma.complaint.create({
        data: {
          aduan,
          pasienId: pasien.id,
        },
      });
  
      res.status(201).json(newComplaint);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
});
  
  // Ambil data komplain pasien
app.get('/complaints', async (req, res) => {
    try {
      const complaints = await prisma.complaint.findMany({
        include: {
          pasien: true,
        },
      });
      res.json(complaints);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
});