import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { setFilters } from "../../../store/reducers/FilterSlice";
import useDebounce from "../../../hooks/useDebounce";

function FilterPosition() {
  const [position, setPosition] = useState<string>("");
  const dispatch = useAppDispatch();

  function handlePositionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPosition(event.target.value);
  }

  function setFilterDebounce() {
    dispatch(setFilters({ filterName: "position", filterValue: position }));
  }

  useDebounce(setFilterDebounce, 800, position);

  return (
    <div className="filterContainer">
      <input
        onChange={handlePositionChange}
        value={position}
        type="text"
        placeholder="Введите название"
      />
    </div>
  );
}

export default FilterPosition;
function setEmail(value: string) {
  throw new Error("Function not implemented.");
}
