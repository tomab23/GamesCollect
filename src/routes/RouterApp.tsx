import LayoutWithNavbar from "@/components/layout/LayoutWithNavbar";
import AuthPage from "@/pages/AuthPage";
import GamesPage from "@/pages/GamesPage";
import HomePage from "@/pages/HomePage";
import ProfilePage from "@/pages/ProfilePage";
import SearchPage from "@/pages/SearchPage";
import { Route, Routes, useLocation } from "react-router-dom";

const RouterApp = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      {/* PUBLIC */}
      <Route path="/" element={<AuthPage />} />
      {/* <Route path="/forgotPassword" element={<ForgotPassword />} /> */}
      <Route path="/*" element={<p>404</p>} />

      {/* ROUTES WITH NAVBAR */}
      {/* PRIVATE */}
      <Route element={<LayoutWithNavbar />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/search" element={<SearchPage />} />
        {/* <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} /> */}
      </Route>
      {/* TEST */}
    </Routes>
  );
};

export default RouterApp;
