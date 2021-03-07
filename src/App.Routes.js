import React from "react";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import PieChartOutlined from "@material-ui/icons/PieChartOutlined";
import MailIcon from "@material-ui/icons/Mail";

import { AutoGraphOutlined, TextSnippetOutlined } from "@material-ui/icons";

const routes = [
  {
    name: "HomePage",
    path: "/homepage",
    // component: HomePage,
    component: () => <h2>Home</h2>,
    icon: () => <HomeIcon />,
    type: "sub-header"
  },
  {
    name: "Segments",
    path: "/segments",
    // component: Segments,
    component: () => <h2>Home2</h2>,
    icon: () => <PieChartOutlined />,
    type: "sub-item"
  },
  {
    name: "ForeCast",
    path: "/forecast",
    // component: ForeCast,
    component: () => <h2>Home3</h2>,
    icon: () => <AutoGraphOutlined />,
    type: "sub-item"
  },
  {
    name: "Scenarios",
    path: "/scenarios",
    // component: Scenarios,
    component: () => <h2>Home4</h2>,
    icon: () => <MailIcon />,
    type: "sub-item"
  },
  {
    name: "Pipeline",
    path: "/pipeline",
    // component: Pipeline,
    component: () => <h2>Home5</h2>,
    icon: () => <MailIcon />,
    type: "sub-header"
  },
  {
    name: "Sales Team",
    path: "/sales-team",
    // component: SalesTeam,
    component: () => <h2>Home6</h2>,
    icon: () => <MailIcon />,
    type: "sub-item"
  },
  {
    name: "Accounts",
    path: "/accounts",
    // component: Accounts,
    component: () => <h2>Home7</h2>,
    icon: () => <MailIcon />,
    type: "sub-item"
  },
  {
    name: "CS Team",
    path: "/cs-team",
    // component: CSTeam,
    component: () => <h2>Home8</h2>,
    icon: () => <MailIcon />,
    type: "sub-item"
  }
];

export default routes;
