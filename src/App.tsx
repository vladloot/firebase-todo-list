import React, { FC, useEffect } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { useAppDispatch } from './hooks/hooks';
import { fetchTasks } from './reducers/tasksSlice';

export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
