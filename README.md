# User Dashboard

A **responsive dashboard application** built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, featuring:

- User list page with search and pagination  
- User details page  
- Responsive design for mobile and desktop  
- Smooth animations with Framer Motion  
- Server-side data fetching with Axios  

Data is fetched from the **JSONPlaceholder API**.

---

## Demo

**Live Demo:** [Add your deployed Vercel link here]

---

## Features

- **User List Page**
  - Displays users in a card grid
  - Search users by **name** or **email**
  - Pagination to limit users per page
  - Animated hover effects on cards  

- **User Details Page**
  - Click a user card to view detailed information
  - Includes email, phone, company, and address
  - Smooth entrance animation  

- **Responsive Design**
  - Works seamlessly on mobile, tablet, and desktop  

- **Animations**
  - Hover and entrance animations using **Framer Motion**  

---

## Tech Stack

- **Next.js 15.5.2** (App Router)  
- **TypeScript**  
- **Tailwind CSS**  
- **Framer Motion**  
- **Axios** for API calls  
- **JSONPlaceholder** as the API  

---



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
