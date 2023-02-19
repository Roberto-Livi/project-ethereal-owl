import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "semantic-ui-react";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  region: "us-east-1"
});

const uploadImage = (file, walletAddress) => {
  const key = `${walletAddress}/${file.name}`;
  const params = {
    Bucket: "profile-pictures-ignitionist",
    Key: key,
    Body: file
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.log("Error uploading image: ", err);
    } else {
      console.log("Image uploaded successfully. URL: ", data.Location);
    }
  });
};

const ImageUploadForm = () => {

  const [file, setFile] = useState(null);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file, walletAddress);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Profile Picture</label>
        <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ImageUploadForm;
