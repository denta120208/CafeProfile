# 🚀 Panduan Setup Cita Nusa Resto

## Prasyarat
Pastikan Anda sudah menginstall:
- **Node.js** (v18 atau lebih baru)
- **PostgreSQL** (v14 atau lebih baru)
- **npm** atau **yarn**

## Langkah-langkah Setup

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Setup Database PostgreSQL

#### Opsi A: PostgreSQL Lokal
1. Install PostgreSQL di komputer Anda
2. Buat database baru:
```sql
CREATE DATABASE cita_nusa_resto;
```

#### Opsi B: PostgreSQL Cloud (Neon, Supabase, dll)
1. Buat akun di layanan cloud PostgreSQL
2. Dapatkan connection string dari dashboard

### 3️⃣ Konfigurasi Environment Variables

File `.env` sudah dibuat dengan konfigurasi default. Sesuaikan dengan setup Anda:

```env
# Database - Sesuaikan dengan credentials PostgreSQL Anda
DATABASE_URL="postgresql://postgres:password@localhost:5432/cita_nusa_resto?schema=public"

# JWT Secret - Ganti dengan string random yang aman untuk production
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# Email (Optional) - Untuk fitur notifikasi email booking
RESEND_API_KEY="your-resend-api-key-here"

# Next.js
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

**Catatan Penting:**
- Ubah `postgres:password` dengan username dan password PostgreSQL Anda
- Ubah `JWT_SECRET` dengan string random yang kuat (untuk production)
- `RESEND_API_KEY` opsional, hanya diperlukan jika ingin menggunakan fitur email

### 4️⃣ Setup Database dengan Prisma

Generate Prisma Client:
```bash
npx prisma generate
```

Jalankan migrasi database:
```bash
npx prisma migrate dev
```

Atau jika sudah ada migrasi, push schema ke database:
```bash
npx prisma db push
```

### 5️⃣ Seed Database (Data Awal)

Isi database dengan data contoh (menu, kategori, dll):
```bash
npm run seed
```

### 6️⃣ Jalankan Development Server

```bash
npm run dev
```

Buka browser dan akses: **http://localhost:3000**

## 🎯 Akun Default Setelah Seeding

Setelah menjalankan seed, Anda bisa login dengan akun:

**Admin:**
- Email: `admin@citanusa.com`
- Password: (check file `prisma/seed.ts`)

**Customer:**
- Email: `customer@citanusa.com`
- Password: (check file `prisma/seed.ts`)

## 📦 Perintah Berguna

```bash
# Development
npm run dev          # Jalankan dev server

# Build
npm run build        # Build untuk production
npm start            # Jalankan production build

# Database
npx prisma studio    # Buka Prisma Studio (GUI database)
npx prisma migrate dev # Buat dan jalankan migrasi baru
npm run seed         # Seed database dengan data awal

# Linting
npm run lint         # Check code quality
```

## 🔍 Troubleshooting

### Error: Connection to database failed
- Pastikan PostgreSQL sudah running
- Check credentials di `DATABASE_URL`
- Pastikan database sudah dibuat

### Error: Prisma Client not found
```bash
npx prisma generate
```

### Error saat migrasi
```bash
# Reset database (HATI-HATI: ini akan menghapus semua data)
npx prisma migrate reset
```

### Port 3000 sudah digunakan
```bash
# Gunakan port lain
PORT=3001 npm run dev
```

## 📞 Butuh Bantuan?

Jika mengalami masalah, silakan:
1. Check file log error
2. Pastikan semua dependencies terinstall
3. Pastikan PostgreSQL running
4. Check konfigurasi `.env`

Selamat mencoba! 🎉
