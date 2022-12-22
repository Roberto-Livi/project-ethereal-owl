import React, { useEffect } from "react";


const UsersProjectsGroup = ({ usersProjects }) => {

  useEffect(() => {
    console.log(usersProjects);
  }, []);

  return (
    <div>
      Users Projects Group
    </div>
  )
}

export default UsersProjectsGroup;