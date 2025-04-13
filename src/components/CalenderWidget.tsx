"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export const CalendarWidget = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border text-white w-[270px] h-[280px] flex items-center justify-center"
    />
  );
};