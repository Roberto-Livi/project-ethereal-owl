import React, { useState, useEffect } from "react";
import Layout from "../components/utilities/Layout";
import { Router } from "../routes";
import { useSelector } from "react-redux";
import { ROUTES } from "../components/utilities/constants";
import NotificationManager from "../components/notifications/NotificationManager";


const NotificationCenter = () => {

  const [access, setAccess] = useState(false);
  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const userInfo = useSelector((state) => state.manageData.userInfo);

  const verifyAccess = () => {
    if (!walletAddress) {
      Router.pushRoute(ROUTES.ENTRY);
    } else {
      setAccess(true);
    }
  };

  useEffect(() => {
    verifyAccess();
  }, []);

  return (
    <div>
      {access && (
        <Layout>
          <h1>Notification Center</h1>
          <NotificationManager />
        </Layout>
      )}
    </div>
  );
};

export default NotificationCenter;
