# 🌐 MetaFetch

A fullstack web app that extracts and displays metadata (title, description, image) from a list of URLs.

>  This project was created as part of a junior developer home assignment, showcasing backend and frontend skills, modular architecture, and secure design.


---

##  Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation & Running Locally](#installation--running-locally)
- [Testing](#testing)
- [Design Decisions & Trade-offs](#design-decisions--trade-offs)
- [Security Considerations](#security-considerations)
- [Deployment](#deployment)
- [Screenshots](#screenshots)

---

##  Features

###  Frontend (React + Material UI)
- Input form for up to 4 URLs
- Displays fetched metadata in dynamic cards (title, description, image)
- Reset button to clear form and results
- Handles Enter key submission
- Clear error messages for invalid input or failed fetch
- Custom theme aligned with the MetaFetch branding (logo colors, typography, buttons)
- Responsive and modern UI using MUI components

###  Backend (Node.js + Express)
- Clean modular architecture: `Controller → Service → Fetcher`
- Metadata extraction using HTML parsing (RegEx)
- Uses Axios to fetch page content
- Validates input on server side
- Returns metadata or error per URL
- **Rate limiting** (5 requests/sec)
- **Security** hardening with Helmet & CORS

---

##  Technologies Used

- **Frontend:** React • Material UI • Axios
- **Backend:** Node.js • Express • Axios
- **Testing:** Supertest • React Testing Library • Jest
- **Security:** Helmet • CORS • express-rate-limit

---

##  Installation & Running Locally

### 1. Clone the repository
```bash
git clone https://github.com/CohenNaama/MetaFetch.git
cd MetaFetch
```

### 2. Install dependencies

###  Backend:
```bash
cd server
npm install
```
### Frontend:
```bash
cd client
npm install
```
### 3. Run the project
### Start backend:
```bash

cd server
npm start
```
### Start frontend:
```bash
cd client
npm start
```
###  App should be running at:

http://localhost:3000

---
##  Testing

### Backend (Supertest)

✅ Valid URL returns title

✅ Invalid URL returns error

✅ Empty URL list returns 400

✅ Rate limit test (429 on 6th request)

✅ Helmet security headers confirmed

### Frontend (React Testing Library + Jest)

✅ Form renders with input and buttons

✅ Shows error message on invalid URL

✅ Displays metadata card on valid URL

✅ Resets form correctly

---

##  Design Decisions & Trade-offs

- Used a clean modular backend architecture (Controller → Service → Fetcher)

- Avoided heavy scraping libs — used lightweight RegEx for simplicity

- Used Material UI with a custom theme for consistent design

- No global state manager – state managed locally for clarity
  
- Limited to 4 URLs for better UI and rate control

---

##  Security Considerations

- Rate limiting to prevent abuse

- Helmet for setting secure HTTP headers

- CORS enabled for client-server communication

- Input validation in both client and server

---

##  Deployment 

> 🚧 *This feature is planned but not yet deployed.*

MetaFetch is currently running locally but is designed for easy deployment on platforms such as Heroku or Render.

- Backend and frontend are fully separated
- Environment-ready structure with clear start scripts
- Easily adaptable for cloud hosting with minor config adjustments
  
---
  
##  Screenshots

Here is a preview of the MetaFetch app in action:

![MetaFetch Screenshot](https://github.com/user-attachments/assets/4c7d3d54-59e9-4b6a-8072-02cddad9e300)

---
