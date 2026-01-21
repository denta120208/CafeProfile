# Foodpedia

Sebuah aplikasi web fullstack untuk restoran "Foodpedia" dengan sistem reservasi meja yang lengkap. Proyek ini dibuat sebagai showcase pribadi menggunakan Next.js dengan Pages Router dan berbagai tech stack modern.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/denta120208/CafeProfile)

## 📋 Daftar Isi

- [Demo](#-demo)
- [Fitur](#-fitur)
- [Tech Stack](#-tech-stack)
- [Instalasi](#-instalasi)
- [Penggunaan](#-penggunaan)
- [Deployment](#-deployment)
- [Struktur Proyek](#-struktur-proyek)
- [API Endpoints](#-api-endpoints)
- [Kredensial Demo](#-kredensial-demo)

## 🚀 Demo

**Live Demo:** [https://cafeprofile.vercel.app](https://cafeprofile.vercel.app) *(akan tersedia setelah deployment)*

**GitHub Repository:** [https://github.com/denta120208/CafeProfile](https://github.com/denta120208/CafeProfile)

## ✨ Fitur

- 🍽️ **Katalog Menu**: Tampilan menu makanan dan minuman yang menarik
- 📅 **Sistem Pemesanan**: Reservasi meja dengan pilihan tanggal, waktu, dan jumlah tamu
- 👤 **Manajemen Akun**: Registrasi, login, dan pengelolaan profil pengguna
- 📧 **Notifikasi Email**: Konfirmasi pemesanan melalui email
- 📱 **Responsif**: Tampilan yang optimal di berbagai perangkat
- 🔐 **Admin Dashboard**:
  - Manajemen pengguna
  - Manajemen menu
  - Manajemen reservasi
  - Manajemen pesanan
  - Manajemen meja
  - Visualisasi data menggunakan Recharts untuk melihat insight harian reservasi dan pesanan

## 💻 Tech Stack

### Frontend

- **Next.js** (Pages Router) - Framework React untuk rendering sisi server dan client
- **TailwindCSS** - Framework CSS untuk desain yang cepat dan responsif
- **React Hook Form & Zod** - Validasi dan pengelolaan formulir
- **TanStack Query** - Manajemen state dan fetching data
- **Zustand** - Manajemen state global
- **React DatePicker** - Komponen pemilihan tanggal
- **date-fns** - Utilitas manipulasi tanggal dan waktu
- **Framer Motion** - Library untuk animasi UI
- **Recharts** - Library untuk visualisasi data di dashboard admin

### Backend

- **Next.js API Routes** - Endpoint API REST
- **Prisma** - ORM untuk interaksi database
- **PostgreSQL** - Database relasional
- **JSON Web Token** - Otentikasi pengguna
- **Resend** - Layanan pengiriman email

## 🔧 Instalasi

### Prasyarat

- Node.js (versi 18.x atau lebih tinggi)
- NPM atau Yarn
- PostgreSQL atau akun [Neon.tech](https://neon.tech) (gratis)

### Langkah-langkah

1. **Clone repositori:**

   ```bash
   git clone https://github.com/denta120208/CafeProfile.git
   cd CafeProfile
   ```

2. **Install dependensi:**

   ```bash
   npm install
   ```

3. **Setup Database:**

   **Opsi A - Cloud Database (Neon.tech)** ⭐ Recommended
   
   - Sign up di [Neon.tech](https://neon.tech) (gratis)
   - Buat project baru
   - Copy connection string yang diberikan

   **Opsi B - Docker (Local)**
   
   ```bash
   docker-compose up -d
   ```

4. **Konfigurasi Environment Variables:**

   Buat file `.env` di root folder:

   ```env
   # Database (gunakan connection string dari Neon.tech atau localhost)
   DATABASE_URL="postgresql://username:password@host/database?sslmode=require"
   
   # JWT Secret (ganti dengan random string yang aman)
   JWT_SECRET="your-super-secret-jwt-key-change-this"
   
   # Email (Optional - untuk fitur notifikasi)
   RESEND_API_KEY="your-resend-api-key"
   
   # Next.js
   NEXT_PUBLIC_API_URL="http://localhost:3000"
   ```

5. **Jalankan migrasi database:**

   ```bash
   npx prisma generate
   npx prisma migrate deploy
   ```

6. **Seed database dengan data dummy:**
   ```bash
   npm run seed
   ```

   Data yang akan di-generate:
   - 42 menu items dengan gambar
   - 7 kategori menu
   - 3 users (admin, staff, customer)
   - 12 meja restoran

## 🚀 Penggunaan

### Mode Development

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat aplikasi.

### Build untuk Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy ke Vercel (Recommended)

Aplikasi ini sudah dikonfigurasi untuk deployment ke Vercel. Ikuti panduan lengkap di [DEPLOYMENT.md](DEPLOYMENT.md)

**Quick Steps:**

1. Push code ke GitHub ✅ *(sudah selesai)*
2. Login ke [Vercel](https://vercel.com)
3. Import repository: `denta120208/CafeProfile`
4. Tambahkan Environment Variables:
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `RESEND_API_KEY` (optional)
5. Deploy! 🚀

Vercel akan otomatis:
- Generate Prisma Client
- Run database migrations
- Build aplikasi
- Deploy ke production

**Auto Deployment:** Setiap push ke branch `main` akan otomatis trigger deployment baru.

### Kenapa Tidak Bisa Deploy ke GitHub Pages?

❌ GitHub Pages hanya support **static site** (HTML/CSS/JS)  
✅ Aplikasi ini membutuhkan **server-side rendering & API routes**

**Alternatif deployment:**
- Vercel (Recommended - dibuat oleh tim Next.js)
- Netlify
- Railway
- Render

## 📁 Struktur Proyek

```
foodpedia/
├── .next/              # Build output dari Next.js
├── node_modules/       # Dependensi
├── prisma/             # Schema Prisma dan migrations
│   └── seed.ts         # Script pengisian data dummy
├── public/             # File statis
├── src/                # Source code
│   ├── components/     # Komponen React yang dapat digunakan kembali
│   ├── constants/      # Konstanta aplikasi
│   ├── emails/         # Template email
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilitas dan helper functions
│   ├── pages/          # Halaman dan API routes (Next.js Pages Router)
│   │   ├── api/        # Backend API endpoints
│   │   └── ...         # Frontend pages
│   ├── service/        # Service layer
│   │   └── emailService.tsx # Service untuk pengiriman email
│   ├── store/          # State management (Zustand)
│   ├── styles/         # File CSS global dan utilitas
│   ├── types/          # Type definitions TypeScript
│   └── utils/          # Fungsi utilitas
├── .env                # Environment variables
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── vercel.json
```

## 📡 API Endpoints

### Autentikasi

- `POST /api/auth/register` - Registrasi pengguna baru
- `POST /api/auth/login` - Login pengguna

### Menu

- `GET /api/menus` - Dapatkan semua menu
- `POST /api/menus` - Tambah menu baru
- `GET /api/menus/[id]` - Dapatkan detail menu berdasarkan ID
- `PATCH /api/menus/[id]` - Update menu
- `DELETE /api/menus/[id]` - Hapus menu
- `GET /api/menus/categories` - Dapatkan semua kategori menu

### Reservasi

- `POST /api/bookings` - Buat reservasi baru
- `GET /api/bookings` - Dapatkan semua reservasi pengguna
- `GET /api/bookings/[id]` - Dapatkan detail reservasi
- `PATCH /api/bookings/[id]` - Update reservasi
- `DELETE /api/bookings/[id]` - Batalkan reservasi

### Pesanan

- `POST /api/orders` - Buat pesanan baru
- `GET /api/orders` - Dapatkan semua pesanan pengguna
- `GET /api/orders/[id]` - Dapatkan detail pesanan
- `PATCH /api/orders/[id]` - Update pesanan

### Meja

- `GET /api/tables` - Dapatkan semua data meja
- `POST /api/tables` - Buat meja baru
- `GET /api/tables/[id]` - Dapatkan detail meja
- `PATCH /api/tables/[id]` - Update status meja
- `DELETE /api/tables/[id]` - Hapus meja
- `GET /api/tables/available` - Dapatkan meja yang tersedia

### Admin

- `GET /api/admin/dashboard-stats` - Dapatkan data untuk statistik dashboard
- `GET /api/admin/users` - Dapatkan daftar pengguna
- `PATCH /api/admin/users/[id]` - Update role pengguna

### PROFILE

- `GET /api/profile` - Dapatkan data profil pengguna

### KONTAK

- `POST /api/contact` - Kirim pesan kontak

## 🔐 Kredensial Demo

Setelah menjalankan `npm run seed`, gunakan kredensial berikut untuk login:

**Admin:**
- Email: `admin@citanusa.com`
- Password: `admin123`

**Staff:**
- Email: `staff@citanusa.com`
- Password: `staff123`

**Customer:**
- Email: `customer@example.com`
- Password: `customer123`

## 📝 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran dan portfolio.

## 🤝 Kontribusi

Kontribusi, issues, dan feature requests sangat diterima!

## 📧 Kontak

- GitHub: [@denta120208](https://github.com/denta120208)
- Repository: [CafeProfile](https://github.com/denta120208/CafeProfile)

---

Dibuat dengan ❤️ menggunakan Next.js, Prisma, dan PostgreSQL
