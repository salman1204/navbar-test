import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { IoPricetags } from "react-icons/io5";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'Users',
    path: '/users',
    icon: <FaIcons.FaUserFriends />,
  },
  {
    title: 'Package',
    // path: '/package',
    icon: <IoPricetags />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Package Subscriber',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Create package',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Active Packages',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Question',
    path: '/question-bank',
    icon: <IoIcons.IoIosPaper />
  },
];