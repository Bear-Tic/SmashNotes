import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import BookTwoToneIcon from '@material-ui/icons/BookTwoTone';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import HourglassFullTwoToneIcon from '@material-ui/icons/HourglassFullTwoTone';
import PollTwoToneIcon from '@material-ui/icons/PollTwoTone';
import { withRouter } from 'react-router-dom';

const Nav = ({ history, location }) => {
  const [value, setValue] = React.useState();
  const myMains = "/mymains";
  const matchUp = "/matchup"
  const matchHistory = "/matchhistory";
  const glossary = "/glossary";

  useEffect(() => {
    if(location.pathname === myMains) {
      setValue(0);
    }
    if(location.pathname === matchUp) {
      setValue(1);
    }
    if(location.pathname === matchHistory) {
      setValue(2);
    }
    if(location.pathname === glossary) {
      setValue(3);
    }
  }, [location]);

  return (
    <div className="p-body__navigation">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<BookTwoToneIcon />} onClick={() => history.push(myMains)} />
        <BottomNavigationAction icon={<PollTwoToneIcon />} onClick={() => history.push(matchUp)} />
        <BottomNavigationAction icon={<HourglassFullTwoToneIcon />} onClick={() => history.push(matchHistory)} />
        <BottomNavigationAction icon={<ImportContactsTwoToneIcon />} onClick={() => history.push(glossary)} />
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