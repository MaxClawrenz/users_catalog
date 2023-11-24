import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { setFilters } from "../../../store/reducers/FilterSlice";
import useDebounce from "../../../hooks/useDebounce";

function FilterSubdivision() {
  const [subdiv, setSubdiv] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleSubdiv(event: React.ChangeEvent<HTMLInputElement>) {
    setSubdiv(event.target.value);
  }

  function setFilterDebounce() {
    dispatch(setFilters({ filterName: "subdivision", filterValue: subdiv }));
  }

  useDebounce(setFilterDebounce, 800, subdiv);

  return (
    <div className="filterContainer">
      <input
        value={subdiv}
        onChange={handleSubdiv}
        type="text"
        placeholder="Введите название"
      />
    </div>
  );
}

export default FilterSubdivision;
