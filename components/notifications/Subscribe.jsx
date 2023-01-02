import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { createMongoDataObj } from "../../helpers/mongodb/NotificationCallCenter";
import { getUserData } from "../../helpers/users/users";
import { updateUserInfo } from "../../store/actions";


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
    }
    setTransactionPending(false);
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