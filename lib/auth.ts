import { betterAuth } from "better-auth";
import { APIError, createAuthMiddleware } from "better-auth/api";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma.js";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  user: {
    additionalFields: {
      approved: {
        type: "boolean",
        defaultValue: false,
        input: false,
      },
    },
  },
  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      if (ctx.path !== "/sign-in/email") return;

      const body = ctx.body as { email?: string } | undefined;
      const email = body?.email;
      if (typeof email !== "string" || email.length === 0) return;

      const user = await prisma.user.findUnique({
        where: { email },
        select: { approved: true },
      });

      if (user && user.approved !== true) {
        throw new APIError("FORBIDDEN", {
          message: "Dein Account wurde noch nicht freigegeben.",
        });
      }
    }),
  },
  secret: process.env.BETTER_AUTH_SECRET,
  appUrl: process.env.BETTER_AUTH_URL || "http://localhost:3000",
});
