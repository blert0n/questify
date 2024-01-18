import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";
import { getAuth } from "@clerk/nextjs/server";

interface Request {
  req: NextApiRequest;
  res: NextApiResponse;
}

export interface Context {
  prisma: PrismaClient;
  req: NextApiRequest;
  res: NextApiResponse;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  select: any;
  token?: string;
  userId: string | null;
}

export function createContext({ req, res }: Request): Context {
  const user = getAuth(req);
  return {
    req,
    res,
    prisma,
    select: {},
    userId: user.userId,
  };
}
