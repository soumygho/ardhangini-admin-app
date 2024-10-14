import { SlidersHorizontal } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import React from "react";
import DateFilter from "./date-filter";
import { DateRange } from "react-day-picker";

interface componentProps {
  searchQuery: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterDate: DateRange | undefined;
  setFilterDate: (date: DateRange | undefined) => void;
}

function SearchFilterEdit({
  searchQuery,
  handleSearch,
  filterDate,
  setFilterDate,
}: componentProps) {
  return (
    <>
      <div className="search-filter-edit-component">
        <div className="main flex items-center gap-x-2">
          <Input
            type="search"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by any.."
            className="w-1/4 rounded-md"
          />

          {/* filter by type */}
          <Select>
            <SelectTrigger className="w-[130px] rounded-md">
              <p>
                <SlidersHorizontal size={15} />
              </p>
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* filter by date */}
          <DateFilter filterDate={filterDate} setFilterDate={setFilterDate} />
        </div>
      </div>
    </>
  );
}

export default SearchFilterEdit;
