/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../pages/Login";
import RegisterForm from "../pages/Register";
import Layout from "./Layout";
import Home from "../pages/Home";
import MyPosts from "../pages/MyPosts";
import Profile from "../pages/Profile";

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  if (isLoggedIn) {
    return element;
  }

  return <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Layout />} />}>
          <Route index element={<Home />} />
          <Route path="my-posts" element={<MyPosts />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
