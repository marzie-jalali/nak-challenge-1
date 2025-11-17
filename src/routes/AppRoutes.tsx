import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import AuthLayout from "../layout/AuthLayout";
import SignUp from "../pages/SignUp";
import ProtectedRoute from "../component/ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
