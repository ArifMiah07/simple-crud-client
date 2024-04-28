import { Link, useLoaderData } from "react-router-dom";


const Users = () => {


    const users = useLoaderData()


    return (
        <div>
            <nav><Link to={'/'}>home</Link></nav>
            <h1>this is users</h1>
            <h1>total user: {users.length}</h1>
            <div>
                {
                    users.map((user)=> <p key={user._id}>{user.name} : {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;