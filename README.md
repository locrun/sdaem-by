## Написание API для получения объекта с бека

Например, нужно получить все офферы конкретной компании. Это можно сделать по запросу `https://back.integral-news.com/sprint4/marketplace/companies/8/offers/`.

Создадим функцию `getCompanyOffers()`, которая отправит такой GET запрос к серверу и вернет нужный нам объект.

```ts
//src/shared/api/routes/offers.ts
export const getCompanyOffers = (
  companyId: number
): AxiosPromise<AxiosPaginatedResponse<Offer>> => {
  return api.get(endpoints.offers.companyOffers(companyId));
};
```

Функция использует объект `api` из `src/shared/api/index.ts`, а в объекте `endpoints.offers.companyOffers(companyId)` определим путь к конечной точке.

В файле для эндпоинтов (конечных точек) создаем ендпоинт для функции `getCompanyOffers`.

```ts
// src/shared/api/endpoints.ts
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

Пример использования функции `getCompanyOffers()` можно увидеть в файле `src/pages/TraderPage/TraderPage.tsx`:

```ts
//src/pages/TraderPage/TraderPage.tsx
...
useEffect(() => {
  const loadTrader = async (id: number) => {
    ...
    try {
      const { data: offers } = await getCompanyOffers(id)
      setOffers(offers.results)
      ...
    } catch (error) {
      console.error(error)
    }
  }
  loadTrader(id)
}, [id])
...
```
