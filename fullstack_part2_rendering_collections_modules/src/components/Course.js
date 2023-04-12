import Part from './Part'
import Header from './Header'

  const Course = ({ courses }) => {
    return (
        <div>
          {courses.map((course) => (
            <div key={course.id}>
              <Header header={course} />
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