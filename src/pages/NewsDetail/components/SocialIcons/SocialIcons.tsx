import { FC } from "react"
import {
  VKShareButton,
  FacebookShareButton,
  ViberShareButton,
  TelegramShareButton,
  WhatsappShareButton
} from "react-share";
import { IconSvg } from "../../../../components/IconSvg/IconSvg";
import classes from "./SocialIcons.module.scss"

export const SocialIcons: FC = () => {
  return (
    <div className={classes.social}>
      <VKShareButton
        url={"http://www.camperstribe.com"}
        className={classes.socialMediaButton}
      >
        <IconSvg id={"#vk"} className={classes.icon} />
      </VKShareButton>
      <FacebookShareButton
        url={"http://www.camperstribe.com"}
        className={classes.socialMediaButton}>
        <IconSvg id={"#fb"} className={classes.icon} />
      </FacebookShareButton>
      <ViberShareButton
        url={"http://www.camperstribe.com"}
        className={classes.socialMediaButton}>
        <IconSvg id={"#viber"} className={classes.icon} />
      </ViberShareButton>
      <TelegramShareButton
        url={"http://www.camperstribe.com"}
        className={classes.socialMediaButton}>
        <IconSvg id={"#telegram"} className={classes.icon} />
      </TelegramShareButton>
      <WhatsappShareButton
        url={"http://www.camperstribe.com"}
        className={classes.socialMediaButton}>
        <IconSvg id={"#whatsapp"} className={classes.icon} />
      </WhatsappShareButton>
    </div>
  )
}