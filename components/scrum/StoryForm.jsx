import React, { useState } from "react";
import { Form, Button, Loader } from "semantic-ui-react";

const StoryForm = ({ codenames, initialValues, handleSubmit, isLoading }) => {
  const [formValues, setFormValues] = useState(() => {
    if (initialValues) {
      return {
        ...initialValues,
        storyPoints: initialValues.storyPoints.toString(),
      };
    }
    return {
      title: "",
      description: "",
      acceptanceCriteria: "",
      storyPoints: "",
      taskedTo: "",
      status: "",
      sprintStatus: "",
    };
  });

  const handleInputChange = (event, { name, value }) => {
    console.log(value)
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formValues);
    setFormValues({
      title: "",
      description: "",
      acceptanceCriteria: "",
      storyPoints: "",
      taskedTo: "",
      status: "",
      sprintStatus: "",
    });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Input
        label="Title"
        name="title"
        value={formValues.title}
        onChange={handleInputChange}
      />
      <Form.TextArea
        label="Description"
        name="description"
        value={formValues.description}
        onChange={handleInputChange}
      />
      <Form.TextArea
        label="Acceptance Criteria"
        name="acceptanceCriteria"
        value={formValues.acceptanceCriteria}
        onChange={handleInputChange}
      />
      <Form.Group inline>
        <Form.Dropdown
          label="Story Points"
          name="storyPoints"
          options={[
            { key: "1", value: "1", text: "1" },
            { key: "2", value: "2", text: "2" },
            { key: "3", value: "3", text: "3" },
            { key: "5", value: "5", text: "5" },
            { key: "8", value: "8", text: "8" },
            { key: "13", value: "13", text: "13" },
          ]}
          selection
          value={formValues.storyPoints}
          onChange={handleInputChange}
        />
        <Form.Dropdown
          label="Tasked To"
          name="taskedTo"
          options={codenames.map((codename) => ({
            key: codename,
            value: codename,
            text: codename,
          }))}
          selection
          value={formValues.taskedTo}
          onChange={handleInputChange}
        />
        <Form.Dropdown
          label="Status"
          name="status"
          options={[
            { key: "Ready", value: "Ready", text: "Ready" },
            { key: "In Progress", value: "In Progress", text: "In Progress" },
            { key: "Review", value: "Review", text: "Review" },
            { key: "Done", value: "Done", text: "Done" },
          ]}
          selection
          value={formValues.status}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Dropdown
        label="Sprint Status"
        name="sprintStatus"
        options={[
          { key: "Next", value: "Next", text: "Next" },
          {
            key: "Current Sprint",
            value: "Current Sprint",
            text: "Current Sprint",
          },
          { key: "Backlog", value: "Backlog", text: "Backlog" },
        ]}
        selection
        value={formValues.sprintStatus}
        onChange={handleInputChange}
      />
      <div style={{ textAlign: "center" }}>
        <Button type="submit" primary>
          Submit
        </Button>
      </div>
      {isLoading && <Loader active inline="centered" />}
    </Form>
  );
};

export default StoryForm;
