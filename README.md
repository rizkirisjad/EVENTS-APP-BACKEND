# ✨ Events App Backend

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

</div>

## 📝 Description

Backend system for an event management application that provides APIs for event search, event details, and ticket transactions. Built with modern technologies for optimal performance and scalability.

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 🔍 Event Search

- Search by title, category, location
- Flexible filtering and sorting
- Pagination for optimal performance

### 🎫 Ticket Management

- Multi-type ticket system
- Automatic seat management
- Promo & referral support

</td>
<td width="50%">

### 🔒 Security

- Helmet protection
- CORS enabled
- Request logging with Morgan
- Rate limiting

### 📊 Monitoring

- Error tracking
- Performance monitoring
- Request logging

</td>
</tr>
</table>

## 🛠️ Tech Stack

- **Backend Framework:** Node.js + Express
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Language:** TypeScript
- **Deployment:** Vercel
- **Security:** Helmet, CORS, Morgan

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- PostgreSQL
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/username/events-app-backend.git

# Navigate to directory
cd events-app-backend

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env as needed

# Generate Prisma client
npx prisma generate

# Run development server
npm run dev
```

## 📚 API Documentation

### Events

#### GET /api/v1/events

List events with filtering & pagination.

**Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| q | string | No | Search by title/description |
| category | string | No | Filter by category |
| location | string | No | Filter by location |
| page | number | No | Page number (default: 1) |
| limit | number | No | Items per page (default: 10) |

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

### Transactions

#### POST /api/v1/transactions

Create a ticket purchase transaction.

**Request Body:**

```json
{
  "eventId": "string",
  "ticketTypeId": "string",
  "userEmail": "string",
  "quantity": 2,
  "promoCode": "string",
  "referralCode": "string"
}
```

## 📦 Database Schema

```prisma
model Event {
  id            String   @id @default(uuid())
  title         String
  description   String
  date          DateTime
  time          String
  location      String
  category      String
  price         Float
  isFree        Boolean
  availableSeats Int
  ticketTypes   TicketType[]
  transactions  Transaction[]
}

model TicketType {
  id          String   @id @default(uuid())
  name        String
  price       Float
  eventId     String
  event       Event    @relation(fields: [eventId], references: [id])
}

model Transaction {
  id            String   @id @default(uuid())
  eventId       String
  ticketTypeId  String
  userEmail     String
  quantity      Int
  totalPaid     Float
  promoCode     String?
  referralCode  String?
  event         Event    @relation(fields: [eventId], references: [id])
}
```

## 🤝 Contributing

Contributions are always welcome! Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Rizki C - [@twitter_handle](https://twitter.com/twitter_handle)

Project Link: [https://github.com/rizkirisjad/EVENTS-APP-BACKEND](https://github.com/rizkirisjad/EVENTS-APP-BACKEND)

---

<div align="center">
Made with ❤️ by Rizki C
</div>
