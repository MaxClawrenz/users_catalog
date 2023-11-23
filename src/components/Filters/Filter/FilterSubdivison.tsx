import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { setFilters } from "../../../store/reducers/FilterSlice";

function FilterSubdivision() {
  const [subdiv, setSubdiv] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleSubdiv(event: React.ChangeEvent<HTMLInputElement>) {
    setSubdiv(event.target.value);
  }

  useEffect(() => {
    if (subdiv.length > 2) {
      dispatch(setFilters({ filterName: "subdivision", filterValue: subdiv }));
    } else if (subdiv.length === 0) {
      dispatch(setFilters({ filterName: "subdivision", filterValue: subdiv }));
    }
  }, [subdiv, dispatch]);

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
