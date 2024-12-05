import { format, parse } from 'date-fns';

export const formatDate = (date: Date): string => {
  return format(date, 'PPP');
};

export const formatTime = (time: string): string => {
  const date = parse(time, 'HH:mm', new Date());
  return format(date, 'h:mm a');
};