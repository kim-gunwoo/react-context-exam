# context API 예제

## start

```
$ npm install
$ npm start
```

## use

```js
// createContext, Provider, Consumer, useContext;
import { createContext, useState, useContext } from "react";

const TodoContext = createContext(); // Context 선언

// Provider 선언
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    // 전역으로 관리 할 상태 value 에 객체
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export const TodoConsumer = TodoContext.Consumer; // Consumer 사용시
export const useTodoContext = () => useContext(TodoContext); // useContext hook Consumer 대신 사용할 수 있다.
```
