import { FC } from "react"
import { Button } from "../../../components/ui-kit/Button/Button"
import client from "../../../assets/images/client.svg"
import raise from "../../../assets/images/raise.svg"

import cn from "classnames"
import classes from "./Presentation.module.scss"
import { OpenMapButton } from "../../../components/OpenMapButton/OpenMapButton"

const data = [
  {
    id: 0,
    title: "Начните привлекать клиентов бесплатно!", subtitle: { paragraph: <div>Пройдя простую регистрацию на сайте  у Вас появится личный кабинет, в котором возможно <strong>бесплатно создавать и публиковать </strong> объявления на сайте</div> },
    btnName: "+ Разместить объявление", imgPath: client, styleButton: classes.placeBtn, className: classes.place
  },
  {
    id: 1,
    title: "Поднимайте объявления", subtitle: { paragraph: <div>Вы в любое время можете <strong>поднимать</strong> объявления <strong> вверх первой страницы </strong>каталога, они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.</div> },
    btnName: "Узнать стоимость услуги", imgPath: raise, styleButton: classes.priceBtn, className: classes.price
  },
  {
    id: 2,
    title: "Приоритет Gold", subtitle: {
      paragraph:
        <div>Приоритетное размещение <strong>Gold</strong> позволяет <strong>закрепить ваше объявление</strong> в верхней части каталога!
          <p>Gold объявления <strong>перемещаются</strong><br />
            <strong> каждые 5 мин </strong>на 1 позицию, что делает размещение одинаковым для всех.</p></div>
    }
    , btnName: "Еще о тарифе Gold",
    styleButton: classes.goldBtn, className: classes.gold
  }
]
export const Presentation: FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.container)}>
        <div className={classes.searchBlock}>
          <h3 className={classes.title}>Поиск квартир по карте</h3>
          <p className={classes.subtitle}>Ищите квартиры на сутки в центре города, возле парка или в живописном районе</p>
          <OpenMapButton />
        </div>
        <div className={classes.presentationsBlock}>
          {
            data.map((card) =>
              <div key={card.id} className={cn(classes.card, card.className)} >
                <div className={classes.flex}>
                  {card.imgPath &&
                    <div className={classes.cardImg}>
                      <img src={card.imgPath} alt="картинка иконки" />
                    </div>
                  }
                  <h4 className={classes.cardTitle}>{card.title}</h4>
                </div>
                <div className={classes.cardSubtitle}>{card.subtitle.paragraph}</div>
                <Button className={card.styleButton} >
                  {card.btnName}
                </Button>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}
