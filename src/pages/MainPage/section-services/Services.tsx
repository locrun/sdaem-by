import { FC } from "react"
import { Button } from "../../../components/Button/Button"
import { IconSvg } from "../../../components/IconSvg/IconSvg"
import client from "../../../assets/images/client.svg"
import raise from "../../../assets/images/raise.svg"
import cn from "classnames"
import classes from "./Services.module.scss"

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
export const Services: FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className={cn("container", classes.cont)}>
        <div className={classes.titleWrapper}>
          <h3 className={classes.title}>Поиск квартир по карте</h3>
          <p className={classes.subtitle}>Ищите квартиры на сутки в центре города, возле парка или в живописном районе</p>
          <Button title={"Открыть карту"} className={classes.openMapBtn}>
            <IconSvg id={"#mark"} className={classes.mark} />
          </Button>
        </div>
      </div>
      <div className={classes.servicesBlock}>
        {
          data.map((serv) =>
            <div key={serv.id} className={cn(classes.servItem, serv.className)} >
              <div className={classes.itemTitleWrapper}>
                {serv.imgPath &&
                  <div className={classes.itemImageWrapper}>
                    <img src={serv.imgPath} alt="картинка иконки" />
                  </div>
                }
                <h4 className={classes.itemTitle}>{serv.title}</h4>
              </div>
              <div className={classes.itemSubtitle}>{serv.subtitle.paragraph}</div>
              <Button title={serv.btnName} className={serv.styleButton} />
            </div>
          )
        }
      </div>
    </section>
  )
}
