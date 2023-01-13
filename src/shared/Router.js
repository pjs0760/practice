import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import TodoList from "../pages/TodoList";
import WriteTodo from "../pages/WriteTodo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todolist/:id" element={<Details />} />
        <Route path="todolist" element={<TodoList />} />
        <Route path="writetodo" element={<WriteTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
