import { FC, useState } from "react"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Filter as FilterUI } from "../../../components/FilterUI/Filter/Filter"
import { useFilter } from "../../../hooks/useFilter"

import cn from "classnames"
import classes from "./Filter.module.scss"


const tabs = [
  { id: 0, label: "Квартиры на сутки" },
  { id: 1, label: "Коттеджы и усадьбы" },
  { id: 2, label: "Бани и сауны" },
  { id: 3, label: "Авто напрокат" }
]
const tabPanel = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 }
]
export const Filter: FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { filterFunction } = useFilter()

  const onHandleSubmit = () => {
    filterFunction()
  }
  return (
    <section className={cn(classes.inner, classes.container)}>
      <div className={classes.content}>
        <h1 className={classes.heading}>Sdaem.by - у нас живут <span>ваши объявления</span></h1>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={classes.tabList}>
            {tabs.map((tab) => {
              return (
                <Tab
                  key={tab.id}
                  className={cn(classes.tabLabel, {
                    [classes.selected]: tab.id === tabIndex
                  })}>
                  {tab.label}
                </Tab>
              )
            })}
          </TabList>
          {tabPanel.map((panel) => {
            return (
              <TabPanel
                key={panel.id}
              >
                <FilterUI onSubmitForm={onHandleSubmit} />
              </TabPanel>
            )
          })}
        </Tabs>
      </div>
    </section >
  )
}

