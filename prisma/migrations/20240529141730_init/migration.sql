-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pasien" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "telp" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "jenisKelamin" TEXT NOT NULL,
    "ruang" TEXT NOT NULL,
    "penyakit" TEXT NOT NULL,

    CONSTRAINT "Pasien_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Complaint" (
    "id" SERIAL NOT NULL,
    "aduan" TEXT NOT NULL,
    "pasienId" INTEGER NOT NULL,

    CONSTRAINT "Complaint_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_pasienId_fkey" FOREIGN KEY ("pasienId") REFERENCES "Pasien"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
