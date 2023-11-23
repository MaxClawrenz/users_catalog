import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { setFilters } from "../../../store/reducers/FilterSlice";

function FilterCompany() {
  const [company, setCompany] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleCompanyChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setCompany((prev) => prev + event.target.value + ";");
    } else {
      setCompany((prev) => prev.replace(event.target.value + ";", ""));
    }
  }

  useEffect(() => {
    dispatch(setFilters({ filterName: "company", filterValue: company }));
  }, [company, dispatch]);

  return (
    <div className="filterContainer">
      <div className="checkBoxColumnLeft">
        <div className="labelsBlock">
          <input
            onChange={handleCompanyChange}
            value="7137262226269955805"
            type="checkbox"
            id="BD"
            name="Быстроденьги"
          />
          <label htmlFor="BD">Быстроденьги</label>
        </div>
        <div className="labelsBlock">
          <input
            onChange={handleCompanyChange}
            value="7137270169382290802"
            type="checkbox"
            id="TZ"
            name="Турбозайм"
          />
          <label htmlFor="TZ">Турбозайм</label>
        </div>
      </div>
      <div className="checkBoxColumnRight">
        <div className="labelsBlock">
          <input
            onChange={handleCompanyChange}
            value="7137298841389065561"
            type="checkbox"
            id="SR"
            name="EqvantaLab"
          />
          <label htmlFor="SR">EqvantaLab</label>
        </div>
        <div className="labelsBlock">
          <input
            onChange={handleCompanyChange}
            value="7137249226813999821"
            type="checkbox"
            id="EL"
            name="СанораРус"
          />
          <label htmlFor="EL">СанораРус</label>
        </div>
      </div>
    </div>
  );
}

export default FilterCompany;
