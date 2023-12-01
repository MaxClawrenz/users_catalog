import { IUserInfo } from "../../../interfaces/IUserInfo";
import { useState } from "react";

function UserInfo(props: IUserInfo) {

  const [name, setName]= useState(props.name);

  return (
    <div className="UserInfo">
      <div className="userName" id="userName_catalog">
        <a href={`/_wt/${props.id}`} target="_blank">
          {`${props.name.split(" ")[1]} ${props.name.split(" ")[0]}`}
        </a>
      </div>
      <div className="userProp" id="userProp_number1">
        <div className="userTitle">Должность:</div>
        <div className="userValue" id="userValue_number1">{props.position}</div>
      </div>
      <div className="userProp">
        <div className="userTitle">Компания:</div>
        <div className="userValue">{props.company}</div>
      </div>
      {/* <div className="userProp">
        <div className="userTitle">Департамент:</div>
        <div className="userValue">{props.department}</div>
      </div> */}
      <div className="userProp">
        <div className="userTitle">Подразделение:</div>
        <div className="userValue">{props.subdivision}</div>
      </div>
      <div className="userProp">
        <div className="userTitle">Город:</div>
        <div className="userValue">{props.city ? props.city : "Не указан"}</div>
      </div>
      <div className="userProp">
        <div className="userTitle">Email:</div>
        <div className="userValue">{props.email}</div>
      </div>
    </div>
  );
}

export default UserInfo;
