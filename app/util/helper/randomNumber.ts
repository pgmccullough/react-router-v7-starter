export const randomNumber = (numberLength: number = 8): string => {
  return Array.from({ length: numberLength }, () =>
    Math.floor(Math.random() * 10),
  ).join('')
}
