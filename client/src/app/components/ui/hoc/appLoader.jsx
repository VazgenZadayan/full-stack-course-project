import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadQualitiesList } from "../../../store/qualities";
import { loadProfessionsList } from "../../../store/professions";
import {
    getIsLoggedIn,
    getUsersLoadingStatus,
    loadUsersList,
} from "../../../store/users";

import PropTypes from "prop-types";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());
  const usersStatusLoading = useSelector(getUsersLoadingStatus());
  useEffect(() => {
    dispatch(loadQualitiesList());
    dispatch(loadProfessionsList());
    if (isLoggedIn) {
      dispatch(loadUsersList());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  if (usersStatusLoading) return "loading";
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default AppLoader;
