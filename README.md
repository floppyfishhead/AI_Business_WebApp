<div align="center">

# 🚀 Fingo AI Agent Studio

## Intelligent AI Solutions for Modern Businesses

#### <-- Project is built as a React single-page marketing site with an Express API and MySQL lead capture. -->

_Design • Develop • Deploy • Scale_

---

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2025-F7DF1E?style=for-the-badge&logo=javascript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap)
![GitHub](https://img.shields.io/badge/GitHub-Version_Control-181717?style=for-the-badge&logo=github)

### Building AI-powered software that automates engineering, manufacturing, and business operations.

</div>

---

# Overview

AI Agent Studio is a modern web application that serves as the online presence and demonstration platform for a company specializing in custom Artificial Intelligence solutions.

Our mission is to help organizations transform manual workflows into intelligent, autonomous systems powered by AI Agents.

The platform showcases AI capabilities, customer solutions, technical expertise, and future products while providing a professional interface for prospective clients.

---

# Vision

We believe every business should have access to intelligent automation.

Rather than replacing employees, AI Agents augment engineering, operations, manufacturing, customer support, and decision-making by automating repetitive tasks and providing actionable insights.

---

# Core Services

- 🤖 Custom AI Agent Development
- 📊 Data Analytics & Predictive Modeling
- ⚙️ Engineering Process Automation
- 🏭 Manufacturing Optimization
- 📈 Business Intelligence Dashboards
- 💬 AI Chatbots & Virtual Assistants
- ☁️ Cloud AI Deployments
- 🔗 API Integrations
- 🧠 Machine Learning Solutions
- 📚 Knowledge Base & RAG Systems

---

# Technology Stack

## Frontend

- React
- JavaScript
- Bootstrap
- HTML5
- CSS3

## Development

- Visual Studio Code
- Git
- GitHub
- npm

## AI Technologies

- Large Language Models (LLMs)
- AI Agents - Supervisor and Single-Purpose
- Retrieval-Augmented Generation (RAG)
- Python
- REST APIs

---

# Planned Features

- Modern responsive landing page
- AI service portfolio
- Interactive AI demonstrations
- Customer contact portal
- Project showcase
- Blog & technical articles
- AI chatbot assistant
- Customer dashboard
- Secure authentication
- Analytics dashboard

---

# Project Structure

```
AI_Business_WebApp/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── App.jsx
│
├── package.json
├── README.md
└── .gitignore
```

---

# Development Roadmap

### Phase 1

- Company website
- Responsive design
- Service pages

### Phase 2

- AI chatbot
- Contact system
- Portfolio

### Phase 3

- Customer portal
- Authentication
- AI demonstrations

### Phase 4

- Multi-agent architecture
- Customer workspaces
- AI workflow automation

---

# Installation

Clone the repository

```bash
git clone https://github.com/floppyfishhead/AI_Business_WebApp.git
```

Navigate into the project

```bash
cd AI_Business_WebApp
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

# Future AI Architecture

```
                Customer
                    │
                    ▼
          React Frontend
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
 AI Customer Agent      Authentication
        │
        ▼
  AI Orchestrator
        │
 ┌──────┼─────────┬──────────┐
 ▼      ▼         ▼          ▼
Sales  Engineering  Analytics  Support
Agent     Agent       Agent      Agent
        │
        ▼
   Company Knowledge Base
```

---

# Current Status

🚧 Active Development

This project is currently under active development as the foundation for a professional AI solutions company.

Features, architecture, and integrations will continue to expand throughout development.

---

# Contributing

Contributions, suggestions, and feedback are always welcome.

If you discover an issue or have an idea for improvement, feel free to open an issue or submit a pull request.

---

# License

This project is licensed under the MIT License.

---

<div align="center">

## AI Agent Studio

**Engineering Intelligence Through Artificial Intelligence**

## Local setup for MySQL Database

1. Create the database and table using `database/schema.sql`.
2. Copy `.env.example` to `.env`, then add your MySQL credentials. Never commit `.env`.
3. Install packages with `npm install`.
4. Start the web app and API together with `npm run dev`.

The web app runs at the Vite URL shown in the terminal (normally `http://localhost:5173`), and the API runs on `http://localhost:3001`.

## API

- `GET /api/health` checks API and database connectivity.
- `POST /api/leads` saves a contact-form submission. It accepts `name`, `email`, `company` (optional), and `message`.

The Vite development server proxies `/api` requests to port 3001. In production, serve the frontend and Express API behind the same origin or point the frontend's API requests at your deployed API URL.

Built with ❤️ using React, JavaScript, Bootstrap, and AI.

</div>
