import React from "react";
import { useSelector } from "react-redux";
import { TasksReducerState } from "./reducers";
import Task from "./Task";
import { Box, Text } from "@chakra-ui/core";
import { useTranslation } from "react-i18next";

const TaskList = () => {
  const tasksState = useSelector<any, TasksReducerState>(state => state.tasks);
  const { t } = useTranslation();

  return (
    <Box marginBottom="4">
      <Text fontSize="lg" marginBottom="2">
        {t("tasks.title")}
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
