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

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App;
