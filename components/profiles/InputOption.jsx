import React, { useEffect, useState } from "react";
import { Form, Checkbox } from "semantic-ui-react";
import ProfessionDropdown from "./ProfessionDropdown";
import CodenameSearch from "./CodenameSearch";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { updateProfileSearch, updateProfileSearchRequest } from "../../store/actions";
import { getFiveUsers } from "../../helpers/users/users";

const OPTS = {
  PROF: "profession",
  CNAME: "codename"
}

const InputOption = () => {

  const dispatch = useDispatch();

  const [chosenOption, setChosenOption] = useState(OPTS.PROF);

  const getStartingData = async () => {
    dispatch(updateProfileSearchRequest());
    const users = await getFiveUsers();
    const userCollection = users.map((user) => {
      return {
        header: user.codename,
        address: user.userAddress,
        meta: user.profession,
        description: user.description,
      };
    });
    dispatch(updateProfileSearch(userCollection));
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
            label="Profession"
            name="checkboxRadioGroup"
            value="profession"
            checked={chosenOption === OPTS.PROF}
            onChange={(e, data) => setChosenOption(data.value)}
          />
          <Checkbox
            radio
            label="Code Name"
            name="checkboxRadioGroup"
            value="codename"
            checked={chosenOption === OPTS.CNAME}
            onChange={(e, data) => setChosenOption(data.value)}
          />
        </Form.Field>
      </Form>
    </div>
    {  _.isEqual(OPTS.PROF, chosenOption) ? <ProfessionDropdown /> : <CodenameSearch />}
    </div>
  );
}

export default InputOption;