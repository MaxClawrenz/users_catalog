import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { setFilters } from "../../../store/reducers/FilterSlice";
import useDebounce from "../../../hooks/useDebounce";

function FilterCity() {
  const [city, setCity] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleCityChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  function setFilterDebounce() {
    dispatch(setFilters({ filterName: "city", filterValue: city }));
  }

  useDebounce(setFilterDebounce, 800, city);

  return (
    <div className="filterContainer">
      <input
        onChange={handleCityChange}
        value={city}
        type="text"
        placeholder="Введите название"
      />
    </div>
  );
}

export default FilterCity;
