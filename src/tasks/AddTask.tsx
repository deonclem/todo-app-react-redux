import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TASK } from "./actions";
import { Input } from "@chakra-ui/core";

const AddTask: React.FC = () => {
  const [taskName, setTaskName] = useState<string>();
  const dispatch = useDispatch();

  const onFormSubit = (e: FormEvent) => {
    e.preventDefault();
    if (taskName?.trim()) {
      dispatch({ type: ADD_TASK, payload: taskName.trim() });
      setTaskName("");
    }
  };

  return (
    <form onSubmit={onFormSubit}>
      <Input
        focusBorderColor="pink.400"
        size="sm"
        type="text"
        placeholder="Add a task"
        value={taskName}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          setTaskName(e.currentTarget.value)
        }
      />
    </form>
  );
};

export default AddTask;
