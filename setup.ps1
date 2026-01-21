# Script Setup Otomatis untuk Cita Nusa Resto
Write-Host "🚀 Memulai setup Cita Nusa Resto..." -ForegroundColor Green
Write-Host ""

# Step 1: Install Dependencies
Write-Host "📦 Step 1: Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error saat install dependencies!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dependencies berhasil diinstall!" -ForegroundColor Green
Write-Host ""

# Step 2: Generate Prisma Client
Write-Host "🔧 Step 2: Generating Prisma Client..." -ForegroundColor Yellow
npx prisma generate
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error saat generate Prisma Client!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Prisma Client berhasil digenerate!" -ForegroundColor Green
Write-Host ""

# Step 3: Database Migration
Write-Host "🗄️  Step 3: Running database migration..." -ForegroundColor Yellow
Write-Host "⚠️  Pastikan PostgreSQL sudah running dan DATABASE_URL di .env sudah benar!" -ForegroundColor Cyan
Write-Host ""
$confirm = Read-Host "Lanjutkan dengan migrasi database? (y/n)"
if ($confirm -eq 'y' -or $confirm -eq 'Y') {
    npx prisma migrate dev
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Error saat migrasi database!" -ForegroundColor Red
        Write-Host "💡 Tips: Pastikan PostgreSQL running dan credentials di .env benar" -ForegroundColor Cyan
        exit 1
    }
    Write-Host "✅ Database migration berhasil!" -ForegroundColor Green
    Write-Host ""
    
    # Step 4: Seed Database
    Write-Host "🌱 Step 4: Seeding database with initial data..." -ForegroundColor Yellow
    npm run seed
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Error saat seed database!" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Database berhasil di-seed dengan data awal!" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "⏭️  Skipping database migration dan seeding..." -ForegroundColor Yellow
    Write-Host ""
}

# Selesai
Write-Host "🎉 Setup selesai!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Langkah selanjutnya:" -ForegroundColor Cyan
Write-Host "1. Pastikan file .env sudah dikonfigurasi dengan benar"
Write-Host "2. Jalankan: npm run dev"
Write-Host "3. Buka browser: http://localhost:3000"
Write-Host ""
Write-Host "📚 Baca SETUP.md untuk informasi lebih detail"
Write-Host ""
