# 🚀 Panduan Deployment Foodpedia ke Vercel

## Mengapa Vercel?

- ✅ **Gratis** untuk personal projects
- ✅ **Dibuat oleh tim Next.js** - kompatibilitas sempurna
- ✅ **Deploy otomatis** dari GitHub
- ✅ **Support API Routes & SSR** (tidak seperti GitHub Pages)
- ✅ **Custom domain gratis** (.vercel.app)

---

## 📋 Langkah-langkah Deployment

### 1️⃣ Persiapan GitHub Repository

✅ **Sudah selesai!** Repository Anda sudah di-push ke:
```
https://github.com/denta120208/CafeProfile
```

### 2️⃣ Sign Up / Login ke Vercel

1. Buka: **https://vercel.com**
2. Klik **"Sign Up"** atau **"Login"**
3. Pilih **"Continue with GitHub"**
4. Authorize Vercel untuk akses GitHub Anda

### 3️⃣ Import Project dari GitHub

1. Di dashboard Vercel, klik **"Add New Project"**
2. Pilih **"Import Git Repository"**
3. Cari repository: **`denta120208/CafeProfile`**
4. Klik **"Import"**

### 4️⃣ Configure Project

Vercel akan otomatis mendeteksi Next.js. Anda hanya perlu:

1. **Project Name**: Biarkan `CafeProfile` atau ganti sesuai keinginan
2. **Framework Preset**: Next.js (sudah otomatis terdeteksi)
3. **Build Command**: `prisma generate && next build` (sudah di-set di vercel.json)
4. **Output Directory**: `.next` (default)

### 5️⃣ Setup Environment Variables

Klik **"Environment Variables"** dan tambahkan:

| Name | Value |
|------|-------|
| `DATABASE_URL` | `postgresql://neondb_owner:npg_Yn6H4UiltyVu@ep-cool-poetry-ahch8qi0-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require` |
| `JWT_SECRET` | `your-super-secret-jwt-key-change-this-in-production` |
| `RESEND_API_KEY` | `your-resend-api-key-here` (optional) |
| `NEXT_PUBLIC_API_URL` | (leave empty, akan otomatis) |

**Catatan:**
- ✅ Database URL sudah menggunakan Neon.tech (cloud database)
- 🔐 Ganti `JWT_SECRET` dengan random string yang lebih aman untuk production

### 6️⃣ Deploy!

1. Klik **"Deploy"**
2. Tunggu 2-3 menit (Vercel akan build project Anda)
3. Setelah selesai, Anda akan mendapat URL seperti:
   ```
   https://cafe-profile.vercel.app
   ```

---

## 🎉 Setelah Deployment Berhasil

### ✅ Aplikasi Anda Live!

URL akan berbentuk: `https://your-project-name.vercel.app`

Contoh: `https://cafeprofile-denta.vercel.app`

### 🔄 Auto Deployment

Setiap kali Anda push ke GitHub:
```bash
git add .
git commit -m "Update feature"
git push origin main
```

Vercel akan **otomatis deploy** perubahan Anda! 🚀

---

## 🐛 Troubleshooting

### Error: "Prisma Client not generated"

Vercel sudah dikonfigurasi dengan `buildCommand` di `vercel.json`:
```json
{
  "buildCommand": "prisma generate && next build"
}
```

Jika masih error, tambahkan di **Vercel Project Settings**:
- Build Command: `prisma generate && next build`

### Error: "Database connection failed"

Pastikan `DATABASE_URL` di Environment Variables sudah benar dan menggunakan connection string dari Neon.tech.

### Error: "Module not found"

Jalankan di local dulu untuk memastikan tidak ada error:
```bash
npm run build
npm start
```

---

## 📱 Custom Domain (Optional)

Setelah deploy berhasil, Anda bisa tambahkan custom domain:

1. Beli domain di Namecheap, GoDaddy, atau gunakan yang gratis
2. Di Vercel dashboard, pilih project Anda
3. Klik **"Settings"** → **"Domains"**
4. Tambahkan domain Anda
5. Update DNS settings sesuai instruksi Vercel

---

## 🔗 Link Penting

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Neon.tech Dashboard**: https://console.neon.tech
- **GitHub Repository**: https://github.com/denta120208/CafeProfile

---

## 🎯 Hasil Akhir

✅ Aplikasi live di internet dengan URL: `https://your-app.vercel.app`  
✅ Auto-deploy setiap push ke GitHub  
✅ Database cloud (Neon.tech) - tidak perlu setup PostgreSQL lokal  
✅ SSL/HTTPS otomatis  
✅ CDN global untuk loading cepat  

---

## 💡 Tips

1. **Ganti JWT_SECRET**: Gunakan random string yang kuat untuk production
2. **Setup Email**: Daftar di [Resend](https://resend.com) untuk fitur email booking
3. **Monitor**: Cek Vercel Analytics untuk melihat traffic website Anda
4. **Seed Database**: Jika database kosong, jalankan seed dari local:
   ```bash
   npm run seed
   ```

---

## 📞 Butuh Bantuan?

Jika ada masalah saat deployment, cek:
- Vercel deployment logs
- Browser console (F12)
- Neon.tech database status

Semoga sukses! 🚀
