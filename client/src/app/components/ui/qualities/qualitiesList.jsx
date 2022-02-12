import React, { useEffect } from "react";

import {
    getQualitiesLoadingStatus,
    getQulitiesByIds,
    loadQualitiesList,
} from "../../../store/qualities";
import { useDispatch, useSelector } from "react-redux";

import Quality from "./quality";

import PropTypes from "prop-types";

const QualitiesList = ({ qualities }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getQualitiesLoadingStatus());
  const qualitiesList = useSelector(getQulitiesByIds(qualities));
  useEffect(() => {
    dispatch(loadQualitiesList());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return "Loadind ...";

  return (
    <>
      {qualitiesList.map((qual) => (
        <Quality key={qual._id} {...qual} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: PropTypes.array,
};

export default QualitiesList;
