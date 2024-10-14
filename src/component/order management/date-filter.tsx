import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { PopoverContent } from "@radix-ui/react-popover";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

interface DateProps {
  filterDate: DateRange | undefined;
  setFilterDate: (date: DateRange | undefined) => void;
}

function DateFilter({ filterDate, setFilterDate }: DateProps) {
  // Function to handle the selected date range and update the context
  function handleDataFilter(selectedDate: DateRange | undefined) {
    setFilterDate(selectedDate || { from: undefined, to: undefined });
  }

  return (
    <div className={cn("grid gap-2 z-50")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !filterDate?.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {filterDate?.from ? (
              filterDate.to ? (
                <>
                  {format(filterDate.from, "LLL dd, y")} -{" "}
                  {format(filterDate.to, "LLL dd, y")}
                </>
              ) : (
                format(filterDate.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 border bg-white rounded-md"
          align="start"
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={new Date()}
            selected={filterDate}
            onSelect={handleDataFilter}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DateFilter;
