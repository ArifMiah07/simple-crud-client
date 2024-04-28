
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'

function App() {

  // const [users, setUsers] = useState({});

  const handleAddUser = (event)=>{
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const user = {
      name,
      email,
      password
    }

     fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
     })
     .then(res => res.json())
     .then(data => {
      console.log(data);
      if(data.insertedId){
        alert('Users added successfully')
        form.reset();
      }

     })

    console.log(name, email, password, user);
  }


  return (
    <>
      <h1>Simple Curd</h1>
      <nav><Link to={'/users'}>users</Link></nav>
      <form onSubmit={handleAddUser}>
        <input type="text" placeholder='name' name="name" id="" /> <br />
        <input type="email" placeholder='email' name="email" id="" /> <br />
        <input type="text"  placeholder='password' name="password" id="" /> <br />
        <input type="submit" name="submit" value="Add User" id="" /> <br />
      </form>
    </>
  )
}

export default App
