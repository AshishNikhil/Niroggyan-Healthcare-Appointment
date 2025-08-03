
# Niroggyan Healthcare Appointment System

**Live Demo:** [https://healthcare-appointment-niro.netlify.app/](https://healthcare-appointment-niro.netlify.app/)  
**GitHub Repository (Frontend Only):** [Niroggyan-Healthcare-Appointment](https://github.com/AshishNikhil/Niroggyan-Healthcare-Appointment)  
**Full Stack Repository:** [Doctor-appointment-frontend-backend](https://github.com/AshishNikhil/Doctor-appointment-frontend-backend)

## Overview

**Niroggyan** is a responsive doctor appointment booking system built with **React**. Users can browse available doctors, select appointment dates using a calendar, and simulate booking—all from a user-friendly interface.

This project began as a frontend-only demo and has been expanded into a full-stack implementation with both client and server functionality.

---

## Tech Stack

- React
- React Router DOM
- React Calendar
- Tailwind CSS
- React Loader Spinner
- Custom `useDoctors` Hook

---

## How to Run Locally
I have done Full Stack and it can be run locally
### Frontend

```bash
git clone https://github.com/AshishNikhil/Doctor-appointment-frontend-backend
cd Doctor-appointment-frontend-backend/frontend
npm install
npm run dev
```

### Backend

```bash
cd ../backend
npm install
node server.js
```

---

## Challenges Faced & Solutions

1. **Managing doctor data without a backend**  
   Used a custom `useDoctors` hook to simulate data fetching.

2. **Avoiding prop drilling across components**  
   Utilized `useParams` and route-based dynamic rendering.

3. **Responsive UI across devices**  
   Tailwind CSS responsive utilities (`sm:`, `md:`, etc.) ensured adaptability.

4. **Lack of persistent appointment data**  
   Temporarily stored appointments in local state with future plans for localStorage or database.

5. **User-friendly date selection and validation**  
   Implemented `react-calendar` with `minDate` to block past dates.

6. **Modal behavior and UX consistency**  
   Created a full-screen accessible modal with smooth transitions.

---

##  Future Improvements

- Learn and integrate **TypeScript** for better structure and type safety.
- Deploy the complete **full-stack** version with backend support.
- Implement **real-time doctor availability** with time-slot booking.
- Enhance **UI/UX** with better visuals and transitions.
- Add persistent storage using **localStorage or database**.

---

## Acknowledgements

Thank you for the opportunity to build and showcase this healthcare appointment system. Feedback and contributions are welcome!
