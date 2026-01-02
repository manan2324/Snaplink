# SnapLink - URL Shortener

A modern, fast URL shortening service built with Next.js. Create short, memorable links in seconds without registration.

## ✨ Features

- 🚀 **Lightning Fast** - Generate shortened URLs instantly
- 🔒 **No Registration** - Start shortening URLs immediately
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- ♾️ **Unlimited URLs** - No restrictions on shortened URLs
- 🎨 **Modern UI** - Clean interface with smooth animations
- 🔄 **Custom Short URLs** - Choose your own short URL text

## 🛠️ Tech Stack

- Next.js 15 (App Router)
- Tailwind CSS
- MongoDB
- JavaScript (React)

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create `.env.local`:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000
```

### 3. Setup MongoDB

Create a database named `snaplink` with a collection `url`:

```json
{
  "url": "https://example.com/very-long-url",
  "shortUrl": "abc123"
}
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app/
├── [url]/           # URL redirection
├── about/           # About page
├── api/generate/    # API endpoint
├── contact/         # Contact page
├── shorten/         # URL shortening page
└── page.js          # Home page
components/
└── Navbar.js        # Navigation
lib/
└── mongodb.js       # Database connection
```

## 🎯 Usage

1. Go to the "Shorten" page
2. Enter your long URL
3. Enter your preferred short code
4. Click "Generate"
5. Share your shortened URL!

## 🔧 API

### POST `/api/generate`

```json
{
  "url": "https://example.com/long-url",
  "shortUrl": "custom-code"
}
```

## 🚀 Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

## 📄 License

MIT License

---

Built with ❤️ using Next.js
