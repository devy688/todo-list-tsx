import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categorySelector, IToDo, toDoState } from "../atoms";

const List = styled.li`
  height: 31px;
  display: flex;
  align-items: center;
  padding: 0;

  span {
    font-size: 16px;
    width: 195px;
  }

  button {
    color: red;
    border: none;
    cursor: pointer;
    margin-left: 5px;
  }
`;

function ToDo({ text, category, id }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const categories = useRecoilValue(categorySelector);

  const moveToSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;

    setToDos((prevToDos) => {
      const targetIndex = prevToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: value };

      const newToDos = [...prevToDos];
      newToDos.splice(targetIndex, 1, newToDo);

      return newToDos;
    });
  };

  const deleteToDo = () => {
    setToDos((prevTodos) => {
      const newToDos = [...prevTodos];
      const deleted = newToDos.filter((toDo) => toDo.id !== id);

      return deleted;
    });
  };

  return (
    <List>
      <span>{text}</span>
      <div>
        <select onChange={moveToSelected}>
          {categories.map((item) => {
            if (category === item) {
              return <option selected>{category}</option>;
            } else {
              return <option>{item}</option>;
            }
          })}
        </select>
        <button onClick={deleteToDo}>Delete</button>
      </div>
    </List>
  );
}

export default ToDo;
