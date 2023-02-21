import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import _ from "lodash";
import { searchMongoProjectName } from "../../helpers/mongodb/ProjectsCallCenter";
import { updateProjectSearchRequest, updateProjectSearch } from "../../store/actions";
import { getFiveProjects, retrieveProjectByName } from "../../helpers/users/users";

const ProjectSearch = () => {

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([]);

  const onSelectionChange = async (selected) => {
    dispatch(updateProjectSearchRequest());
    const user = await retrieveProjectByName(selected);
    let results;

    if (_.isEmpty(selected)) {
      const users = await getFiveUsers();
      results = users.map((user) => {
        return {
          header: user.codename,
          address: user.userAddress,
          meta: user.profession,
          description: user.description,
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
          description: user.description,
        },
      ];
    }

    dispatch(updateProjectSearch(results));
  };

  const fetchOptions = async (searchTerm) => {
    if (_.isEmpty(searchTerm)) {
      return;
    }

    setTimeout(async () => {
      const data = await searchMongoProjectName(searchTerm);
      if (data) {
        const updatedArray = data.map((obj, idx) => ({
          key: idx,
          value: data[idx].codename,
          text: data[idx].codename,
        }));
        setOptions(updatedArray);
      }
    }, 1000);
  };

  const handleSearchChange = (event, data) => {
    setSearchTerm(data.searchQuery);
  };

  const getStartingData = async() => {
    dispatch(updateProjectSearchRequest());
    const projects = await getFiveProjects();
    if(projects.length) {
      dispatch(updateProjectSearch(projects));
    }
  }

  useEffect(() => {
    fetchOptions(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    getStartingData();
  }, []);

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
};

export default ProjectSearch;
