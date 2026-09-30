@echo off
chcp 65001 >nul 2>&1
title ☕ Coffee Roasting System - Server
color 0E

echo.
echo  ╔══════════════════════════════════════════════════╗
echo  ║                                                  ║
echo  ║       ☕  COFFEE ROASTING SYSTEM  ☕              ║
echo  ║              GALUPAN SYSTEM                      ║
echo  ║                                                  ║
echo  ╚══════════════════════════════════════════════════╝
echo.
echo  [*] Memulai server...
echo.

:: Cek apakah Node.js terinstall
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo  [!] ERROR: Node.js belum terinstall!
    echo  [!] Silakan download dan install dari: https://nodejs.org
    echo.
    echo  [*] Mencoba membuka langsung di browser...
    echo.
    start "" "%~dp0index.html"
    echo  [OK] File index.html dibuka di browser.
    echo.
    pause
    exit /b
)

echo  [OK] Node.js ditemukan.
echo  [*] Menyiapkan server di port 3000...
echo.

:: Cek apakah port 3000 sudah digunakan, jika ya gunakan port 3001
set PORT=3000
netstat -an | findstr ":3000.*LISTENING" >nul 2>&1
if %errorlevel% equ 0 (
    echo  [!] Port 3000 sudah digunakan, mencoba port 3001...
    set PORT=3001
)

echo  ══════════════════════════════════════════════════
echo.
echo   🌐 Buka browser dan akses:
echo.
echo      http://localhost:%PORT%
echo.
echo   Tekan CTRL+C untuk menghentikan server.
echo.
echo  ══════════════════════════════════════════════════
echo.

:: Buka browser otomatis setelah 2 detik
start "" /min cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:%PORT%"

:: Jalankan server
cd /d "%~dp0"
npx -y serve -l %PORT% -s .
