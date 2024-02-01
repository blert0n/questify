import { extendType, inputObjectType, list, nonNull } from "nexus";
import { Context } from "../context";

const answerInput = inputObjectType({
  name: "AnswerInput",
  definition(t) {
    t.nonNull.string("formItemId"), t.nonNull.string("value");
  },
});

export const submitForm = extendType({
  type: "Mutation",
  definition(t) {
    t.list.field("submitForm", {
      type: "Answer",
      args: {
        answers: nonNull(list(nonNull(answerInput))),
      },
      resolve: async (_, args, context: Context) => {
        return await Promise.all(
          args.answers.map(
            async (answer) =>
              await context.prisma.answer.create({
                data: {
                  formItemId: answer?.formItemId,
                  value: answer?.value,
                },
              })
          )
        );
      },
    });
  },
});
