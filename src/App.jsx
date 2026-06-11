import {Routes, Route } from "react-router-dom"
//import the components 
import Navbar from "./components/Navbar";
//import pages
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Tasks from "./Pages/Tasks";
import TaskMenu from "./Pages/TaskMenu";
import CreateTask from "./Pages/CreateTask";
import TaskDetails from "./Pages/TaskDetails";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import Notifications from "./Pages/Notifications";
import Settings from "./Pages/Settings";
import Reports from "./Pages/Reports";

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
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </>
  )
}

export default App
