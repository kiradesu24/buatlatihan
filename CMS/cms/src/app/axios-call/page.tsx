"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface IUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
}

export default function AxiosCall() {
    const [users, setUsers] = useState<IUser[]>([]);

    const getUsers = async () => {
        try {
          const { data } = await axios.get("http://localhost:3001/users");
          console.log(data);

          setUsers(data);
        } catch (err) {
          console.log(err);
        }
    };

useEffect (() => {
    getUsers();
}, []);

    return (
        <div>
            <h1 className="text-lg">Client Component Axios Call</h1>
            {users.length > 0 && 
                users.map((user) => (
                    <div key={user.id}>
                        <div>{user.first_name}</div>
                        <div>{user.last_name}</div>
                        <div>{user.email}</div>
                    </div>
                ))}
        </div>
    );
}