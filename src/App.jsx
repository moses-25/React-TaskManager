import {Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar";
//import the pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Tasks from "./Pages/Tasks";
import TaskDetails from "./Pages/TaskDetails";
import NotFound from "./Pages/NotFound";

function App() {

  return (
    <>
      <Navbar />

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
