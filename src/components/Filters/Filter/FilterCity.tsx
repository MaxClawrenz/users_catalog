import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { setFilters } from "../../../store/reducers/FilterSlice";

function FilterCity() {
  const [city, setCity] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleCityChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  useEffect(() => {
    if (city.length > 4) {
      dispatch(setFilters({ filterName: "city", filterValue: city }));
    } else if (city.length === 0) {
      dispatch(setFilters({ filterName: "city", filterValue: city }));
    }
  }, [city, dispatch]);

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
