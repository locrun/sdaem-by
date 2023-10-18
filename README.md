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
export const endpoints = {
  ...,
  offers: {
    list: ...,
    one: ...,
    companyOffers: (companyId: number) =>
      `/marketplace/companies/${companyId}/offers/`,
    grade_offers: (id: number) => `/marketplace/products/${id}/offers/`,
  },
  ...,
};
```

- Вот так выглядит пример модалки, которую можно использовать

```ts
<Modal
  isOpen={askForQuoteCommon.isOpen}
  onClose={askForQuoteCommon.close}
>
 <AskForQuoteCommon onClose={askForQuoteCommon.close} />
</Modal>

```

- Можешь тестировать
