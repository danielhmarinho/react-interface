import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

const Navbar = () => (
  <Tabs>
    <Tab icon={<FontIcon className="material-icons">home</FontIcon>} />
    <Tab icon={<FontIcon className="material-icons">face</FontIcon>} />
    <Tab icon={<FontIcon className="material-icons">computer</FontIcon>} />
    <Tab icon={<FontIcon className="material-icons">info</FontIcon>} />
  </Tabs>
);

export default Navbar;
