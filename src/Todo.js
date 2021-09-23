import { useState } from "react";
import { TodoConsumer, useTodoContext } from "./TodoContext";

export default function Todo() {
  const [input, setInput] = useState("");
  const { todos, setTodos } = useTodoContext();

  const handleInput = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setTodos((prev) => [...prev, input]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={input} />
      </form>

      <section>
        <article>
          useContext를 사용한 예제
          {todos.map((todo) => (
            <div>{todo}</div>
          ))}
        </article>

        <TodoConsumer>
          {({ todos }) => (
            <article>
              Consumer를 사용한 예제
              {todos.map((todo) => (
                <div>{todo}</div>
              ))}
            </article>
          )}
        </TodoConsumer>
      </section>
    </div>
  );
}
