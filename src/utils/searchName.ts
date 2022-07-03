export const searchName = (text: string, data: string[]) => (
 data.filter(({ name }: string | any) => name.includes(text))
)
