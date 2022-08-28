const Header = (header) => {
  return (
    <h1>
      {header.course}
    </h1>
  )
}

const Part = (content) => {
  return (
    <p>
      {content.part} {content.exercise}
    </p>
  )
}

const Content = (content) => {
  return (
    <div>
      <Part part={content.parts[0]} exercise={content.exercises[0]} />
      <Part part={content.parts[1]} exercise={content.exercises[1]} />
      <Part part={content.parts[2]} exercise={content.exercises[2]} />
    </div>
  )
}

const Total = (content) => {
  return (
    <p>
      Number of exercises {content.exercises[0] + content.exercises[1] + content.exercises[2]}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component'
  ]

  const exercises = [
      10,
      7,
      14
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}


export default App;


