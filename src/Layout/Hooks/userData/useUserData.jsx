import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../axiosSecure/axiosSecure";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const useUserData = () => {
  const { user, loading } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fatchUserData = async () => {
      const res = await axiosSecure.get(`/user/${user.email}`);
      setUserData(res.data);
    };

    if (user?.email && !loading) {
      fatchUserData();
    }
  }, [axiosSecure, loading, user]);

  return userData;
};

export default useUserData;
