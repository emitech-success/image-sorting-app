import React from 'react'

export const UsersTest = () => {
  const users = [
    {
      id: 1, name: 'Leanne Graham'
    },
    {
      id: 2, name: 'Ervin Howell'
    },
    {
      id: 3, name: 'Clementine Bauch'
    },
    {
      id: 4, name: 'Patricia Lebsack'
    },
  ]
  return (
    <div>
      <ul key={users.id}>
        {users.map(user=>{
          return <li>{user.name}</li>
        })}
      </ul>
    </div>
  )
}
