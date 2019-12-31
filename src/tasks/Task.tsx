import React from "react";
import { ITask } from "./reducers";
import { useDispatch } from "react-redux";
import { TOGGLE_TASK } from "./actions";
import { Checkbox, Text, Stack } from "@chakra-ui/core";

export interface TaskProps {
  task: ITask;
  index: number;
}

const Task: React.FC<TaskProps> = ({ task, index }: TaskProps) => {
  const dispatch = useDispatch();
  const onTaskChange = () => {
    dispatch({ type: TOGGLE_TASK, payload: index });
  };
  return (
    <Stack isInline>
      <Checkbox
        flex="1"
        variantColor="pink"
        size="sm"
        marginRight="0"
        isChecked={task.done}
        onChange={onTaskChange}
      >
        <Text>{task.label}</Text>
      </Checkbox>
      <Text
        cursor="pointer"
        fontSize="xs"
        color="gray.400"
        onClick={onTaskChange}
      >
        {task.createdAt}
      </Text>
    </Stack>
  );
};

export default Task;
