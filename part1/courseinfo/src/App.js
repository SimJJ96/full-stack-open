const Header = (header) => {
  return (
    <h1>
      {header.course.name}
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
      <Part part={content.parts.parts[0].name} exercise={content.parts.parts[0].exercises} />
      <Part part={content.parts.parts[1].name} exercise={content.parts.parts[1].exercises} />
      <Part part={content.parts.parts[2].name} exercise={content.parts.parts[2].exercises} />
    </div>
  )
}

const Total = (content) => {
  return (

    <p>
      Number of exercises {content.parts.parts[0].exercises + content.parts.parts[1].exercises + content.parts.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}


export default App;


