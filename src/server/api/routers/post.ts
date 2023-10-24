import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
        authorId: z.number().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          title: input.title,
          content: input.content,
          authorId: input.authorId,
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany({});
  }),
});

// export const postRouter = createTRPCRouter({
//   create: publicProcedure
//     .input(
//       z.object({
//         title: z.string().min(1),
//         content: z.string().min(1),
//         authorId: z.number().min(1),
//       }),
//     )
//     .mutation(async ({ ctx, input }) => {
//       return ctx.db.post.create({
//         data: {
//           title: input.title,
//           content: input.content,
//           authorId: input.authorId,
//         },
//       });
//     }),
//   getAll: publicProcedure.query(({ ctx }) => {
//     return ctx.db.post.findMany({
//       orderBy: { createdAt: "desc" },
//     });
//   }),
// });
