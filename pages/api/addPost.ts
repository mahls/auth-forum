import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {

  if (req.method === 'POST') {
    console.log(req.body);
    let name = req.body.name;
    let content = req.body.post
    const postadd = await prisma.Post.create({ data: {name: name, content: content  } }) 
    res.status(200).json('ok')
  } else {
    res.status(400).json("only post");
  }

}
