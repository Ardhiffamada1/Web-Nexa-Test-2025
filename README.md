# Web Test Nexa 2025

## Teknologi yang Digunakan

- **Next.js**: Framework React untuk aplikasi web yang cepat dan efisien.
- **Tailwind CSS**: Framework CSS utility-first untuk desain yang responsif dan kustom.
- **PostgreSQL**: Sistem manajemen basis data relasional.
- **Prisma**: ORM (Object Relational Mapper) untuk interaksi dengan database PostgreSQL.

## Prasyarat

Sebelum memulai, pastikan Anda memiliki perangkat lunak berikut yang terinstal di komputer Anda:

- [Node.js](https://nodejs.org/) (Versi LTS disarankan)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)

## Langkah-langkah untuk Menjalankan Proyek

Ikuti langkah-langkah di bawah ini untuk mengkloning dan menjalankan proyek ini secara lokal:

## Setup Project

1. Clone repository ini:

   ```bash
   git clone https://github.com/Ardhiffamada1/Web-Nexa-Test-2025/
   cd Web-Nexa-Test-2025
   ```

2. Install dependensi:

   ```bash
   npm install
   ```

3. Atur variabel lingkungan di `.env`

   ```bash
   DATABASE_URL="postgresql://username:password@localhost:5432/ceritakita?schema=public"
   ```

4. Jalankan PostgreSQL di mesin Anda dan buat database yang diperlukan.

5. Jalankan migrasi untuk membuat tabel di database:

   ```bash
   npm run migrate
   ```

6. Jalankan aplikasi Next.js:

   ```bash
   npm run dev
   ```

7. Akses aplikasi di browser melalui `http://localhost:3000`.
