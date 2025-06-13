# ✨ Events App Backend

Sistem backend untuk aplikasi manajemen event, menyediakan API untuk pencarian event, detail event, dan transaksi tiket. Dibangun dengan Node.js, Express, dan Prisma ORM.

---

## 🚀 Fitur Utama

- **Cari Event** berdasarkan judul, kategori, lokasi, dan filter lainnya
- **Detail Event** lengkap beserta tipe tiket
- **Transaksi Tiket** dengan dukungan promo & referral
- **Manajemen kursi & diskon otomatis**
- **Keamanan** dengan Helmet, CORS, dan logging

---

## 🛠️ Teknologi

- **Node.js** + **Express**
- **Prisma ORM** (PostgreSQL)
- **TypeScript**
- **Vercel** (deployment ready)
- **Helmet, Morgan, CORS**

---

## 📦 Instalasi

```bash
git clone https://github.com/username/events-app-backend.git
cd events-app-backend
npm install
cp .env.example .env # lalu isi variabel environment
npx prisma generate
npm run dev
```

---

## 🌐 API Endpoints

### 1. **GET /api/v1/events**

List event dengan filter & pagination.

**Query Params:**
- `q` (string, opsional): Pencarian judul/deskripsi
- `category` (string, opsional): Filter kategori
- `location` (string, opsional): Filter lokasi
- `page` (number, default: 1)
- `limit` (number, default: 10)

**Response:**
```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "date": "ISODate",
      "time": "string",
      "location": "string",
      "category": "string",
      "imageUrl": "string",
      "price": 0,
      "isFree": false,
      "availableSeats": 100,
      "ticketTypes": [
        {
          "id": "string",
          "name": "string",
          "price": 0
        }
      ]
    }
  ],
  "page": 1,
  "total": 20,
  "totalPages": 2,
  "hasMore": true
}
```

---

### 2. **GET /api/v1/events/:id**

Detail event beserta tipe tiket.

**Response:**
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "date": "ISODate",
  "time": "string",
  "location": "string",
  "category": "string",
  "imageUrl": "string",
  "price": 0,
  "isFree": false,
  "availableSeats": 100,
  "ticketTypes": [
    {
      "id": "string",
      "name": "string",
      "price": 0
    }
  ]
}
```

---

### 3. **POST /api/v1/transactions**

Buat transaksi pembelian tiket.

**Request Body:**
```json
{
  "eventId": "string",
  "ticketTypeId": "string (opsional)",
  "userEmail": "string",
  "quantity": 2,
  "promoCode": "string (opsional)",
  "referralCode": "string (opsional)"
}
```

**Response Sukses:**
```json
{
  "message": "Transaction success",
  "transactionId": "string",
  "totalPaid": 180000
}
```

**Response Error:**  
- 400: Not enough seats, promo/referral invalid, dsb.

---

## 🗄️ Struktur Database (Prisma)

- **Event**: id, title, description, date, time, location, category, price, isFree, availableSeats, ticketTypes[]
- **TicketType**: id, name, price, eventId
- **Transaction**: id, eventId, ticketTypeId, userEmail, quantity, totalPaid, promoCode, referralCode
- **Promotion**: id, eventId, code, discountIDR, discountPct, maxUsage, expiresAt
- **User**: id, email, name, referralCode, etc.

---

## 🔒 Keamanan

- Semua endpoint sudah CORS enabled
- Helmet untuk proteksi header
- Logging request dengan Morgan

---

## 🛠️ Deployment

- Siap deploy di Vercel (lihat `vercel.json`)
- Pastikan variabel environment sudah di-setup

---

## 📬 Kontribusi

Pull request & issue sangat terbuka!  
Pastikan code sudah terlinting & tested.

---

## 📄 Lisensi

MIT

---

**Tips Styling:**  
- Gunakan badge (misal: build, license, deploy) di bagian atas
- Gunakan emoji untuk section
- Gunakan code block untuk contoh request/response
- Tabel jika ada banyak field
- Link ke dokumentasi Prisma jika ingin detail skema 