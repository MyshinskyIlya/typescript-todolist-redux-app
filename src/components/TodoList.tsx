import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/UseTypedSelector";
import { UseActions } from "../hooks/UseActions";

export const TodoList: FC = () => {
    const { todos, loading, error, page, limit } = useTypedSelector(
        (state) => state.todo
    );

    const pages = [1, 2, 3, 4, 5];

    const { fetchTodo, setTodoPage } = UseActions();

    useEffect(() => {
        fetchTodo(page, limit);
    }, [page]);

    if (loading) {
        return <h1>Идёт загрузка...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    {todo.id} - {todo.title}
                </div>
            ))}
            <div style={{ display: "flex" }}>
                {pages.map((p: any) => (
                    <div
                        onClick={() => setTodoPage(p)}
                        key={Math.random()}
                        style={{
                            border:
                                p === page
                                    ? "1.5px solid red"
                                    : "1px solid gray",
                            padding: "0.5rem",
                        }}
                    >
                        {p}
                    </div>
                ))}
            </div>
        </div>
    );
};
