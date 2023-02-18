import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

type NavContainerTabConfig = {
  name: string;
  content: React.ReactNode;
};

type NavContainerProps = {
  tabs: NavContainerTabConfig[];
};

const NavContainer = ({ tabs }: NavContainerProps) => {
  const [currentTabName, setCurrentTabName] = useState(tabs[0].name);

  const handleTabChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setCurrentTabName(value);
  };

  return (
    <>
      <Tabs
        value={currentTabName}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {tabs.map(({ name }) => (
          <Tab label={name} key={name} value={name} />
        ))}
      </Tabs>
      <hr />
      {tabs.map((tab) => (
        <div
          key={tab.name}
          style={{ display: tab.name === currentTabName ? "block" : "none" }}
        >
          {tab.content}
        </div>
      ))}
    </>
  );
};

export default NavContainer;
