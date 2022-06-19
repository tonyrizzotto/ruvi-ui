import React from "react";
import { 
  Routes, Route
} from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
// import AppRoute from "./components/Routes";
// import { routes } from './config/routes';


export default function App() {
  // return (
  //   <Routes>
  //     {
  //       routes.map((route) => {
  //         <Route
  //           key={route.path}
  //           path={route.path}
  //           element={(props,{ Component }) => <Component {...props}/>}
  //           isPrivate={route.isPrivate}
  //         />
  //       })
  //     }
  //   </Routes>
  // )

  return (
    <Routes>
      {/* need to dynamically render routes w/components */}
      <Route path="/" element={<div><a href="/login">Login Page</a></div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/accounts/create" element={<CreateAccount />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}