import React from "react";
import Layout from "../components/utilities/Layout";


const Project = ({ projectId }) => {
  return (
    <Layout>
      Project {projectId}
    </Layout>
  )
}

Project.getInitialProps = (props) => {
  return { projectId: props.query.id };
};

export default Project;