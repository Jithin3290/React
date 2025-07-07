import { useContext } from "react";
import { Titlelist } from "./Firstpage";
import { useNavigate } from "react-router-dom";

function Secondpage() {
  const { blogs } = useContext(Titlelist);
  console.log(blogs);
  const nav = useNavigate();
  function handle(i) {
    nav(`/details/${i}`);
  }
  return (
    <>
      <h1 style={{ color: "red" }}>Title list</h1>
      {blogs.map((data, i) => {
        return (
          <div key={i} onClick={() => handle(i)}>
            {data.title}
          </div>
        );
      })}
    </>
  );
}

export default Secondpage;
