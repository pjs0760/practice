import React, { useEffect } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { __getDetailsTodo } from "../redux/modules/todosSlice";
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const todoData = useSelector((state) => state.todos.todo);
  console.log(todoData, "todoData");

  useEffect(() => {
    dispatch(__getDetailsTodo(id));
  }, [dispatch]);

  return (
    <>
      <Header />
      <StHeader>
        <text
          size="24"
          onClick={() => {
            navigate("/TodoList");
          }}
        >
          이전으로
        </text>
      </StHeader>

      <h2>{todoData.title}</h2>
      <h5>{todoData.body}</h5>

      <button>수정하기</button>
    </>
  );
};

export default Details;

const StHeader = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  /* flex-end해야 오른쪽정렬 */
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
  /* float: right; 하면 박스가 작아짐...*/
`;
