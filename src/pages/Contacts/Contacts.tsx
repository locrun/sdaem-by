import { FC, useState, useEffect } from "react"
import { useAppSelector } from "../../hooks/redux/redux-hooks"
import { IconSvg } from "../../components/IconSvg/IconSvg"
import { Modal } from "../../components/Modal/Modal";
import { ContactFrom } from "../../components/Form/ContactForm/ContactFrom";
import cn from "classnames"
import classes from './Contacts.module.scss'

interface IContacts {
  address: string,
  tel: string,
  mail: string,
  href: string,
  workTime: string,
  employer: string,
  data: string
}
const messenger = [
  { id: "#viber", href: "https://www.viber.com/ru/" },
  { id: "#telegram", href: "https://telegram.org/" },
  { id: "#whatsapp", href: "https://www.whatsapp.com/?lang=ru" }
]
const socialNetworks = [
  { id: "#instagram", href: "https://www.instagram.com/", classes: false },
  { id: "#vk", href: "https://vk.com/", classes: false },
  { id: "#facebook", href: "https://facebook.com/", classes: true }
]

const modalContent = {
  title: "Ваше письмо отправлено!",
  subtitle: "Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.",
  buttonText: "Закрыть окно"
}
export const Contacts: FC = () => {
  const { isActive } = useAppSelector(state => state.modal)
  const [cont, setCont] = useState<IContacts>()

  useEffect(() => {
    fetch("/api/contacts")
      .then(response => response.json())
      .then(data => setCont(data))
  }, [])

  return (
    <>
      {isActive && <Modal modalContent={modalContent} />}
      <section className={classes.wrapper}>
        <div className="container">
          <div className={classes.content}>
            <div className={classes.contacts}>
              <h3 className={classes.title}>Контакты</h3>
              <p className={classes.subtitle}>
                Если у Вас есть пожелания, предложения или претензии по
                организации работы сайта мы всегда рады услышать Ваше мнение.
              </p>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <div className={classes.iconWrap}>
                    <IconSvg id="#mark" className={classes.icons} />
                  </div>
                  {cont?.address}
                </li>
                <li className={classes.listItem}>
                  <div className={classes.iconWrap}>
                    <IconSvg id="#phone" className={classes.icons} />
                  </div>
                  <a
                    href="tel:+375296214833"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}>
                    <span>{cont?.tel}</span>
                  </a>
                  <div className={classes.messanger}>
                    {messenger.map((icon) => {
                      return (
                        <a
                          href={icon.href}
                          className={classes.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <IconSvg id={icon.id} className={classes.icon}
                          />
                        </a>
                      )
                    })}
                  </div>
                </li>
                <li className={classes.listItem}>
                  <div className={classes.iconWrap}>
                    <IconSvg id="#mail" className={classes.icons} />
                  </div>
                  <a
                    href="mailto:sdaem@sdaem.by"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}>
                    <span>{cont?.mail}</span>
                  </a>
                </li>
                <li className={classes.listItem}>
                  <div className={classes.iconWrap}>
                    <IconSvg id="#clock" className={classes.icons} />
                  </div>
                  {cont?.workTime}
                </li>
              </ul>
              <span className={classes.ownerData}>{cont?.employer}</span>
              <span className={classes.ownerData}>{cont?.data}</span>
              <div className={classes.disclaimer}>
                <IconSvg id="#alert" className={classes.alertIcon} />
                <span>
                  Администрация сайта не владеет информацией
                  о наличии свободных квартир
                </span>
              </div>
            </div>
            <ContactFrom />
            <div className={classes.socialNetworks}>
              {socialNetworks.map((icon) =>
                <a
                  key={icon.id}
                  href={icon.href}
                  className={classes.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconSvg id={icon.id} className={cn(classes.icon, {
                    [classes.facebook]: icon.classes
                  })}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </section >
    </>
  )
}