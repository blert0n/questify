import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

interface Request {
  req: NextApiRequest;
  res: NextApiResponse;
}

export interface Context {
  prisma: PrismaClient;
  req: NextApiRequest;
  res: NextApiResponse;
  select: any;
  token?: string;
}

export function createContext({ req, res }: Request): Context {
  return {
    req,
    res,
    prisma,
    select: {},
  };
}
