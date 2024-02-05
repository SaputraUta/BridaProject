import React from "react";

interface User {
    id: number,
    email: string,
    username: string,
    role: string,
}

const defaultUser: User = {
    id: 0,
    email: "",
    username: "",
    role: "",
};

const UserContext = React.createContext<User>(defaultUser);

export default UserContext;
