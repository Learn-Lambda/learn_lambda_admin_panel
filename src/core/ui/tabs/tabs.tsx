import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const CoreTabs: React.FC<{
  tabs: { title: string; content: React.ReactNode }[];
}> = ({ tabs }) => (
  <Tabs>
    <TabList>
      {tabs.map((el) => (
        <Tab>{el.title}</Tab>
      ))}
    </TabList>
    {tabs.map((el) => (
      <TabPanel>{el.content}</TabPanel>
    ))}
  </Tabs>
);
