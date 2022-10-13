import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracker from "./pages/tracker/Tracker";
import Clients from "./pages/clients/Clients";
import Reps from "./pages/reps/Reps";
import Orders from "./pages/orders/Orders";
import Login from "./pages/login/Login";
import "./App.css";
import Overview from "./pages/overview/Overview";
import SingleClient from "./components/single/SingleClient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/:id" element={<SingleClient />} />
        <Route path="/reps" element={<Reps />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
