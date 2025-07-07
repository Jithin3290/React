import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./Blog/Firstpage";
import Secondpage from "./Blog/Secondpage";
import { Titlelist } from "./Blog/Firstpage";
import { useState } from "react";
import Thirdpage from "./Blog/Thirdpage";
function App() {
  const [blogs, setBlogs] = useState([]);

  return (
    <>
      <Titlelist.Provider value={{ blogs, setBlogs }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Firstpage />}></Route>
            <Route path="blogs" element={<Secondpage />}></Route>
            <Route path="details/:id" element={<Thirdpage />}></Route>
          </Routes>
        </BrowserRouter>
      </Titlelist.Provider>
    </>
  );
}

export default App;
