import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import AuthLayout from "../layout/AuthLayout";
import SignUp from "../pages/SignUp";
import useAuthStore from "../store/useAuthStore";
import ProtectedRoute from "../component/ProtectedRoute";

const AppRoutes = () => {
  const { token } = useAuthStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={token ? <Home /> : <SignIn />} />
          <Route
            path="/sign-in"
            element={
              <ProtectedRoute>
                <SignIn />
              </ProtectedRoute>
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
