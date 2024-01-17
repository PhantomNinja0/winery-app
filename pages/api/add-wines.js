import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const wineName = 'Klawer Hanepoot';
    const wineYear = 2020;
    const wineType = 'Desert';
    const varietal = "Muscat d'Alexandrie";
    const rating = 3.4;
    const consumed = true;
    const dateConsumed = '2023/1/1';
    const wineID = 1;

    if (!wineName || !wineYear || !wineType || !varietal || !rating || !wineID) throw new Error('One or more fields required');
    await sql`INSERT INTO Wines (Name, Year, Type, Varietal, Rating, ID, Consumed, Date_consumed) VALUES (${wineName}, ${wineYear}, ${wineType}, ${varietal}, ${rating}, ${wineID}, ${consumed}, ${dateConsumed} );`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const wines = await sql`SELECT * FROM Wines;`;
  return response.status(200).json({ wines });
}