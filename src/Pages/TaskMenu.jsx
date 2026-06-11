import tasks from "../data/task";
import TaskList from "../components/TaskList";
import SearchBar from "../components/SearchBar";

export default function TaskMenu() {
    return (
        <div>
            <h1>Tasks</h1>

            <SearchBar />
            <TaskList tasks={tasks} />
        </div>
    );
}


