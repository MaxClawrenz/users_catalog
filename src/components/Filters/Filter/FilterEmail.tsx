import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { setFilters } from "../../../store/reducers/FilterSlice";
import useDebounce from "../../../hooks/useDebounce";

function FilterEmail() {
  const [email, setEmail] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function setFilterDebounce() {
    dispatch(setFilters({ filterName: "email", filterValue: email }));
  }

  useDebounce(setFilterDebounce, 800, email);

  return (
    <div className="filterContainer">
      <input
        onChange={handleEmailChange}
        value={email}
        type="text"
        placeholder="Введите название"
      />
    </div>
  );
}

export default FilterEmail;
