import Break from "./Break";
import FilterActivity from "./Filter/FilterActivity";
import FilterBlock from "./Filter/FilterBlock";
import FilterCity from "./Filter/FilterCity";
import FilterCompany from "./Filter/FilterCompany";
import FilterDepartment from "./Filter/FilterDepartment";
import FilterEmail from "./Filter/FilterEmail";
import FilterPosition from "./Filter/FilterPosition";
import FilterSex from "./Filter/FilterSex";
import FilterSubdivision from "./Filter/FilterSubdivison";
import HeaderFilter from "./Header/HeaderFilter";

function MainFilter() {
  return (
    <div className="MainFilter">
      <HeaderFilter />
      <Break />
      <FilterBlock name={"Пол"}>
        <FilterSex />
      </FilterBlock>
      <Break />
      <FilterBlock name={"Город"}>
        <FilterCity />
      </FilterBlock>
      <Break />
      <FilterBlock name={"Компания"}>
        <FilterCompany />
      </FilterBlock>
      <Break />
      <FilterBlock name={"Департамент"}>
        <FilterDepartment />
      </FilterBlock>
      <Break />
      <FilterBlock name={"Подразделение"}>
        <FilterSubdivision />
      </FilterBlock>
      <Break />
      <FilterBlock name={"Должность"}>
        <FilterPosition />
      </FilterBlock>
      <Break />
      <FilterBlock name={"E-mail"}>
        <FilterEmail />
      </FilterBlock>
      <Break />
      <FilterBlock name={"Активность"}>
        <FilterActivity />
      </FilterBlock>
    </div>
  );
}

export default MainFilter;
