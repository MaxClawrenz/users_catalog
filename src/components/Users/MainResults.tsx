import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import SearcInput from "./SearcInput";
import { userAPI } from "../../services/userService";
import { setUsers } from "../../store/reducers/UserSlice";
import Card from "./UserCard/Card";
import SkeletonCard from "./UserCard/SkeletonCard";
// import { IUser } from "../../interfaces/IUser";
// import { FilterState } from "../../interfaces/FilterState";

function MainResults() {
  const dispatch = useAppDispatch();

  const mainFilter = useAppSelector((state) => state.filterReducer);

  function checkFilter(mainFilter: object) {
    return Object.values(mainFilter).every((value) => !value);
  }

  const {
    data: newUsers,
    isFetching,
    error,
  } = userAPI.useFetchAllUsersQuery(mainFilter, {
    skip: checkFilter(mainFilter),
  });

  const users = useAppSelector((state) => state.userReducer.filteredUsers);

  useEffect(() => {
    document.addEventListener("scroll", lazyLoadImages);
    return () => document.removeEventListener("scroll", lazyLoadImages);
  }, []);

  useEffect(() => {
    if (newUsers) {
      dispatch(setUsers(newUsers));
      lazyLoadImages();
    }
  }, [newUsers, dispatch]);

  useEffect(() => {
    lazyLoadImages();
  }, [isFetching]);

  function lazyLoadImages() {
    const images = document.querySelectorAll("img[data-src]");
    const options = {
      rootMargin: "0px",
      threshold: 0.1,
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("data-src");
          if (src) {
            img.setAttribute("src", src);
          }
          observer.unobserve(img);
        }
      });
    }, options);

    images.forEach((image) => {
      imageObserver.observe(image);
    });
  }

  return (
    <div className="MainResults">
      <SearcInput />
      {isFetching && (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
      {error && <h1>При загрузке произошла ошибка</h1>}
      {!isFetching &&
        !checkFilter(mainFilter) &&
        newUsers &&
        newUsers.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            email={user.email}
            id={user.id}
            city={user.city}
            company={user.company}
            department={user.department}
            position={user.position}
            sex={user.sex}
            subdivision={user.subdivision}
            photo={user.photo}
            social={user.social}
          />
        ))}
    </div>
  );
}

export default MainResults;
