# Shrivel - URL Shortener

Shrivel is a modern URL shortener application built with Next.js 15, leveraging the power of server and client components, dynamic routing, and API creation.

![shrivel-thumbnail](https://github.com/user-attachments/assets/be8dcac1-e8a4-429b-928f-b385fc418332)


## Watch Full Tutorial Here
👉 https://www.youtube.com/@elitebytecode

## Features

- Shorten long URLs into compact, easy-to-share links
- Custom short URL creation (if available)
- Click tracking and basic analytics
- User authentication and link management

## Tech Stack

- Next.js 15
- MongoDB for data storage
- nanoid for generating unique short codes

## What You'll Learn

By exploring and contributing to this project, you'll gain hands-on experience with:

- Next.js 15 app router and file-based routing system
- Server and Client Components in Next.js
- Creating and using API routes
- Working with MongoDB in a Next.js environment
- Implementing dynamic routes and groups
- State management in a Next.js application

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up your MongoDB connection string in `.env.local`
4. Run the development server with `npm run dev`

## Project Structure

```
app
├── (root)
│   ├── about
│   │   └── page.jsx
│   └── page.jsx
├── components
│   ├── AllUrls
│   │   └── page.jsx
│   ├── CopyBtn
│   │   └── page.jsx
│   ├── Footer
│   │   └── page.jsx
│   ├── Hero
│   │   └── page.jsx
│   ├── Menu
│   │   └── page.jsx
│   └── RedirectForm
│       └── page.jsx
├── favicon.ico
├── globals.css
└── layout.js
pages
├── [...captureURLData].js
└── api
|   └── shorten
|       ├── [id].js
|        └── index.js
lib
└── mongodb.js
```

## Feedback

If you find this project helpful, please consider giving it a star on GitHub. Your support is greatly appreciated and helps others discover this educational resource.

## License

This project is open source and available under the MIT License.
