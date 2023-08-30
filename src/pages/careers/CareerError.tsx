import { Link, useRouteError } from "react-router-dom";

type Error = {
  message: string;
};

const CareerError = () => {
  const error = useRouteError() as Error;

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default CareerError;
