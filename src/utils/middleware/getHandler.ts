import nextConnect from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import type {NextConnect} from 'next-connect';
import { getCustomError } from './getCustomError';
import { getStatusCode } from './getStatusCode';
import { BadRequestError } from './errorTypes';

export function getHandler(): NextConnect<NextApiRequest, NextApiResponse> {
  return nextConnect<NextApiRequest, NextApiResponse>({
    onError: (error: Error, req, res) => {
      console.error(getCustomError(error, req));
      const statusCode = getStatusCode(error);
      res.status(statusCode).send(new BadRequestError(error.message));
    },
    onNoMatch: (req, res) => {
      res.status(405).send(`Method ${req.method} Not Allowed`)
    },
  });
}