// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
     name: string,
     surname: string,
}

export default function handler(
     req: NextApiRequest,
     res: NextApiResponse<Data>
) {
     if (req.method === 'POST') {
          if (req.body.name && req.body.surname) {
               res.status(200).json({ name: req.body.name, surname: req.body.surname })
          } else {
               res.redirect('/api/error')
          }
     } else {
          res.redirect('/api/error')
     }
}
