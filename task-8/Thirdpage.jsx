import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Titlelist } from "./Firstpage";

function Thirdpage() {
  const { id } = useParams(); // return a string
  const { blogs } = useContext(Titlelist);

  const blog = blogs.find((item, index) => index === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>Blog description</h1>
      <h4>{blog.description}</h4>
    </div>
  );
}

export default Thirdpage;
