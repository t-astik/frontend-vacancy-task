export interface IToken {
  id: number,
  name: string,
  symbol: string,
  address: string
  logoURI: string,
  categories: string[],
  description: string,
  price: number,
  priceChange: {
      hours24: number,
      days7: number,
      days365: number,
  },
  volume: number,
  volumeChangePercentage: number,
  tvl: number,
  tvlChangePercentage: number,
  users: number
}
