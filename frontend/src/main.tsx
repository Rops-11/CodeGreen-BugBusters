import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import SignUp from "./pages/SignUpPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";

import AdminLandingPage from "./pages/AdminHomePage.tsx";
import EncodePage from "./pages/EncodePage.tsx";
import ViolatorList from "./pages/ViolatorList.tsx";
import DriversList from "./pages/DriverList.tsx";
import Policies from "./pages/Policies.tsx";
import Contacts from "./pages/Contacts.tsx";

import RegisterDriver from "./pages/RegisterDriver.tsx";
import AddDriver from "./pages/AddDriver.tsx";
import AddViolation from "./pages/AddViolation.tsx";

import Forgot from "./pages/Forgot.tsx";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminLandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/driverslist" element={<DriversList />} />
        <Route path="/encode" element={<EncodePage />} />
        <Route path="/register-driver" element={<RegisterDriver />} />
        <Route path="/add-driver" element={<AddDriver />} />
        <Route path="/add-violation" element={<AddViolation />} />
        <Route path="/violatorslist" element={<ViolatorList />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Main />
    </StrictMode>
  );
}
