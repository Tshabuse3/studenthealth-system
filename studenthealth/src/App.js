import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BookTherapist from "./pages/BookTherapist";
import Navbar from "./components/navbar";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ConfidentialReport from "./pages/ConfidentialReport";
import EmergencySupport from "./pages/EmergencySupport";
import WellnessActivities from "./pages/WellnessActivites"; 

const Layout = ({ children }) => {
  const { loggedIn } = useAuth();
  const hideNavbar = window.location.pathname === "/login";
  return (
    <> 
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/book-therapist"
              element={
                <PrivateRoute>
                  <BookTherapist />
                </PrivateRoute>
              }
            />
            <Route
              path="/confidential-report"
              element={
                <PrivateRoute>
                  <ConfidentialReport />
                </PrivateRoute>
              }
            />
            <Route
              path="/emergency-support"
              element={
                <PrivateRoute>
                  <EmergencySupport />
                </PrivateRoute>
              }
            />
            <Route
              path="/Wellness-activities"
              element={
                <PrivateRoute>
                  <WellnessActivities />
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
