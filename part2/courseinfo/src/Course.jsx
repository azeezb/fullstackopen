
const Header = ({ name }) => {
    return (
        <h1>{name}</h1>
    )
}

const Part = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
        </div>
    )
}

const Content = ({ parts }) => {
    return (
        <Part parts={parts} />
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <p><b>total of {total} exercises</b></p>
    )
}

const Course = ({ course }) => {
    console.log(course.name)

    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>

    )
}

const Courses = ({ courses }) => {
    return (
        <div>
            {
                courses.map((course) => (<Course key={course.id} course={course} />))
            }
        </div>
    )
}


export default Courses;