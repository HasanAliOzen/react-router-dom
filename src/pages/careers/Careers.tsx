import { useLoaderData, Link } from "react-router-dom";

type Career = {
  id: 1;
  title: "Senior React Developer";
  salary: 50000;
  location: "London";
};

const Careers = () => {
  const careers = useLoaderData() as Career[];

  return (
    <div className="careers">
      {careers.map((career: Career) => (
        <Link to={`/careers/${career.id}`}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Careers;

//loader function
export const careersLoader = async () => {
  const res = await fetch("http://localhost:8000/careers");

  if (!res.ok) {
    throw Error("Could not find the careers!");
  }

  return res.json();
};
