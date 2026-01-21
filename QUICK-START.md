# 🚀 Quick Start - Get Your App Running NOW!

## Current Status
✅ Next.js app is running  
✅ All code is working correctly  
❌ **Database is not connected** ← This is the ONLY issue!

## The Problem
Your app is trying to connect to PostgreSQL at `localhost:5432`, but no database server is running there.

---

## 🎯 FASTEST Solution (Choose ONE)

### Option 1: Cloud Database (⭐ RECOMMENDED - 3 minutes)

**No installation needed! This is the fastest way.**

#### Steps:

1. **Go to Neon.tech:**
   - Visit: https://neon.tech
   - Click "Sign up" (use GitHub/Google)

2. **Create a project:**
   - Click "Create Project"
   - Name: `cita-nusa-resto`
   - Region: Choose closest to you
   - Click "Create Project"

3. **Copy the connection string:**
   - You'll see a connection string like:
   ```
   postgresql://username:password@ep-xxx.neon.tech/neondb?sslmode=require
   ```
   - Click the "Copy" button

4. **Update your `.env` file:**
   - Open `.env` in your project
   - Replace the `DATABASE_URL` line with your Neon connection string:
   ```env
   DATABASE_URL="postgresql://your-neon-connection-string-here"
   ```

5. **Run these commands:**
   ```powershell
   npx prisma migrate dev
   npm run seed
   ```

6. **Refresh your browser** at http://localhost:3000

✅ **DONE!** Your app will now work!

---

### Option 2: Docker (5 minutes if Docker is installed)

#### Prerequisites:
- Install Docker Desktop: https://www.docker.com/products/docker-desktop/

#### Steps:

1. **Start PostgreSQL:**
   ```powershell
   docker-compose up -d
   ```

2. **Wait 10 seconds** for PostgreSQL to start, then run:
   ```powershell
   npx prisma migrate dev
   npm run seed
   ```

3. **Refresh your browser** at http://localhost:3000

✅ **DONE!**

---

### Option 3: Local PostgreSQL (15 minutes)

1. **Download PostgreSQL:**
   - Visit: https://www.postgresql.org/download/windows/
   - Download the installer

2. **Install with these settings:**
   - Port: `5432`
   - Username: `postgres`
   - Password: `password` (to match your .env)
   - Remember these!

3. **After installation, run:**
   ```powershell
   npx prisma migrate dev
   npm run seed
   ```

4. **Refresh your browser** at http://localhost:3000

✅ **DONE!**

---

## After Database is Connected

### Test the connection:
```powershell
npx prisma studio
```
This opens a GUI at http://localhost:5555 to view your data.

### Login credentials (after seeding):
Check `prisma/seed.ts` for admin/customer login details.

### Your app features will work:
- ✅ View menus
- ✅ Make bookings
- ✅ Admin dashboard
- ✅ Orders management
- ✅ User management

---

## Need Help?

If you get stuck:
1. Check `DATABASE-SETUP.md` for detailed troubleshooting
2. Make sure your database URL in `.env` is correct
3. Verify PostgreSQL/Docker is running

---

## 💡 My Recommendation

Use **Option 1 (Neon.tech)** because:
- ✅ No software to install
- ✅ Free forever (512 MB)
- ✅ Works in 3 minutes
- ✅ Can deploy to production easily later
- ✅ Automatic backups

**Ready to start?** Go to https://neon.tech now! 🚀
