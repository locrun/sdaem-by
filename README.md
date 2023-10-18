
# Инструкция по созданию модального окна в проекте Integral

# Технические детали

Для разработки модального окна выполни следующие шаги:

- В папке src/features создай папку/файлы с названием для будущего
  модального окна. (например AskForQuote)

- Добавь контент и необходимые пропсы, например onClose: () => void

# Исрользование в проекте

- Для использования модалки, нужно ее обернуть в компонент Modal
  пример:
  ```
 <Modal>
   <AskforQuoteModal onClose={true}>
 </Modal>
 
  ```

  ```
  <Modal>
  <AskforQuoteModal onClose={true}>
  </Modal>

  ```

- Вот так выглядит пример модалки, которую можно использовать

```
<Modal
  isOpen={askForQuoteCommon.isOpen}
  onClose={askForQuoteCommon.close}
>
        <AskForQuoteCommon onClose={askForQuoteCommon.close} />
</Modal>

```

- Можешь тестировать
