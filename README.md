GitHub repo:- https://github.com/AshishNikhil/Niroggyan-Healthcare-Appointment
website:- https://healthcare-appointment-niro.netlify.app/
Tools/libraries used are React, React Router DOM, React Calendar, Tailwind CSS, React Loader Spinner, and a custom useDoctors hook.
Improvements With more time: enhance the UI, implement backend and deploy full stack, add time and calendar slots based on doctor availability.
Challenges Faced and Solutions:
  1.Managing doctor data without a backend:
    Solution: Used a custom useDoctors hook to simulate data fetching.
  
  2.Avoiding prop drilling across components:
    Solution: Used useParams and route-based dynamic rendering.
  
  3.Responsive UI across devices:
    Solution: Applied Tailwind CSS with responsive utilities (sm:, md:, etc.).
  
  4.Lack of persistent appointment data:
    Solution: Temporarily stored appointments in local state with plans for localStorage or backend integration.
  
  5.User-friendly date selection and validation:
    Solution: Used react-calendar and set minDate to block past dates.
  
  6.Modal behavior and UX consistency:
  Solution: Created a full-screen, accessible modal with clean transitions.

Future Goals:
  1.Learn and integrate TypeScript for better code structure and type safety.
  2.Deploy the full-stack application with both frontend and backend connected.
  3.Implement real-time doctor availability with calendar and time slot booking.

I have done Full Stack and it can be run locally
GitHub Repo:- https://github.com/AshishNikhil/Doctor-appointment-frontend-backend
to run frontend
cd frontend/
npm install
npm run dev

to run backend
cd backend/
npm install
node server.js

Thank you for the opportunity
