import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import useAxiosSecure from "../axiosSecure/axiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", "user?.email"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
