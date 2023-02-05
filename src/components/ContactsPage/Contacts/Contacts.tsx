import { FC } from 'react'

import { Title } from '../Title/Title'
import { Messengers } from '../Messengers/Messengers'
import { Disclaimer } from '../Disclaimer/Disclaimer'
import { IconSvg } from '../../IconSvg/IconSvg'

import { useRequest } from '../../../hooks/useRequest'
import { IContacts } from '../../../Interfaces/IContacts'

import classes from "./Contacts.module.scss"

export const Contacts: FC = () => {
  const { data } = useRequest("/api/contacts")

  return (
    <div className={classes.contacts}>
      <Title />
      <ul className={classes.list}>
        {data.map((item: IContacts) => {
          return (
            <>
              <li className={classes.listItem}>
                <div className={classes.iconWrap}>
                  <IconSvg id="#mark" className={classes.decorIcon} />
                </div>
                {item.address}
              </li>
              <li className={classes.listItem}>
                <div className={classes.iconWrap}>
                  <IconSvg id="#phone" className={classes.decorIcon} />
                </div>
                <a
                  href="tel:+375296214833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}>
                  <span>{item.tel}</span>
                </a>
                <Messengers />
              </li>
              <li className={classes.listItem}>
                <div className={classes.iconWrap}>
                  <IconSvg id="#mail" className={classes.decorIcon} />
                </div>
                <a
                  href="mailto:sdaem@sdaem.by"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}>
                  <span>{item.mail}</span>
                </a>
              </li>
              <li className={classes.listItem}>
                <div className={classes.iconWrap}>
                  <IconSvg id="#clock" className={classes.decorIcon} />
                </div>
                {item.workTime}
              </li>
              <li className={classes.group}>
                <div>{item.employer}</div>
                <div>{item.ip}</div>
              </li>
            </>
          )
        })}
      </ul>
      <Disclaimer />
    </div>
  )
}
