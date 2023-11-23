import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { setFilters } from "../../../store/reducers/FilterSlice";

function FilterSex() {
  const [sex, setSex] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleChangeSex(event: React.ChangeEvent<HTMLSelectElement>) {
    setSex(event.target.value);
  }

  useEffect(() => {
    dispatch(setFilters({ filterName: "sex", filterValue: sex }));
  }, [sex]);

  return (
    <div className="filterContainer">
      <select onChange={handleChangeSex} value={sex} name="sex">
        <option value="">Не выбрано</option>
        <option value="m">Мужской</option>
        <option value="w">Женский</option>
      </select>
    </div>
  );
}

export default FilterSex;
