import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { createMongoDataObj, getUsersNotifications } from "../../helpers/mongodb/NotificationCallCenter";
import { getUserData } from "../../helpers/users/users";
import { updateUserInfo, uploadMongoNotifications } from "../../store/actions";
import { Router } from "../../routes";


const Subscribe = () => {

  const dispatch = useDispatch();

  const [transactionPending, setTransactionPending] = useState(false);

  const userInfo = useSelector((state) => state.manageData.userInfo);

  const onClickHandle = async() => {
    setTransactionPending(true);
    const response = await createMongoDataObj(userInfo);
    if(response) {
      const user = await getUserData();
      dispatch(updateUserInfo(user));
      updateMongoNotifs(user);
      Router.pushRoute("/");
    }
    setTransactionPending(false);
  }

  const updateMongoNotifs = async (user) => {
    if (user.userAddress && user.mongoNotificationsId !== "0") {
      const resp = await getUsersNotifications(user.mongoNotificationsId);
      if (resp.successfulResponse) {
        dispatch(uploadMongoNotifications(resp.data));
      }
    }
  }

  return (
    <div>
      <Button loading={transactionPending} onClick={onClickHandle}>
        Subscribe to Notifications
      </Button>
    </div>
  )
}

export default Subscribe;