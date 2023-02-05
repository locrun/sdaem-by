import { FC } from 'react'
import { useRequest } from '../../../hooks/useRequest'
import { IContacts } from '../../../Interfaces/IContacts'

import classes from "./Contacts.module.scss"

export const Contacts: FC = () => {
  const { data, error } = useRequest("/api/contacts")

  return (
    <div className={classes.contacts}>
      {error ?
        <span className={classes.error}>
          Произошла ошибка на сервере
        </span>
        :
        data.map((item: IContacts, i) => {
          return (
            <div key={i}>
              <span>{item.employer}</span>
              <span>{item.ip}</span>
              <span>{item.address}</span>
              <span>{item.tel + ","}</span>
              <span>{item.mail}</span>
              <span>{item.workTime}</span>
            </div>
          )
        })
      }
    </div>
  )
}
