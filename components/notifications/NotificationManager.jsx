import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import Subscribe from "./Subscribe";
import Notifications from "./Notifications";


const NotificationManager = () => {

  const userInfo = useSelector((state) => state.manageData.userInfo);

  return (
    <div>
      { _.isEqual(userInfo.mongoNotificationsId, "0") ? <Subscribe /> : <Notifications /> }
    </div>
  )
}

export default NotificationManager;