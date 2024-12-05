import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { formatDate } from '@/lib/utils/date';

interface DateTimePickerProps {
  date: Date | undefined;
  time: string;
  onDateChange: (date: Date | undefined) => void;
  onTimeChange: (time: string) => void;
  dateError?: string;
  timeError?: string;
}

export function DateTimePicker({
  date,
  time,
  onDateChange,
  onTimeChange,
  dateError,
  timeError
}: DateTimePickerProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? formatDate(date) : 'Pick a date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={onDateChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {dateError && <p className="text-sm text-red-500">{dateError}</p>}
      </div>

      <div className="space-y-2">
        <Label>Time</Label>
        <Input
          type="time"
          value={time}
          onChange={(e) => onTimeChange(e.target.value)}
        />
        {timeError && <p className="text-sm text-red-500">{timeError}</p>}
      </div>
    </div>
  );
}