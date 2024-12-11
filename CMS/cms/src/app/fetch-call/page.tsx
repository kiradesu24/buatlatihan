interface IUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
}

const getUsers = async () => {
    try {
        const response = await fetch ("http://localhost:3001/users", {
           method: "GET" 
        });
        const data = await response.json();
        
        return data;        
    } catch (err) {
        console.log(err);   
    }
};

export default async function FetchCall() {
    const users: IUser[] = await getUsers();
    return (
        <div>
            <h1 className="text-lg">Server Component Fetch Call</h1>
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
