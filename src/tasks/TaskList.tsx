import React from "react";
import { useSelector } from "react-redux";
import { TasksReducerState } from "./reducers";
import Task from "./Task";
import { Box, Text } from "@chakra-ui/core";

const TaskList = () => {
  const tasksState = useSelector<any, TasksReducerState>(state => state.tasks);

  return (
    <Box marginBottom="4">
      <Text fontSize="lg" marginBottom="2">
        My Todo List
      </Text>
      {tasksState.tasks.map((t, i) => (
        <div key={i}>
          <Task index={i} task={t}></Task>
        </div>
      ))}
    </Box>
  );
};

export default TaskList;
