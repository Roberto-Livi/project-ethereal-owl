import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { getUserByCodename } from "../../helpers/users/users";
import { updateProfileSearch } from "../../store/actions";
import _ from "lodash";
import { getFiveUsers } from "../../helpers/users/users";
import { searchMongoCodename } from "../../helpers/mongodb/UsersCallCenter";


const CodenameSearch = () => {

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([]);

  const onSelectionChange = async (selected) => {
    const user = await getUserByCodename(selected);
    let results;

    if(_.isEmpty(selected)) {
      const users = await getFiveUsers();
      results = users.map((user) => {
        return {
          header: user.codename,
          address: user.userAddress,
          meta: user.profession,
          description: user.description
        };
      });
    } else if (_.isEmpty(user.codename)) {
      results = [];
    } else {
      results = [
        {
          header: user.codename,
          address: user.userAddress,
          meta: user.profession,
          description: user.description
        },
      ];
    }

    dispatch(updateProfileSearch(results));
  };

  const fetchOptions = async(searchTerm) => {
    if(_.isEmpty(searchTerm)) {
      return;
    }

    setTimeout(async() => {
      const data = await searchMongoCodename(searchTerm);
      if(data) {
        const updatedArray = data.map((obj, idx) => ({
          key: idx,
          value: data[idx].codename,
          text: data[idx].codename
        }));
        setOptions(updatedArray);
      }
    }, 1000);
  };

  const handleSearchChange = (event, data) => {
    setSearchTerm(data.searchQuery);
  };

  useEffect(() => {
    fetchOptions(searchTerm);
  }, [searchTerm]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <Dropdown
        fluid
        placeholder="Search..."
        icon={"search"}
        search
        selection
        options={options}
        onSearchChange={handleSearchChange}
        onChange={(e, data) => onSelectionChange(data.value)}
      />
    </div>
  );
}

export default CodenameSearch;