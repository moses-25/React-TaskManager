import {Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UserCard from "./components/UserCard";
import DashboardStats from "./components/DashboardStats";
//import the pages
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Tasks from "./Pages/Tasks";
import TaskDetails from "./Pages/TaskDetails";
import NotFound from "./Pages/NotFound";

function App() {

  return (
    <>
      <Navbar />
      <Dashboard />
      <Sidebar />
      <UserCard />
      <DashboardStats />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </>
  )
}

export default App
