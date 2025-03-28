const Header = ({ course }) => <h2>{course}</h2>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part, i) => (
      <Part part={part} key={i} />
    ))}
  </>
);

const Total = ({ total }) => <strong>Total of {total} exercises</strong>;

const Course = ({ course }) => {
  const total = course.parts.reduce((s, p) => s + p.exercises, 0);
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

export default Course;
