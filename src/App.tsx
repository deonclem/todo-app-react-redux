import React from "react";
import TaskList from "./tasks/TaskList";
import AddTask from "./tasks/AddTask";
import { Box, Text } from "@chakra-ui/core";

const App: React.FC = () => {
  return (
    <Box maxW="lg" margin="auto" p="10">
      <TaskList />
      <AddTask />
    </Box>
  );
};

export default App;
