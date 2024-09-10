import type { IProduct } from "./types"
export const getDummyProducts = async (): Promise<IProduct[]> => {
  const products: IProduct[] = [
    {
      id: 101,
      title: "Botas 1",
      price: 22,
      rate: 4,
      picture:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/369579/20/sv01/fnd/PHL/fmt/png/RS-X-Reinvention-Trainers",
    },
    {
      id: 102,
      title: "Botas 2",
      price: 182,
      rate: 5,
      picture: "https://i.ebayimg.com/images/g/jbsAAOSwn71kz8M3/s-l1200.jpg",
    },
    {
      id: 103,
      title: "Botas 3",
      price: 182,
      rate: 5,
      picture: "https://i.ebayimg.com/images/g/EEEAAOSwFaRkX6cU/s-l400.png",
    },
    {
      id: 104,
      title: "Botas 4",
      price: 20,
      rate: 3,
      picture:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/393771/08/sv01/fnd/EEA/fmt/png/RS-X-Efekt-Lux-Women's-Sneakers",
    },
  ]
  return products
}
