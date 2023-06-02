import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  const userget = await prisma.Post.findMany()
  console.log(userget);
  res.status(200).json(userget)
}
