import { FC } from "react"

import {
  VKShareButton,
  FacebookShareButton,
  ViberShareButton,
  TelegramShareButton,
  WhatsappShareButton,

} from "react-share";


import { IconSvg } from "../IconSvg/IconSvg";
import classes from "./ShareButtons.module.scss"

interface IPropsShareButtons {
  title?: string
  url: string
  image?: string
}

export const ShareButtons: FC<IPropsShareButtons> = ({
  url,
  title,
  image
}) => {

  return (
    <div className={classes.share}>
      <span>Поделиться</span>
      <div className={classes.social}>
        <VKShareButton
          url={url}
          title={title}
          image={image}
          className={classes.socialMediaButton}
        >
          <IconSvg id={"#vk"} className={classes.icon} />
        </VKShareButton>
        <FacebookShareButton
          url={url}
          title={title}
          hashtag="#daily rent..."
          className={classes.socialMediaButton}
        >
          <IconSvg id={"#fb"} className={classes.icon} />
        </FacebookShareButton>
        <ViberShareButton
          url={url}
          title={title}
          className={classes.socialMediaButton}>
          <IconSvg id={"#viber"} className={classes.icon} />
        </ViberShareButton>
        <TelegramShareButton
          url={url}
          title={title}
          className={classes.socialMediaButton}
        >
          <IconSvg id={"#telegram"} className={classes.icon} />
        </TelegramShareButton>
        <WhatsappShareButton
          url={url}
          title={title}
          className={classes.socialMediaButton}
        >
          <IconSvg id={"#whatsapp"} className={classes.icon} />
        </WhatsappShareButton>
      </div >
    </div >
  )
}