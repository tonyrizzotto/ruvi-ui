import React from "react";
import { 
  Routes, Route 
} from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/accounts/create" element={<CreateAccount />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}