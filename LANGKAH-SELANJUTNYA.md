# 📋 Langkah Selanjutnya

## ✅ Yang Sudah Selesai:
1. ✅ Dependencies terinstall
2. ✅ Prisma Client sudah digenerate
3. ✅ File `.env` sudah dibuat

## 🔄 Yang Perlu Dilakukan:

### 1. Setup PostgreSQL Database

**Pilih salah satu opsi:**

#### Opsi A: PostgreSQL Cloud (TERMUDAH - GRATIS)

**Neon.tech (Recommended):**
1. Buka https://neon.tech
2. Sign up gratis
3. Create new project
4. Copy connection string
5. Paste ke `.env` file di `DATABASE_URL`

**Supabase:**
1. Buka https://supabase.com
2. Sign up gratis
3. Create new project
4. Go to Settings > Database
5. Copy connection string (mode: Session atau Transaction)
6. Paste ke `.env` file di `DATABASE_URL`

#### Opsi B: PostgreSQL Lokal

```powershell
# Install PostgreSQL
winget install PostgreSQL.PostgreSQL

# Atau download dari:
# https://www.postgresql.org/download/windows/

# Setelah install, buat database:
# 1. Buka pgAdmin atau psql
# 2. Create database: cita_nusa_resto
# 3. Update .env dengan credentials Anda
```

### 2. Setelah PostgreSQL Ready

Jalankan perintah ini satu per satu:

```powershell
# Migrate database (buat tabel-tabel)
node ./node_modules/prisma/build/index.js migrate dev

# Seed database (isi data awal)
npm run seed

# Jalankan development server
npm run dev
```

### 3. Akses Aplikasi

Buka browser: **http://localhost:3000**

### 4. Login ke Admin Dashboard

Setelah seed berhasil, gunakan akun ini untuk login:

**Admin:**
- Email: (cek di `prisma/seed.ts`)
- Password: (cek di `prisma/seed.ts`)

## 🔧 Troubleshooting

### Jika error saat migrate:
```powershell
# Cek koneksi database
node ./node_modules/prisma/build/index.js db pull
```

### Jika ingin reset database:
```powershell
# HATI-HATI: Ini akan hapus semua data!
node ./node_modules/prisma/build/index.js migrate reset
```

### Jika ingin lihat database dengan GUI:
```powershell
# Buka Prisma Studio
node ./node_modules/prisma/build/index.js studio
```

## 📞 Perintah Berguna

```powershell
# Development
npm run dev              # Start dev server
npm run build            # Build production
npm start                # Run production

# Database
node ./node_modules/prisma/build/index.js studio      # Database GUI
node ./node_modules/prisma/build/index.js migrate dev # Migrate
npm run seed             # Seed data

# Linting
npm run lint             # Check code
```

## 🎯 Next Steps Setelah Setup

1. Explore fitur booking system
2. Test customer booking flow
3. Test admin dashboard
4. Customize menu & kategori
5. Setup email notification (optional)

Selamat mencoba! 🚀
