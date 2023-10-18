# Инструкция по созданию модального окна в проекте Integral

# Технические детали

Для разработки модального окна выполни следующие шаги:

- В папке src/features создай папку/файлы с названием для будущего
  модального окна. (например AskForQuote)

- Добавь контент и необходимые пропсы, например onClose: () => void

# Исрользование в проекте

- Для использования модалки, нужно ее обернуть в компонент Modal
  пример:



  ```ts
    import { Modal } from 'components/Modal'
    import { useModal } from 'shared/hooks/useModal'
    import { AskForQuote } from 'features'

    const Example: ExamplePage = () => {
      return (
       <Modal>
        <AskforQuoteModal onClose={true}>
       </Modal>
      )
    }
  ```
