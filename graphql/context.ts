import { PrismaClient } from "@prisma/client";
import { NamedTypeNode } from "graphql";
import { unstable_getServerSession } from "next-auth";
import prisma from "../libs/prisma";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export type Context = {
  prisma: PrismaClient;
};

export async function createContext({
  req,
  res,
}: {
  req: any;
  res: any;
}): Promise<Context> {
  console.log(req, res);
  const session = await unstable_getServerSession(req, res, authOptions);
  return {
    prisma,
  };
}
