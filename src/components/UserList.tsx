import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/UseTypedSelector";
import { UseActions } from "../hooks/UseActions";

export const UserList: FC = () => {
    const { users, loading, error } = useTypedSelector((state) => state.user);

    const { fetchUsers } = UseActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h1>Идёт загрузка...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};
