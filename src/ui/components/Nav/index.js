import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const Nav = () => {
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
        <BottomNavigationAction label="Mains" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Match" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Match" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Glossary" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </div>
  );
};
