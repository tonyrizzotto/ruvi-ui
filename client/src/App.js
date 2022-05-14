import React from "react";
import { 
  Routes, Route 
} from "react-router-dom";

import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/accounts/create" element={<CreateAccount />} />
    </Routes>
  )
}