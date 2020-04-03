import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import EventIcon from '@material-ui/icons/Event';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
const pages = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon />
  },
  {
    title: 'Members',
    href: '/tables',
    icon: <PersonOutlineIcon />
  },
  {
    title: 'Events',
    href: '/typography',
    icon: <EventIcon />
  },
  {
    title: 'Add Event',
    href: '/icons',
    icon: <NoteAddIcon />
  }
];

export default pages;
