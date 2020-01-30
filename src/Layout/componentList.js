import React from 'react';
import {
    Input as InputIcon,
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    Inbox as InboxIcon,
    Mail as MailIcon,
    Dashboard as DashboardIcon,
    Edit as EditIcon,
    NoteAdd as NoteAddIcon,
    FileCopy as FileCopyIcon,
    CloudUpload as CloudUploadIcon,
    Add as AddIcon,
    Link as LinkIcon,
    PermIdentity as UserIcon,
    Close as CloseIcon,
} from '@material-ui/icons';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import AdminDashboard from '../Component/dashboard';
import Home from '../Component/home';

const ComponentList = {
    admin: [
        {
            name: "AdminDashboard",
            icon: <DashboardIcon />,
            link: '/',
            component: AdminDashboard
        },
        {
            name: "Home",
            icon: <CloudUploadIcon />,
            link: '/home',
            component: Home
        },
    ]
}


export default ComponentList;