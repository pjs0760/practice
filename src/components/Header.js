import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <StHeader>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <div>Everyone's todo</div>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;
