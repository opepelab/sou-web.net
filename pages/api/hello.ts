// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;
  res.json({
    item: [
      {
        id: 1,
        title: '<strong>John</strong> \n\n Doe',
      },
    ],
  });
};
