
import { FC } from 'react'

import { ProfileInfo } from '../../../components/UserAccount/ProfileInfo/ProfileInfo'

import classes from "./UserAccount.module.scss"

export const UserAccount: FC = () => {

  return (
    <section className={classes.wrapper}>
      <div className="container">
        <div className={classes.content}>
          <ProfileInfo />
          <h1>UserAccount</h1>
        </div>
      </div>
    </section>
  )
}
