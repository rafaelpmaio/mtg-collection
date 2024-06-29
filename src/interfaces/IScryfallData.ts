export interface IScryfallData {
  id: string,
  images: {
    small?: string,
    png?: string,
    normal?: string,
    large?: string,
    border_crop?: string,
    art_crop?: string
  };
  prices: {
    usd: string
  };
}