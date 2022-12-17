import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input } from "semantic-ui-react";
import { getUserByCodename } from "../../helpers/users/users";
import { updateProfileSearch } from "../../store/actions";
import _ from "lodash";


const CodenameSearch = () => {

  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const user = await getUserByCodename(event.target[0].value);
    const items = [
      {
        header: user.codename,
        address: user.userAddress,
        meta: user.profession,
        description: user.description
      }
    ];

    const results = _.isEmpty(user.codename) ? [] : items;

    dispatch(updateProfileSearch(results));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Form onSubmit={onSubmit}>
        <Input
          fluid
          icon="search"
          placeholder="Search..."
        />
      </Form>
    </div>
  );
}

export default CodenameSearch;