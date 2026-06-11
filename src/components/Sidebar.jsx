import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/tasks">Tasks</Link>
        </li>


      </ul>
    </aside>
  );
}
