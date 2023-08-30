import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        rerum totam, dolore nisi expedita molestias atque omnis necessitatibus
        enim, id distinctio. Amet at vel veniam pariatur eos a sunt praesentium.
      </p>

      <p>
        Go to the <Link to={"/"}>Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
