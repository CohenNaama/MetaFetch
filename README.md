# 🌐 MetaFetch

A fullstack web app that extracts and displays metadata (title, description, image) from a list of URLs.

> 🧠 This project was created as part of a junior developer home assignment, showcasing backend and frontend skills, modular architecture, and secure design.

---

##  Features

###  Frontend (React + Material UI)
- Responsive form to input up to 4 URLs
- Submits URLs and displays metadata: title, description, image
- Styled using Material UI components
- Displays metadata in dynamic cards
- Includes Reset button to clear the form and results
- Handles Enter key for form submission
- Error messages displayed clearly on failure

###  Backend (Node.js + Express)
- Modular architecture: Controller, Service, Fetcher layers
- Metadata extraction using HTML parsing with Regular Expressions
- Uses Axios to fetch page content
- Validates input on the server
- Returns metadata for each URL or error message if failed
- **Rate Limiting:** 5 requests per second
- **Security:** with Helmet and CORS

---
##  Testing

### Backend (Supertest)

✅ Valid URL returns title

✅ Invalid URL returns error

✅ Empty URL list returns 400

✅ Rate limiting test returns 429 after 5 rapid requests

✅ Helmet headers present in response

### Frontend (React Testing Library + Chai)
✅ Renders form and submit button

✅ Shows error message on invalid URL

✅ Displays metadata card on valid URL

✅ Resets form correctly

---

##  Technologies Used

- **Frontend:** React • Material UI • Axios
- **Backend:** Node.js • Express • Axios
- **Testing:** Supertest • React Testing Library • Chai
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

## 🧠  Design Decisions & Trade-offs

- Used a clean modular backend architecture (Controller → Service → Fetcher)

- Used direct HTML parsing with RegEx instead of heavy scraping libs

- Material UI for fast, consistent UI design

- Clear separation of concerns in React components

- Prioritized user experience and error handling

## 🔒 Security Considerations

- Rate limiting to mitigate abuse

- Helmet for setting secure HTTP headers

- CORS enabled for client-server communication

- Input validation in both client and server

---

## 🖼️ Screenshots

Here is a preview of the MetaFetch app in action:

![MetaFetch Screenshot](https://github.com/user-attachments/assets/4c7d3d54-59e9-4b6a-8072-02cddad9e300)

---



