import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCart from './TabCart';

const TabSection = () => {
  const [toys, setToys] = useState([])
  const [active, setActive] = useState("Lion")
  const handleClick = tabName =>{
    setActive(tabName)
  }
  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${active}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [active]);
    return (
      <div className="container mx-auto py-10 text-center">
        <Tabs>
          <TabList>
            <Tab>
              <button
                onClick={() => handleClick("Cat")}
                className={`btn btn-primary btn-xs px-6 ${
                  active == "Cat" ? "underline" : ""
                }`}
              >
                Cat
              </button>
            </Tab>
            <Tab>
              <button
                onClick={() => handleClick("Lion")}
                className={`btn btn-primary btn-xs px-6 ${
                  active == "Lion" ? "underline" : ""
                }`}
              >
                Lion
              </button>
            </Tab>
            <Tab>
              <button
                onClick={() => handleClick("Teddy")}
                className={`btn btn-primary btn-xs px-6 ${
                  active == "Teddy" ? "underline" : ""
                }`}
              >
                Teddy
              </button>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid gap-4 grid-cols-3">
              {toys.slice(0, 3).map((toy) => (
                <TabCart key={toy._id} toy={toy}></TabCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-4 grid-cols-3">
              {toys.slice(0, 3).map((toy) => (
                <TabCart key={toy._id} toy={toy}></TabCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-4 grid-cols-3">
              {toys.slice(0, 3).map((toy) => (
                <TabCart key={toy._id} toy={toy}></TabCart>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default TabSection;