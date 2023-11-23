import { IUserPhoto } from "../../../interfaces/IUserPhoto";

function UserPhoto({ id }: IUserPhoto) {
  return (
    <div className="UserPhoto">
      <img
        className="userImage"
        width="160"
        height="160"
        data-src={`/person_icon.html?id=${id}&type=250x250`}
        alt=""
      />
    </div>
  );
}

export default UserPhoto;
