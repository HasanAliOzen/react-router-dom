import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

type Career = {
  id: 1;
  title: "Senior React Developer";
  salary: 50000;
  location: "London";
};

const CareerDetail = () => {
  const career = useLoaderData() as Career;

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          iste quaerat repellat nostrum quae velit distinctio nisi non alias
          sint culpa cum error minima a fuga similique, iure praesentium
          molestiae.
        </p>
      </div>
    </div>
  );
};

export default CareerDetail;

export const careerDetailLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;

  const res = await fetch("http://localhost:8000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not fetch the careers!");
  }

  return res.json();
};
