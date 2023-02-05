import { FC } from "react"
import { useAppSelector } from "../../hooks/redux-hooks"

import { Modal } from "../../components/Modal/Modal";
import { Contacts as ContactsComponent } from "../../components/ContactsPage/Contacts/Contacts";
import { Social } from "../../components/ContactsPage/Social/Social"
import { ContactForm } from "../../components/Form/ContactForm/ContactForm";

import classes from './Contacts.module.scss'
import { ModalContent } from "../../components/Modal/ModalContent";

const modalContent = {
  title: "Ваше письмо отправлено!",
  subtitle: "Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.",
  buttonText: "Закрыть окно"
}
export const Contacts: FC = () => {
  const { isActive } = useAppSelector(state => state.modal)

  return (
    <>
      {isActive &&
        <Modal>
          <ModalContent content={modalContent} />
        </Modal>
      }
      <section className={classes.wrapper}>
        <div className="container">
          <div className={classes.content}>
            <ContactsComponent />
            <ContactForm />
            <Social />
          </div>
        </div>
      </section >
    </>
  )
}