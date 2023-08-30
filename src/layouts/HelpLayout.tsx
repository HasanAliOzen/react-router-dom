import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
        possimus rerum minima autem, aspernatur nisi voluptatum, tenetur
        distinctio temporibus id blanditiis quaerat impedit officiis. Et rem
        totam harum quam alias.
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;
