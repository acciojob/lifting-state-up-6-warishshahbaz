import React, { useState } from "react";
import "./../styles/App.css";
import ChildCom from "./ChildCom";

const App = () => {
  const [todos, setTodos] = useState(Data);

  return (
    <div>
      <ChildCom todos={todos} setTodos={setTodos} />
    </div>
  );
};

let Data = [
  {
    id: 1,
    title: "Learn React",
    completed: false,
  },
  {
    id: 2,
    title: "Build aReact app",
    completed: false,
  },
  {
    id: 3,
    title: "Deploye the React app",
    completed: false,
  },
];
export default App;
