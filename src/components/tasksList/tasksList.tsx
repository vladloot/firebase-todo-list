import React from 'react';

import Box from '@mui/material/Box';

import { useAppSelector } from '../../hooks/hooks';
import { Task } from '../task/task';

export const TasksList = React.memo(() => {
  let tasks = useAppSelector(state => state.tasksSlice.tasks);

  const filter = useAppSelector(state => state.filterSlice.filter);

  if (filter === 'Done') {
    tasks = tasks.filter(task => task.status);
  }

  if (filter === 'Progress') {
    tasks = tasks.filter(task => !task.status);
  }

  return (
    <Box>
      {tasks?.map(task => {
        return <Task key={task.id} task={task} />;
      })}
    </Box>
  );
});
