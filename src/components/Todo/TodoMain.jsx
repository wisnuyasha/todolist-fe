import React, { useEffect, useState } from "react";
import axios from "axios";
import NextIcon from "../../assets/Todo/NextIcon";
import CheckIcon from "../../assets/Todo/CheckIcon";
import TodoList from "./TodoList";
import TodoBar from "./TodoBar";
import TodoAdd from "./TodoAdd";
import TodoEdit from "./TodoEdit";

export default function TodoMain() {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [check, setCheck] = useState(null);
  const [todoList, setTodoList] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await axios.get("http://localhost:5000/todos");
        setTodoList(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTodo();
  }, [trigger]);

  function showAddTask() {
    setShowAdd(!showAdd);
  }

  function showEditTask() {
    setShowEdit(!showEdit);
  }

  async function handleCheckbox(id) {
    setCheck(check)
    try {
      const res = await axios.post("http://localhost:5000/todos/${id}", {
        checklist: check
      })
    } catch (err) {
      console.log(err)
    }
    console.log(id);
    setTrigger(!trigger);
    setCheck(null)
  }

  return (
    // px sementara
    <div className="z-0 flex flex-col lg:px-16">
      <TodoBar handleShowAdd={showAddTask} />
      {showAdd ? <TodoAdd handleClose={showAddTask} /> : null}
      {showEdit ? <TodoEdit handleClose={showEditTask} /> : null}
      {todoList
        ? todoList.map((todo) => (
            <div key={todo._id}>
              <div className="flex items-center gap-x-6 px-5">
                <div
                  onClick={() => handleCheckbox(todo._id)}
                  className="flex h-5 w-6 cursor-pointer items-center justify-center rounded border-[1.6px] border-outlineGray bg-transparent"
                >
                  {todo.checklist ? <CheckIcon /> : null}
                </div>
                <div
                  className="flex h-full w-full cursor-pointer items-center justify-between py-3"
                  onClick={showEditTask}
                >
                  <span className="text-lg font-semibold text-textGray ">
                    {todo.todo}
                  </span>
                  <NextIcon />
                </div>
              </div>
              <div className="h-[1.5px] w-full bg-outlineGray"></div>
            </div>
          ))
        : null}
    </div>
  );
}
