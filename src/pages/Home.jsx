import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";

const Home = () => {
  const nagivate = useNavigate();
  return (
    <>
      <Header />

      <StIntroduce>
        하루하루 열정적인 당신, 험난한 세상 서로 따뜻한 응원으로 함께 이겨내 볼
        생각 없는가?
      </StIntroduce>
      <StAll>
        <Stmenu
          onClick={() => {
            nagivate("/WriteTodo");
          }}
        >
          나의 todo 기록하기
        </Stmenu>
        <Stmenu
          onClick={() => {
            nagivate("/TodoList");
          }}
        >
          모두의 todo 응원남기기
        </Stmenu>
      </StAll>
    </>
  );
};

export default Home;

// 박스전체 css
const StAll = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
// 소갯말 박스
const StIntroduce = styled.div`
  margin: 20px;
  padding: 12px;
  border: 4px solid teal;
`;

// nagivate 박스
const Stmenu = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  margin: auto;
`;
