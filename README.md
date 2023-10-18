# Инструкция по созданию модального окна в проекте Integral

# Технические детали

Для разработки модального окна выполни следующие шаги:

- В папке src/features создай папку/файлы с названием для будущего
  модального окна. (например AskForQuote)

- Добавь контент и необходимые пропсы, например onClose: () => void

# Исрользование в проекте

- Для использования модалки, нужно ее обернуть в компонент Modal,
  а также использовать специальный хук который имеет специальные методы
  которые нужны для открытия и закрытия модалки.
  Вот пример:

  ```ts
    import { Modal } from 'components/Modal'
    import { useModal } from 'shared/hooks/useModal'
    import { AskForQuote } from 'features'

    const Example = () => {
    const askForQuote = useModal()

      return (
      <Modal
        isOpen={askForQuote.isOpen}
        onClose={askForQuote.close}
      >
        <AskForQuote onClose={askForQuote.close} />
      </Modal>
      <p>
        <button onClick={askForQuote.open}>askForQuote</button>
      </p>
      )
    }
  ```
- Можешь тестировать
