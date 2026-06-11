import {Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Tasks from "./Pages/Tasks";
import TaskMenu from "./Pages/TaskMenu";
import TaskDetails from "./Pages/TaskDetails";
import NotFound from "./Pages/NotFound";

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/taskmenu" element={<TaskMenu />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </>
  )
}

export default App
