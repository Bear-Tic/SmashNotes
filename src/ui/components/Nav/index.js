import React from 'react';
import PropTypes from "prop-types";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import BookTwoToneIcon from '@material-ui/icons/BookTwoTone';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import HourglassFullTwoToneIcon from '@material-ui/icons/HourglassFullTwoTone';
import PollTwoToneIcon from '@material-ui/icons/PollTwoTone';
import { withRouter } from 'react-router-dom';

const Nav = ({ history }) => {
  const [value, setValue] = React.useState(0);
  return (
    <div className="p-body__navigation">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction icon={<BookTwoToneIcon />} onClick={() => history.push('/mymains')} />
        <BottomNavigationAction icon={<PollTwoToneIcon />} onClick={() => history.push('/matchup')} />
        <BottomNavigationAction icon={<HourglassFullTwoToneIcon onClick={() => history.push('/matchhistory')} />} />
        <BottomNavigationAction icon={<ImportContactsTwoToneIcon onClick={() => history.push('/glossary')} />} />
      </BottomNavigation>
    </div>
  );
};

Nav.propTypes = {
  match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(Nav);