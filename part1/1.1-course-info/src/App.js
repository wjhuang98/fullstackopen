const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = (header) => {
    return (
      <h1>{header.course}</h1>
    )
  }
  
  const Content = (content) => {
    return (
      <div>
      <p>part = content.parts[0].name exercises = content.parts[0].exercises</p>
      <p>part = content.parts[1].name exercises = content.parts[1].exercises</p>
      <p>part = content.parts[2].name exercises = content.parts[2].exercises</p>
      </div>
    )
  }
  
  const Total = (total) => {
    return (
      <p>Number of Exercises {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises}</p>
    )
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App;
