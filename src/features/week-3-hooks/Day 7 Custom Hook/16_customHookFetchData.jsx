import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isCurrent = true;
        setLoading(true);

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error("Network response error");
                return res.json();
            })
            .then((data) => {
                if (isCurrent) {
                    setData(data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                if (isCurrent) setLoading(false);
            });

        return () => {
            isCurrent = false;
        };
    }, [url]);

    return { data, loading };
};

const CustomHookFetchData = () => {
    const { data: todos, loading } = useFetch("https://json-placeholder.mock.beeceptor.com/todos");

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1 className="dashboard-title">Dashboard</h1>
                <p className="dashboard-subtitle">Manage your daily operations and tasks</p>
            </header>

            {loading ? (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p className="loading-text">Fetching tasks...</p>
                </div>
            ) : (
                <main className="dashboard-main">
                    <h2 className="section-title">Task List</h2>
                    <ul className="todo-list">
                        {todos && todos.map((todo) => (
                            <li 
                                key={todo.id} 
                                className={`todo-item ${todo.completed ? "completed" : "pending"}`}
                            >
                                <div className="todo-content">
                                    <input 
                                        type="checkbox" 
                                        checked={todo.completed} 
                                        readOnly 
                                        className="todo-checkbox"
                                    />
                                    <span className={`todo-text ${todo.completed ? "completed" : "pending"}`}>
                                        {todo.title}
                                    </span>
                                </div>
                                <span className="user-badge">
                                    User {todo.userId}
                                </span>
                            </li>
                        ))}
                    </ul>
                </main>
            )}
        </div>
    );
};

export default CustomHookFetchData;
