import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/utilities/Layout";
import { Grid, Message } from "semantic-ui-react";
import { getUsersProjects } from "../../helpers/users/users";
import UsersProjectsGroup from "../../components/projects/UsersProjectsGroup";

const UsersProjects = () => {

  const [usersProjects, setUsersProjects] = useState([]);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const getProjects = async() => {
    const projects = await getUsersProjects();
    if(!!projects) {
      setUsersProjects(projects);
    }
  }

  useEffect(() => {
    getProjects()
  }, []);

  return (
    <Layout>
      <Grid style={{ backgroundColor: "#e6e6fa", marginTop: "50px" }}>
        <Grid.Row>
          <Grid.Column>
            {usersProjects.length ? (
              <UsersProjectsGroup usersProjects={usersProjects} />
            ) : (
              <div style={{ textAlign: "center" }}><Message size="massive" compact>
                You are not involved in any projects. Create or join one!
              </Message></div>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default UsersProjects;
