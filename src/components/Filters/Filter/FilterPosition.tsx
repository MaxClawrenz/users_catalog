import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { setFilters } from "../../../store/reducers/FilterSlice";

function FilterPosition() {
  const [position, setPosition] = useState<string>("");
  const dispatch = useAppDispatch();

  function handlePositionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPosition(event.target.value);
  }

  useEffect(() => {
    if (position.length > 4) {
      dispatch(setFilters({ filterName: "position", filterValue: position }));
    } else if (position.length === 0) {
      dispatch(setFilters({ filterName: "position", filterValue: position }));
    }
  }, [position, dispatch]);

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
