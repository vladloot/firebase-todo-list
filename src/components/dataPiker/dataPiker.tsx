import React, { FC, useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

import { useAppDispatch } from '../../hooks/hooks';
import { fetchUpdateTaskDeadline } from '../../reducers/tasksSlice';

type PropsType = {
  id: string;
  deadline: string;
  date: string;
};
export const DatePicker: FC<PropsType> = ({ id, deadline, date }) => {
  const dispatch = useAppDispatch();

  const [isExpired, setIsExpired] = useState(false);

  const isDeadline = deadline ? dayjs(deadline) : dayjs(date);

  const [value, setValue] = React.useState<Dayjs | null>(isDeadline);

  const deadlineTime = new Date(deadline);

  const milliseconds = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date(dayjs().format('YYYY-MM-DD'));

      return currentTime > deadlineTime ? setIsExpired(true) : setIsExpired(false);
    }, milliseconds);

    return () => {
      clearInterval(interval);
    };
  }, [deadline]);

  const handleChange = (newValue: Dayjs | null): void => {
    setValue(newValue);
    dispatch(
      fetchUpdateTaskDeadline({ id, deadline: newValue?.format('YYYY-MM-DD') as string }),
    );
  };

  const labelStatus = (): string => {
    if (isExpired) {
      return 'Expired';
    }

    return deadline ? 'Deadline' : 'No end date';
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={labelStatus()}
        inputFormat="DD/MM/YYYY"
        value={value}
        onChange={handleChange}
        renderInput={params => (
          <TextField
            {...params}
            sx={{
              '.MuiInputBase-input': { color: isExpired ? 'red' : 'inherit' },
              '& .MuiInputLabel-root': {
                color: isExpired ? 'red' : 'grey',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: isExpired ? 'red' : 'inherit',
                },
                '&:hover fieldset': {
                  borderColor: isExpired ? 'red' : 'inherit',
                },
                '&.Mui-focused fieldset': {
                  borderColor: isExpired ? 'red' : 'inherit',
                },
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};
