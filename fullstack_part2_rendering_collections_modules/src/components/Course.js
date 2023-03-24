import Part from './Part'

  const Course = ({ courses }) => {
    return (
        <div>
          {courses.map((course) => (
            <div key={course.id}>
              <h1>{course.name}</h1>
              <ul>
                {course.parts.map((part) => (
                  <Part key={part.id} content={part} />
                ))}
              </ul>
              <p>
                <strong>
                  Total exercises: {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
                </strong>
              </p>
            </div>
          ))}
        </div>
      )
    }
  
  export default Course