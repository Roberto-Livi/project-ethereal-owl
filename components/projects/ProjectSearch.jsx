import React from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import _ from "lodash";

const ProjectSearch = () => {
  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    // const user = await getUserByCodename(event.target[0].value);
    // let results;

    // if (_.isEmpty(event.target[0].value)) {
    //   const users = await getFiveUsers();
    //   results = users.map((user) => {
    //     return {
    //       header: user.codename,
    //       address: user.userAddress,
    //       meta: user.profession,
    //       description: user.description,
    //     };
    //   });
    // } else if (_.isEmpty(user.codename)) {
    //   results = [];
    // } else {
    //   results = [
    //     {
    //       header: user.codename,
    //       address: user.userAddress,
    //       meta: user.profession,
    //       description: user.description,
    //     },
    //   ];
    // }

    // dispatch(updateProfileSearch(results));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Dropdown

      />
    </div>
  );
};

export default ProjectSearch;
