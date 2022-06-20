import inst from "../../assets/images/instagram.svg"
import vk from "../../assets/images/vk.svg"
import fb from "../../assets/images/facebook.svg"
import classes from "./Social.module.scss"

const arr = [
  { src: inst, href: "https://www.instagram.com/" },
  { src: vk, href: "https://vk.com/" },
  { src: fb, href: "https://facebook.com/" }]

export const Social = () => {
  return (
    <div className={classes.social}>
      <p className={classes.title}>Мы в соцсетях</p>
      <div className={classes.socialIcons}>
        {arr.map((icon) =>
          <a key={icon.src} href={icon.href}
            target="_blank"
            rel="noreferrer"
            className={classes.icon}
          >
            <img src={icon.src}
              alt="социальная иконка" />
          </a>
        )}
      </div>
    </div>
  )
}