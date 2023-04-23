import './App.scss'
import { useEffect, useState } from 'react'


function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const data = res.map((item, index) => {
          const str = `street: ${item.address.street}, suite: ${item.address.suite}, city: ${item.address.city}`
          return { ...item, address: str }
        });
        setUsers(data)
      });
  }, [])

  const handleDelete = id => {
    const index = users.filter((item, index)=>{
      console.log(id)
      console.log(item.id)
      return item.id !== id
    })
    
    setUsers(index)
    console.log(index)
  }

  return (
    <div className="App">
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={e => { handleDelete(user.id) }}>
            <p>ID: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
