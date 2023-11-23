import { IFilterBlock } from "../../../interfaces/IFilterBlock";

function FilterBlock(props: IFilterBlock) {
  return (
    <div className="FilterBlock">
      <div className="FilterName">{props.name}</div>
      {props.children}
    </div>
  );
}

export default FilterBlock;
