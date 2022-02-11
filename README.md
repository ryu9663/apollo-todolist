# apollo-todolist
graphql로 상태관리해서 투두리스트 만드는 연습


공식문서와 여러 유튜브, 블로그를 전전하다 [아폴로를 이용해 상태관리를 하는 투두리스트를 만들어 놓은 블로그](https://chanyeong.com/blog/post/45)를 보고 

따라하며 개념을 익혔음


좋은것같다.

---
### src/stores/todos.ts

stores파일에 전역변수를 박아 놓는다. `makeVar` 이용.

```
//makeVar를 통해 반응변수를 만들 수 있다.
//이 반응변수는 Apollo Client 캐시 외부에 로컬 상태를 저장하기 위해 사용
import { makeVar } from "@apollo/client";

export type Todo = {
  id: number;
  content: string;
};
const todoIdCounterVar = makeVar(0);
const todoVar = makeVar<Todo[]>([]);

export const addTodo = (content: string) => {
  const prevId = todoIdCounterVar();
  const currentTodo = todoVar();//todoVar()와 같이 매개변수가 없다면, 해당 반응 변수의 값을 리턴
  const newTodo = { id: prevId + 1, content };
  todoVar([...currentTodo, newTodo]);//매개변수가 있다면 그 매개변수를 새로운 반응 변수의 값으로 업데이트
  todoIdCounterVar(prevId + 1);
};


export default todoVar;

```


### src/components/TodoForm.tsx


```
import { FC, useState } from "react";
import { addTodo } from "../stores/todo";

const TodoForm: FC = () => {
  const [content, setContent] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(content); // todo 추가, 아까 위의 store/todo.ts 에 있는 addTodo(content)와 연결되어 있다.
    setContent("");
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChangeContent} value={content} placeholder="내용" />
      <button type="submit">입력</button>
    </form>
  );
};

export default TodoForm;

```
