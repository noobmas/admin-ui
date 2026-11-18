import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import './App.css'
import PageRegister from "./latihan/pages/PageRegister.jsx";
import PageLogin from "./latihan/pages/PageLogin.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("register");

  return currentPage === "register" ? (
    <PageRegister onCancel={() => setCurrentPage("login")} />
  ) : (
    <PageLogin onRegister={() => setCurrentPage("register")} />
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
