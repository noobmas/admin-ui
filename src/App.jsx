import "./App.css";
import { createBrowserRouter, Link, RouterProvider, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import PageDashboard from "./latihan/pages/PageDashboard.jsx";
import PageLogin from "./latihan/pages/PageLogin.jsx";
import PageRegister from "./latihan/pages/PageRegister.jsx";
import BalancePage from "./latihan/pages/balance.jsx";

function LoginRoute() {
  const navigate = useNavigate();

  return <PageLogin onRegister={() => navigate("/register")} />;
}

function RegisterRoute() {
  const navigate = useNavigate();

  return <PageRegister onCancel={() => navigate("/login")} />;
}

function ErrorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-special-mainBg p-6 text-center">
      <h1 className="text-2xl font-bold text-defaultBlack">
        Halaman tidak ditemukan
      </h1>
      <p className="text-gray-02">Rute yang kamu buka tidak tersedia.</p>
      <Link to="/" className="font-semibold text-primary hover:underline">
        Kembali ke Dashboard
      </Link>
    </main>
  );
}

function App() {
  const myRouter = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: <PageDashboard />,
          errorElement: <ErrorPage />,
        },
        { path: "/login", element: <LoginRoute /> },
        { path: "/register", element: <RegisterRoute /> },
        { path: "/balance", element: <BalancePage /> },
        { path: "*", element: <ErrorPage /> },
      ]),
    [],
  );

  return <RouterProvider router={myRouter} />;
}

export default App;
