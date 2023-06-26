const Header = ({ title }) => {
    return <h1>{title}</h1>
}

const Part = ({ name, exercises }) => {
    return (
        <p>
        {name} {exercises}
        </p>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(p => {
                return (
                    <Part 
                        key={p.id}
                        name={p.name}
                        exercises={p.exercises}
                    />
                )
            })}
        </div>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)

    return (
        <strong>total of {total} exercises</strong>
    )
}

const Course = ({ course }) => {
    return (
        <div>
        <Header title={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
        </div>
    )
}

export default Course