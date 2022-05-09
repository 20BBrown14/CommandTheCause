import type { NextApiRequest, NextApiResponse } from 'next';

export type CustomError = {
  error: {
    name: Error['name'],
    message: Error['message'],
    stack: Error['stack'],
  };
  handler: string | undefined;
  method: string | undefined;
  body: any;
  headers: Record<string, string | string[] | undefined>;
};

export const getCustomError = (
  error: Error,
  req: NextApiRequest,
): CustomError => {
  return {
    error: {
      name: error.name,
      message: error.message,
      stack: error.stack,
    },
    handler: req.url,
    method: req.method,
    body: req.body,
    headers: {
      ...req.headers,
      cookie: '**SENSITIVE INFORMATION**',
      authorization: '**SENSITIVE INFORMATION**',
    },
  };
};