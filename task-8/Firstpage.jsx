import React from "react";
import { useRef, createContext } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export const Titlelist = createContext();

function Firstpage() {
  const { blogs, setBlogs } = useContext(Titlelist);
  const n = useNavigate();
  const tit = useRef();
  const des = useRef();
  function handle(e) {
    e.preventDefault();
    const newBlog = {
      title: tit.current.value,
      description: des.current.value,
    };
    setBlogs([...blogs, newBlog]);
    tit.current.value = "";
    des.current.value = "";
  }
  function handle2(e) {
    e.preventDefault();
    n("/blogs");
  }
  return (
    <>
      <center>
        <h3 style={{ color: "aliceblue" }}>write the blog</h3>
      </center>

      <div
        style={{
          backgroundColor: "aliceblue",
          height: "700px",
          width: "500px",
          display: "flex",
          placeContent: "center",
        }}
      >
        <form style={{ color: "black", padding: "40px" }}>
          Enter the title :{" "}
          <input
            type="text"
            placeholder=" title"
            style={{ width: "400px" }}
            ref={tit}
          />
          Enter the Description :{" "}
          <textarea
            placeholder=" About post"
            style={{ width: "400px", height: "400px" }}
            ref={des}
          />
          <button onClick={handle}>Add</button>
          <button onClick={handle2}>submit</button>
        </form>
      </div>
    </>
  );
}

export default Firstpage;
