// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const data = await fetch('./Data/menu.json')
  res.status(200).json({ data })
}
