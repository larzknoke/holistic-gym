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

      const email = ctx.body?.email;
      if (typeof email !== "string" || email.length === 0) return;

      const rows = (await prisma.$queryRaw`
        SELECT "approved"
        FROM "user"
        WHERE "email" = ${email}
        LIMIT 1
      `) as Array<{ approved: boolean | null }>;

      if (rows.length > 0 && rows[0].approved !== true) {
        throw new APIError("FORBIDDEN", {
          message: "Dein Account wurde noch nicht freigegeben.",
        });
      }
    }),
  },
  secret: process.env.BETTER_AUTH_SECRET,
  appUrl: process.env.BETTER_AUTH_URL || "http://localhost:3000",
});
