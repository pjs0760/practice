import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const WriteTodo = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    username: "",
  });

  const onWriteHandler = async (todo) => {
    await axios.post("http://localhost:3001/todos", todo);
    navigate("/todolist");
  };
  return (
    <>
      <Header />
      <StCenter>
        {/* form으로 에러메세지, submit등등 속성활용 */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onWriteHandler(todo);
          }}
        >
          <div>
            <div>
              <span>작성자</span>
            </div>
            <input
              type="text"
              onChange={(event) => {
                const { value } = event.target;
                setTodo({
                  ...todo,
                  username: value,
                });
              }}
              placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
              value={todo.username}
              maxLength={5}
              name="username"
              // 기본속성값false, true일때 다음과정진행
              required
            />
            <div>
              <span>제목</span>
            </div>
            <input
              type="text"
              onChange={(event) => {
                const { value } = event.target;
                setTodo({
                  ...todo,
                  title: value,
                });
              }}
              value={todo.title}
              placeholder="제목을 입력해주세요. (50자 이내)"
              maxLength={50}
              name="title"
              required
            />
            <div>
              <span>내용</span>
            </div>
            <Textarea
              name="body"
              onChange={(event) => {
                const { value } = event.target;
                setTodo({
                  ...todo,
                  body: value,
                });
              }}
              value={todo.body}
              rows="10"
              maxLength={200}
              placeholder="내용을 입력해주세요. (200자 이내)"
              required
            />
          </div>
          <button>추가하기</button>
        </form>
      </StCenter>
    </>
  );
};

export default WriteTodo;

// 전체중앙정렬
const StCenter = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: "space-between";
`;

// textarea 크기고정(width 100%)및 css
const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
`;
