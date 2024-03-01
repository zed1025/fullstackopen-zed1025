
const Header = (props) => {
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  );
}


const Part = (props) => {
  return (
    <>
      <p>{props.item.part} {props.item.exercises}</p>
    </>
  );
}

const Content = (props) => {
  return (
    <>
      <Part item={props.parts[0]}/>
      <Part item={props.parts[0]}/>
      <Part item={props.parts[0]}/>
    </>
  );
}


const Total = (props) => {
  const findTotal = () => {
    let total = 0;
    for(let i=0; i<props.parts.length; i++) {
      total = total + props.parts[i].exercises;
    }
    return total;
  }

  return (
    <>
      <p>Number of exercises {findTotal()}</p>
    </>
  );
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {id: 1, part: 'Fundamentals of React', exercises: 10},
    {id: 2, part: 'Using props to pass data', exercises: 7},
    {id: 3, part: 'State of a component', exercises: 14}
  ]

  return (
    <div>
      <Header courseName={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App