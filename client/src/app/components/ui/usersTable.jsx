import React from "react";
import { Link } from "react-router-dom";

import Qualities from "./qualities";
import Profession from "./profession";

import Table from "../common/table";
import BookMark from "../common/bookmark";

import PropTypes from "prop-types";

const UserTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookMark,
  ...rest
}) => {
  const columns = {
    name: {
      path: "name",
      name: "Имя",
      component: (user) => <Link to={`/users/${user._id}`}>{user.name}</Link>,
    },
    qualities: {
      name: "Качества",
      component: (user) => <Qualities qualities={user.qualities} />,
    },
    professions: {
      name: "Профессия",
      component: (user) => <Profession id={user.profession} />,
    },
    completedMeetings: {
      path: "completedMeetings",
      name: "Встретился, раз",
    },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <BookMark
          status={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
        />
      ),
    },
  };
  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
  );
};

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
};

export default UserTable;
