import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { setFilters } from "../../../store/reducers/FilterSlice";

function FilterDepartment() {
  const [department, setDepartment] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleDepartmentChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setDepartment(event.target.value);
  }

  useEffect(() => {
    dispatch(setFilters({ filterName: "department", filterValue: department }));
  }, [department, dispatch]);

  return (
    <div className="filterContainer">
      <select
        onChange={handleDepartmentChange}
        value={department}
        name="department"
      >
        <option value="">Не выбрано</option>
        <option value="Руководство">Руководство</option>
        {/* <option value="Турбозайм">Турбозайм</option>
        <option value="СДО">СДО</option> */}
        <option value="Направление альтернативных продуктов">
          Направление альтернативных продуктов
        </option>
        <option value="Отдел проектного управления">
          Отдел проектного управления
        </option>
        <option value="Департамент безопасности">
          Департамент безопасности
        </option>
        <option value="Департамент взыскания">Департамент взыскания</option>
        <option value="Департамент информационных технологий">
          Департамент информационных технологий
        </option>
        <option value="Департамент клиентского сервиса">
          Департамент клиентского сервиса
        </option>
        <option value="Департамент маркетинга">Департамент маркетинга</option>
        <option value="Департамент международного бизнеса">
          Департамент международного бизнеса
        </option>
        <option value="Департамент по правовым и корпоративным вопросам">
          Департамент по правовым и корпоративным вопросам
        </option>
        <option value="Департамент по управлению персоналом">
          Департамент по управлению персоналом
        </option>
        <option value="Департамент рисков">Департамент рисков</option>
        <option value="Департамент розничного бизнеса">
          Департамент розничного бизнеса
        </option>
        <option value="Финансовый департамент">Финансовый департамент</option>
      </select>
    </div>
  );
}

export default FilterDepartment;
