import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import ProtectedPage from "./pages/protected";
import NotFound from "./pages/notFound";

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/login" exact element={<LoginPage />} />
      <Route path="/home" exact element={<HomePage />} />
      <Route path="/protected" element={<ProtectedPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
