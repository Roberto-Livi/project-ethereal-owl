import React, { useState, useEffect } from "react";
import Layout from "../components/utilities/Layout";
import { Router } from "../routes";
import { isAdmin } from "../helpers/users/users";
import { useSelector } from "react-redux";
import { ROUTES } from "../components/utilities/constants";


const Admin = () => {

  const [adminAccess, setAdminAccess] = useState(false);
  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const verifyAdminAccess = async() => {
    const userIsAdmin = await isAdmin(walletAddress);
    if(!userIsAdmin || !walletAddress) {
      Router.pushRoute(ROUTES.ENTRY);
    } else {
      setAdminAccess(true);
    }
  }

  useEffect(() => {
    verifyAdminAccess();
  }, []);

  return <div>{adminAccess && <Layout>ADMIN</Layout>}</div>;
}

export default Admin;