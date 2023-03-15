import React, { useEffect, useState } from "react";
import { Form, Checkbox } from "semantic-ui-react";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { updateProjectSearchRequest, updateProjectSearch } from "../../store/actions";
import { getFiveProjects } from "../../helpers/users/users";
import ProjectSearch from "./ProjectSearch";
import FieldSearch from "./FieldSearch";

const OPTS = {
  FIELD: "field",
  NAME: "name",
};

const ProjectInputOption = () => {

  const dispatch = useDispatch();

  const [chosenOption, setChosenOption] = useState(OPTS.FIELD);

  const getStartingData = async () => {
    dispatch(updateProjectSearchRequest());
    const projects = await getFiveProjects();
    console.log(projects)
    if (projects.length) {
      dispatch(updateProjectSearch(projects));
    }
  };

  useEffect(() => {
    getStartingData();
  }, [chosenOption]);

  return (
    <div>
      <div style={{ paddingBottom: "10px" }}>
        <Form>
          <Form.Field>
            <div style={{ paddingRight: "10px" }}>Choose from: </div>
            <Checkbox
              radio
              style={{ paddingRight: "10px" }}
              label="Category"
              name="checkboxRadioGroup"
              value="field"
              checked={chosenOption === OPTS.FIELD}
              onChange={(e, data) => setChosenOption(data.value)}
            />
            <Checkbox
              radio
              label="Name"
              name="checkboxRadioGroup"
              value="name"
              checked={chosenOption === OPTS.NAME}
              onChange={(e, data) => setChosenOption(data.value)}
            />
          </Form.Field>
        </Form>
      </div>
      {_.isEqual(OPTS.FIELD, chosenOption) ? (
        <FieldSearch />
      ) : (
        <ProjectSearch />
      )}
    </div>
  );
};

export default ProjectInputOption;
