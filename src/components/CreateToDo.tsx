import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

const Form = styled.form`
  padding: 0;
`;

const Input = styled.input`
  width: 195px;
  border: none;
  padding: 3px 0;
`;

const Button = styled.button`
  border: none;
  padding: 3px 10px;
`;

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onSubmit = ({ toDo }: IForm) => {
    setToDos((oldToDos) => {
      if (oldToDos.length === 15) {
        alert("무리하지마세욥!");
        return oldToDos;
      }
      const newToDo = { text: toDo, id: Date.now(), category };
      const newToDos = [newToDo, ...oldToDos];

      return newToDos;
    });

    setValue("toDo", "");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("toDo", {
          required: "Please write a To do",
        })}
        placeholder="Write a To do"
      ></Input>
      <Button>Add</Button>
    </Form>
  );
}

export default CreateToDo;
