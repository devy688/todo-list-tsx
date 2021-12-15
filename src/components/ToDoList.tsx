import React, { useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categorySelector, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Planner = styled.div`
  width: 450px;
  min-width: 450px;
  height: 685px;
  background: url("/images/yellow.png") center/cover no-repeat;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.h1`
  background-color: #273c75;
  color: white;
  font-size: 1.2em;
  font-family: "Yanone Kaffeesatz", sans-serif;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
`;

const Categories = styled.div`
  width: 90px;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Yanone Kaffeesatz", sans-serif;
  padding: 0;
  padding-top: 63px;
  text-align: center;

  ul {
    font-size: 1em;
    padding: 0 !important;

    li {
      cursor: pointer;
      padding: 7.6px 0;
      &:hover {
        background-color: #ffc0cb45;
      }
      &.selected {
        background-color: #ffc0cb45;
      }
    }
  }

  div {
    width: 100%;
    margin-top: 35px;
    input {
      text-align: center;
      border: none;
      width: 80px;
      padding: 5px 0;
    }
    button {
      border: none;
      width: 85px;
      margin-top: 6px;
      padding: 5px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  font-size: 16px;
`;

const List = styled.div`
  width: 75%;
  padding: 8px 16px;

  span {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
  }
  form {
    padding-top: 9px;
  }

  ul {
    padding-top: 5px;
  }
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const [categoryKinds, setCategoryKinds] = useRecoilState(categorySelector);

  const listRef = useRef<Array<HTMLLIElement | null>>([]);
  const categoryRef = useRef<HTMLInputElement>(null);

  const clickCategory = (event: React.MouseEvent<HTMLLIElement>) => {
    listRef &&
      listRef.current.map((list) => {
        if (list?.id === event.currentTarget.id) {
          event.currentTarget.classList.add("selected");
        } else {
          list?.setAttribute("class", "");
        }
        return null;
      });

    setCategory(event.currentTarget.id);
  };

  const handleSubmit = (value: string) => {
    const newCategories = [...categoryKinds, value];
    setCategoryKinds(newCategories);
  };

  const addCategory = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (categoryKinds.length === 13) {
      alert("더 이상 추가 못해욤!");
      return;
    }

    handleSubmit(categoryRef?.current?.value as string);
  };

  const inputCategory = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (categoryKinds.length === 13) {
      alert("충분합니다!");
      return;
    }

    const {
      currentTarget: { value },
    } = event;

    if (event.key === "Enter") {
      handleSubmit(value);
    }
  };

  return (
    <Planner>
      <HelmetProvider>
        <Helmet>
          <title>Todo List</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Source+Sans+Pro:wght@300;400&family=Yanone+Kaffeesatz&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
      </HelmetProvider>
      <Title>Todo list with TypeScript</Title>
      <Content>
        <Categories>
          <ul>
            {categoryKinds.map((category, i) => (
              <li
                key={category + i} // 변경하기
                ref={(el) => (listRef.current[i] = el)}
                onClick={clickCategory}
                id={category}
              >
                {category}
              </li>
            ))}
          </ul>
          <div>
            <input
              ref={categoryRef}
              placeholder="Category"
              onKeyPress={inputCategory}
            />
            <button onClick={addCategory}>Add</button>
          </div>
        </Categories>
        <List>
          <span>List</span>
          <CreateToDo />
          <ul>
            {toDos?.map((todo) => (
              <ToDo key={todo.id} {...todo} />
            ))}
          </ul>
        </List>
      </Content>
    </Planner>
  );
}

export default ToDoList;
