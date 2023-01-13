import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { __getTodos, __deleteTodo } from "../redux/modules/todosSlice";

// 순서1여기 + Slice.js가서 todos값 선언하고 + index.js가서 store전역으로 사용하게 설정
const TodoList = () => {
  const todoList = useSelector((state) => state.todos.todos);
  // console.log(todoList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);
  // console.log(todoList);

  const onDeleteHandler = (id) => {
    dispatch(__deleteTodo(id));
  };

  return (
    <>
      <Header />

      {todoList?.map((todo) => (
        <>
          <div
            key={todo.id}
            todo={todo}
            onClick={() => {
              navigate(`/todolist/${todo.id}`);
            }}
          >
            <h5>작성자 : {todo.username}</h5>
            <div>
              <h2>{todo.title}</h2>
            </div>
            {/* <div>{todo.body}</div> */}
            <button
              onClick={(event) => {
                // 메소드로 버블링 막음!
                event.stopPropagation();
                // 메소드로 삭제여부확인
                const result = window.confirm("삭제하시겠습니까?");
                if (result) {
                  return onDeleteHandler(todo.id);
                } else {
                  return;
                }
              }}
            >
              삭제
            </button>
          </div>
        </>
      ))}
    </>
  );
};

export default TodoList;
