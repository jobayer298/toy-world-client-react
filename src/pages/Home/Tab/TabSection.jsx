import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabSection = () => {
    return (
      <div className='container mx-auto py-10 text-center'>
        <Tabs>
          <TabList>
            <Tab>Cat</Tab>
            <Tab>Lion</Tab>
            <Tab>Teddy</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default TabSection;