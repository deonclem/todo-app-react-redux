import React, { Suspense } from "react";
import TaskList from "./tasks/TaskList";
import AddTask from "./tasks/AddTask";
import { Box } from "@chakra-ui/core";
import Header from "./Header";

const App: React.FC = () => {
  return (
    <Suspense fallback="loading">
      <Header />
      <Box maxW="lg" margin="auto" p="10">
        <TaskList />
        <AddTask />
      </Box>
    </Suspense>
  );
};

export default App;
