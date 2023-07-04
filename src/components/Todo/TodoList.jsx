import React, { useEffect, useState } from "react";
import axios from "axios";
import NextIcon from "../../assets/Todo/NextIcon";
import CheckIcon from "../../assets/Todo/CheckIcon";

export default function TodoList({ handleShowAdd }) {
  const [todoList, setTodoList] = useState([]);
  const [checklist, setChecklist] = useState(null);

  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await axios.get("http://localhost:5000/todos");
        // console.log(res.data.data);
        setTodoList(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTodo();
  }, []);

  async function handleCheckbox(id) {
    // fungsi buat langsung ngeganti checklist berdasarkan id.
    console.log(id);
  }

  return (
    <div>
      {todoList
        ? todoList.map((todo) => (
            <>
              <div
                key={todo._id}
                className="flex items-center gap-x-6 px-5"
                // onClick={handleShowAdd}
              >
                {/* <input
                  type="checkbox"
                  className="text-bgMain"
                  checked={todo.checklist}
                  onChange={() => handleCheckbox(todo._id)}
                /> */}
                <div
                  onClick={() => handleCheckbox(todo._id)}
                  className="flex h-5 w-6 cursor-pointer items-center justify-center rounded border-[1.6px] border-outlineGray bg-transparent"
                >
                  {todo.checklist ? <CheckIcon /> : null}
                </div>
                <div
                  className="flex h-full w-full cursor-pointer items-center justify-between py-3"
                  onClick={handleShowAdd}
                >
                  <span className="font-semibold text-lg text-textGray ">
                    {todo.todo}
                  </span>
                  <NextIcon />
                </div>
              </div>
              <div className="h-[1.5px] w-full bg-outlineGray"></div>
            </>
          ))
        : null}
    </div>
  );
}
