import React from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { projectCategories } from "../../helpers/projects/projectCategories";
import {
  updateProjectSearchRequest,
  updateProjectSearch
} from "../../store/actions";
import { getProjectsByField } from "../../helpers/users/users";

const FieldSearch = () => {

  const dispatch = useDispatch();

  const handleOnChange = async (selection) => {
    dispatch(updateProjectSearchRequest());
    const allProjects = await getProjectsByField(selection.value);
    dispatch(updateProjectSearch(allProjects));
  };

  return (
    <Dropdown
      placeholder="Select Category"
      fluid
      search
      selection
      options={projectCategories}
      width={20}
      onChange={(e, selected) => handleOnChange(selected)}
      style={{ marginBottom: "20px" }}
    />
  );
};

export default FieldSearch;
