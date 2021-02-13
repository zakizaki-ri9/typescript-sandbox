import React from "react";
import { Link } from "gatsby";

const IndexPage: React.FC = () => {
  return (
    <div>
      <p>Hello Gatsby</p>
      <Link to="/about">Link to About</Link>
    </div>
  );
};

export default IndexPage;
