import { useSelector } from "react-redux";

const useAuth = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return { isAuthenticated, user };
};

export default useAuth;
