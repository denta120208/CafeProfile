# 🗄️ Database Setup Guide

## Option 1: Docker Setup (Recommended) ⭐

### Prerequisites
- Install Docker Desktop: https://www.docker.com/products/docker-desktop/

### Steps:

1. **Start PostgreSQL with Docker:**
   ```powershell
   docker-compose up -d
   ```
   This will download and start PostgreSQL in the background.

2. **Verify PostgreSQL is running:**
   ```powershell
   docker ps
   ```
   You should see `cita-nusa-postgres` container running.

3. **Run database migrations:**
   ```powershell
   npx prisma migrate dev
   ```

4. **Seed the database:**
   ```powershell
   npm run seed
   ```

5. **Restart your Next.js dev server** (if it's running):
   - Press `Ctrl+C` in the terminal running `npm run dev`
   - Start it again: `npm run dev`

### Docker Commands:

```powershell
# Start database
docker-compose up -d

# Stop database
docker-compose down

# Stop and remove all data
docker-compose down -v

# View logs
docker-compose logs -f postgres

# Access PostgreSQL shell
docker exec -it cita-nusa-postgres psql -U postgres -d cita_nusa_resto
```

---

## Option 2: Cloud Database (No Installation)

### Neon.tech (Free Tier - Recommended)

1. **Sign up:** https://neon.tech
2. **Create a new project** named "cita-nusa-resto"
3. **Copy the connection string** (looks like: `postgresql://user:pass@xxx.neon.tech/main?sslmode=require`)
4. **Update your `.env` file:**
   ```env
   DATABASE_URL="your-neon-connection-string-here"
   ```
5. **Run migrations:**
   ```powershell
   npx prisma migrate dev
   npm run seed
   ```

### Supabase (Alternative)

1. **Sign up:** https://supabase.com
2. **Create a new project**
3. Go to **Settings > Database**
4. Copy the **Connection string** (Transaction mode)
5. Update `.env` and run migrations

---

## Option 3: Local PostgreSQL Installation

1. **Download PostgreSQL:** https://www.postgresql.org/download/windows/
2. **Install** with these settings:
   - Port: 5432
   - Username: postgres
   - Password: password (or your choice)
3. **Create database:**
   ```sql
   CREATE DATABASE cita_nusa_resto;
   ```
4. **Update `.env`** if you used a different password:
   ```env
   DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/cita_nusa_resto?schema=public"
   ```
5. **Run migrations:**
   ```powershell
   npx prisma migrate dev
   npm run seed
   ```

---

## Troubleshooting

### "Can't reach database server"
- **Docker:** Make sure Docker Desktop is running and container is up
- **Local:** Check if PostgreSQL service is running
- **Cloud:** Verify your connection string is correct

### Check if PostgreSQL is accessible:
```powershell
# Test connection (Docker or local)
Test-NetConnection -ComputerName localhost -Port 5432
```

### View Prisma Studio (Database GUI):
```powershell
npx prisma studio
# Opens at http://localhost:5555
```

---

## Next Steps After Database is Running

1. ✅ Database is running
2. ✅ Run `npx prisma migrate dev`
3. ✅ Run `npm run seed`
4. ✅ Refresh your browser at http://localhost:3000
5. 🎉 Your app should now work!

### Default Login Credentials (After Seeding)

Check `prisma/seed.ts` for the admin and customer credentials.
