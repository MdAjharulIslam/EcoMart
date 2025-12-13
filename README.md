🛒 EcoMart - Full-Stack Grocery E-Commerce App
A complete grocery shopping platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Features secure authentication, advanced product management, shopping cart functionality, order processing, and a powerful admin dashboard.

🚀 Live Demo
[![Live Demo] : https://grocery-app-self.vercel.app
[![Live Demo Admin] :https://grocery-app-self.vercel.app/seller

👤 User Login
text
URL: https://grocery-app-self.vercel.app
Demo Email: user@example.com
Demo Password: 123456
👨‍💻 Admin Dashboard
text
URL: https://grocery-app-self.vercel.app/seller
Admin Email: admin@example.com
Admin Password: 123456789
✨ Complete Feature Set
🛍️ User Features
🔐 Secure Authentication: JWT-based login/register with protected routes

📱 Responsive Design: Mobile-first UI optimized for all devices

🔍 Smart Search: Real-time product search with instant results

🏷️ Category Browsing: Organized product categories with intuitive navigation

🎛️ Advanced Filters: Price range, category, and availability filters

🛒 Shopping Cart:

Add/remove products

Quantity adjustment

Persistent cart state

Cart summary with totals

💳 Checkout Process:

Order summary review

Delivery address management

Secure order confirmation

📋 Order History: Track past orders and delivery status

👨‍💻 Admin Features
📊 Analytics Dashboard: Real-time sales metrics and insights

📦 Product Management:

Add new products with images

Edit product details

Delete products

Bulk operations

🏷️ Category Management: Create, edit, and organize product categories

📑 Order Management:

View all customer orders

Update order status (Pending/Shipped/Delivered)

Generate order reports

👥 User Management: View registered users and their activity

🛠️ Tech Stack
Frontend
text
React.js (18+)
Tailwind CSS
React Router DOM
Context API (Global State)
Axios (API Client)
React Hook Form
React Icons
Vite (Build Tool)
Backend
text
Node.js (18+)
Express.js
MongoDB (Atlas Compatible)
Mongoose ODM
JWT Authentication
bcryptjs (Password Hashing)
Cloudinary (Image Upload)
multer (File Upload)
cors
dotenv
Development
text
Git & GitHub
Vercel (Deployment)
MongoDB Atlas
ESLint & Prettier
🚀 Getting Started
Prerequisites
Node.js v18+

npm v9+ or yarn

MongoDB Atlas account (free tier available)

Clone & Install
bash
# Clone the repository
git clone https://github.com/mdajharulislam/EcoMart.git
cd EcoMart

# Backend setup
cd backend
npm install
cp .env.example .env
# Add your MongoDB URI and JWT_SECRET to .env

# Frontend setup
cd ../frontend
npm install
npm run dev
Environment Variables
Backend (.env)

text
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Frontend (.env)

text
VITE_API_URL=http://localhost:5000/api
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
Run Locally
bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev

🙌 Acknowledgments
Tailwind CSS for beautiful styling

Cloudinary for image management

Vercel for seamless deployment

MongoDB Atlas for cloud database
