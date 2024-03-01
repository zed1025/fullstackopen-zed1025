import { useState } from 'react'

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  );
}

const App = () => {
  const friends = [
    {name: 'Amit', age: '25'},
    {name: 'Manjoo Jha', age: '53'}
  ];
  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>

    </div>
  )
}

export default App