import { extendType, inputObjectType, list, nonNull, stringArg } from "nexus";
import { Context } from "../context";
import { v4 as uuidv4 } from "uuid";

const answerInput = inputObjectType({
  name: "AnswerInput",
  definition(t) {
    t.nonNull.string("formItemId"), t.nonNull.string("value");
  },
});

export const submitForm = extendType({
  type: "Mutation",
  definition(t) {
    t.field("submitForm", {
      type: "Form",
      args: {
        formId: nonNull(stringArg()),
        answers: nonNull(list(nonNull(answerInput))),
      },
      resolve: async (_, args, context: Context) => {
        const responseId = uuidv4();
        await Promise.all(
          args.answers.map(
            async (answer) =>
              await context.prisma.answer.create({
                data: {
                  formItemId: answer?.formItemId,
                  responseId,
                  value: answer?.value,
                },
              })
          )
        );
        return await context.prisma.form.update({
          where: {
            id: args.formId,
          },
          data: {
            responses: {
              increment: 1,
            },
          },
        });
      },
    });
  },
});
