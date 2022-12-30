import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { createMongoDataObj } from "../../helpers/mongodb/NotificationCallCenter";
import { getUserData } from "../../helpers/users/users";
import { updateUserInfo } from "../../store/actions";


const Subscribe = () => {

  const dispatch = useDispatch();

  const onClickHandle = async() => {
    const response = await createMongoDataObj();
    if(response) {
      const user = await getUserData();
      dispatch(updateUserInfo(user));
    }
  }

  return (
    <div>
      <Button onClick={onClickHandle}>
        Subscribe to Notifications
      </Button>
    </div>
  )
}

export default Subscribe;