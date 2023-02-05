import { FC } from "react"
import { useAppSelector } from "../../hooks/redux-hooks";
import { Link } from "react-router-dom"
import { RegistrationForm } from "../../components/Form/RegistrationForm/RegistrationForm";
import { Modal } from "../../components/Modal/Modal";
import classes from "./Registration.module.scss"
import { ModalContent } from "../../components/Modal/ModalContent";

const modalContent = {
  title: "Подтвердите регистрацию",
  subtitle: "Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.",
  buttonText: "Понятно"
}

export const Registration: FC = () => {
  const { isActive } = useAppSelector(state => state.modal)

  return (
    <>

      <section className={classes.wrapper}>
        {isActive ?
          <Modal>
            <ModalContent content={modalContent} />
          </Modal> :
          <div className="container">
            <div className={classes.content}>
              <h3 className={classes.title}>Регистрация</h3>
              <div className={classes.flex}>
                <RegistrationForm />
                <div className={classes.undertakes}>
                  <h3 className={classes.underTitle}>Пользователь обязуется:</h3>
                  <ul className={classes.list}>
                    <li className={classes.text}>
                      предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта; </li>
                    <li className={classes.text}>
                      добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.
                    </li>
                    <li className={classes.isAccount}>
                      <span >Уже есть аккаунт?</span>
                      <Link to="/login" className={classes.link}>Войдите</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        }
      </section>
    </>
  )
}