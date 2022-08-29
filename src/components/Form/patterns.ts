export const email = {
  value:
    /^[_a-z0-9-+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,
  message: "Ошибка ввода",
};
export const login = {
  value: 4,
  message: "Ошибка ввода",
};
export const name = {
  value: /^[a-zA-Zа-яёА-ЯЁ]{3,15}$/,
  message: "",
};
export const password = {
  value: 5,
  message: "Ошибка ввода",
};
export const confirm = {
  value: 5,
  message: "Ошибка ввода",
};
export const message = {
  value: /^[0-9a-zA-Zа-яёА-ЯЁ ,.]{3,1000}$/,
  message: "",
};
