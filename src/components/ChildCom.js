import React from "react";

function ChildCom({ setTodos, todos }) {
  const handliClicked = (item) => {
    let res = todos.map((val) => {
      if (val.id === item.id) {
        return {
          ...val,
          completed: true,
        };
      }
      return val;
    });
    setTodos(res);
  };
  return (
    <div>
      {todos.map((val, i) => {
        return (
          <li key={`${i}-${val}`}>
            {val?.title ?? ""}{" "}
            {!val?.completed && (
              <button onClick={() => handliClicked(val)}>Complete</button>
            )}{" "}
          </li>
        );
      })}
    </div>
  );
}

export default ChildCom;
