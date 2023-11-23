import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { setFilters } from "../../../store/reducers/FilterSlice";

function FilterEmail() {
  const [email, setEmail] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  useEffect(() => {
    if (email.length > 4) {
      dispatch(setFilters({ filterName: "email", filterValue: email }));
    } else if (email.length === 0) {
      dispatch(setFilters({ filterName: "email", filterValue: email }));
    }
  }, [email, dispatch]);

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
