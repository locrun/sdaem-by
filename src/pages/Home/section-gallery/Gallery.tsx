import { FC } from "react"

import { GalleryAdsCards } from "../../../components/Cards/CalleryAdsCards/GalleryAdsCards"
import { Sidebar } from "../../../components/Sidebar/Sidebar"

import classes from "./Gallery.module.scss"

export const Gallery: FC = () => {

  return (
    <section className={classes.wrapper}>
      <div className={classes.content}>
        <GalleryAdsCards />
        <Sidebar />
      </div >
    </section >
  )
}



