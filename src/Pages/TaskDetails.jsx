import { useParams  } from "react-router-dom";

const tasks = [
    {
        id: 1,
        title: "Study React Router",
        desc: "learn routing basics"
    },
    {
        id: 2,
        title: "Build Project",
        desc: "build a project"
    },
    {
        id: 3,
        title: "Practice useState()",
        desc: "practice useState() hook"
    }
];

export default function TaskDetails() {
    const { id } = useParams();

    const task = tasks.find((task) => task.id === Number(id));

    if (!task) {
        return <h3>Task not found</h3>;
    }

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.desc}</p>
        </div>
    );
}