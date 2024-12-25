# 🛒 GroceryShare

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)
[![GitHub Stars](https://img.shields.io/github/stars/yourusername/GroceryShare.svg)](https://github.com/yourusername/GroceryShare/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/yourusername/GroceryShare.svg)](https://github.com/yourusername/GroceryShare/issues)

GroceryShare is an innovative React Native application designed to revolutionize how households manage their groceries and meal planning. Whether you're living with roommates, family, or managing a community, GroceryShare makes collaborative grocery management seamless and intelligent.

## 🌟 Key Features

### 🔐 Smart Authentication

- Secure login and signup system
- JWT-based session management
- Protected routes and data privacy

### 📋 List Management

- Create and manage multiple grocery lists
- Real-time collaborative editing
- Smart categorization of items
- Share lists with specific users or groups
- Track shopping history and frequently bought items

### 🤖 AI-Powered Recipe Generation

- Transform your grocery items into delicious recipes
- Custom recipe generation based on preferences
- Nutritional information and dietary recommendations
- Save and share favorite recipes

### 👥 Collaboration Features

- Real-time updates using Socket.io
- User groups and permissions management
- Activity history and change tracking
- In-app messaging for list discussions

## 🛠️ Technology Stack

### Mobile Application (React Native)

- **Framework**: React Native
- **State Management**: Redux Toolkit
- **UI Components**: React Native Paper
- **Navigation**: React Navigation
- **Real-time Updates**: Socket.io-client

### Backend Infrastructure

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT
- **WebSocket**: Socket.io

### External APIs

- **Recipe Generation**: Gemini API
- **Alternative**: Spoonacular API / OpenAI API

## 📦 Installation

1. **Clone the Repository**

```bash
git clone https://github.com/srujanGowda08/GroceryShare.git
cd GroceryShare
```

2. **Set Up Environment Variables**

Create `.env` files in both mobile and server directories:

```bash
# mobile/.env
API_URL=your_api_url
SOCKET_URL=your_socket_url

# server/.env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

3. **Install Dependencies**

```bash
# Mobile Application
cd mobile
npm install

# Backend Server
cd ../server
npm install
```

4. **Start Development Servers**

```bash
# Backend Server
cd server
npm run dev

# Mobile App
cd ../mobile
npm start
```

## 🤝 Contributing

We're excited to welcome contributors to GroceryShare! Here's how you can help:

### Getting Started

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- **Code Style**: Follow the ESLint configuration
- **Commit Messages**: Use conventional commits format
- **Documentation**: Update README and add inline comments
- **Testing**: Include tests for new features
- **Branch Naming**: Use prefixes like `feature/`, `bugfix/`, `docs/`

Check our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 🗺️ Project Roadmap

### Phase 1 (Current)

- ✅ Basic list management
- ✅ User authentication
- ✅ Recipe generation
- ✅ Real-time updates

### Phase 2 (Upcoming)

- 📱 Offline mode support
- 🔔 Push notifications
- 🎨 Customizable themes
- 🗣️ Voice command integration

### Phase 3 (Future)

- 📊 Advanced analytics dashboard
- 🔄 Automated shopping list generation
- 💰 Price comparison features
- 📅 Meal planning calendar

## 📁 Directory Structure

```
GroceryShare/
├── mobile/
│   ├── assets/
│   ├── components/
│   ├── screens/
│   ├── navigation/
│   ├── services/
│   ├── utils/
│   └── App.js
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── services/
│   └── server.js
└── docs/
```

## 🔧 Available Scripts

### Mobile Application

```bash
npm start        # Start the development server
npm test         # Run tests
npm run lint     # Run ESLint
npm run build    # Build for production
```

### Backend Server

```bash
npm start        # Start production server
npm run dev      # Start development server
npm test         # Run tests
npm run seed     # Seed database
```

## 🌟 Special Thanks

A huge thank you to all our contributors who have helped shape GroceryShare!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- **Website**: [TechnifyZ](https://technify-z.vercel.app/)
- **Email**: srujan0821@gmail.com
- **Linkedin**: [@TechnifyZ](https://www.linkedin.com/company/technifyz)
- **Discord**: [Join our community](https://discord.gg/GZ9nUZyx)

---

<p align="center">Made with ❤️ by the GroceryShare Team</p>
