import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// isLoading은 서버에서 todos를 가져오는 상태를 나타내는 값, 기본은 false , 통신중은 true , error는 에러발생시 나타내는 값
const initialState = {
  todos: [],
  todo: {},
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const __getDetailsTodo = createAsyncThunk(
  "getdetailstodo",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/todos/${arg}`);
      // console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __getTodos = createAsyncThunk("getTodos", async (thunkAPI) => {
  try {
    const { data } = await axios.get("http://localhost:3001/todos");
    // console.log(11111, data);
    // return thunkAPI.fulfillWithValue(data.data);  이거 안됌 (get에서만 안되는듯 싶음)
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteTodo = createAsyncThunk(
  "delete_todo",
  async (id, thunkAPI) => {
    try {
      axios.delete(`http://localhost:3001/todos/${id}`);
      return thunkAPI.fulfillWithValue(id);
      // return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  // extraReducers 추가하기
  extraReducers: {
    // 네트워크 요청 끝났을 때, false로 변경
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },

    // 에러발생! 네트워크 요청 끝났으니 false
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 네트워크 요청 시작될 때 로딩상태 true로 변경
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },

    // 삭제기능(예시소스)
    // [__deleteTodo.fulfilled]: (state, action) => {
    //   const target = state.todos.findIndex(
    //     (body) => body.id === action.payload
    //   );
    // state.todos.splice(target, 1);
    // }

    // 삭제기능
    [__deleteTodo.fulfilled]: (state, action) => {
      const result = state.todos.filter((item) => item.id !== action.payload);
      state.todos = result;
    },
    [__deleteTodo.rejected]: () => {},
    [__deleteTodo.pending]: () => {},

    // 디테일 get
    [__getDetailsTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },

    [__getDetailsTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getDetailsTodo.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
