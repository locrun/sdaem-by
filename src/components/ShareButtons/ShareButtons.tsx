import { FC } from "react"
import {
  VKShareButton,
  FacebookShareButton,
  ViberShareButton,
  TelegramShareButton,
  WhatsappShareButton,

} from "react-share";

import { IconSvg } from "../IconSvg/IconSvg";
import cn from "classnames"
import classes from "./ShareButtons.module.scss"

interface IPropsShareButtons {
  title?: string
  url: string
  image?: string,
  newsDetailPage?: boolean,
  catalogPage?: boolean
}
export const ShareButtons: FC<IPropsShareButtons> = ({
  url, title, image, catalogPage, newsDetailPage
}) => {

  return (
    <div className={classes.share}>
      <span>Поделиться</span>
      <div className={classes.social}>
        <VKShareButton
          url={url}
          title={title}
          image={image}
          className={cn({
            [classes.catalogPage]: catalogPage,
            [classes.newsDetailPage]: newsDetailPage,
          })}
        >
          <IconSvg id={"#vk"} className={classes.icon} />
        </VKShareButton>
        <FacebookShareButton
          url={url}
          title={title}
          hashtag="#daily rent..."
          className={cn({
            [classes.catalogPage]: catalogPage,
            [classes.newsDetailPage]: newsDetailPage,
          })}
        >
          <IconSvg id={"#fb"} className={classes.icon} />
        </FacebookShareButton>
        <ViberShareButton
          url={url}
          title={title}
          className={cn({
            [classes.catalogPage]: catalogPage,
            [classes.newsDetailPage]: newsDetailPage,
          })}
        >
          <IconSvg id={"#viber"} className={classes.icon} />
        </ViberShareButton>
        <TelegramShareButton
          url={url}
          title={title}
          className={cn({
            [classes.catalogPage]: catalogPage,
            [classes.newsDetailPage]: newsDetailPage,
          })}
        >
          <IconSvg id={"#telegram"} className={classes.icon} />
        </TelegramShareButton>
        <WhatsappShareButton
          url={url}
          title={title}
          className={cn({
            [classes.catalogPage]: catalogPage,
            [classes.newsDetailPage]: newsDetailPage,
          })}
        >
          <IconSvg id={"#whatsapp"} className={classes.icon} />
        </WhatsappShareButton>
      </div >
    </div >
  )
}