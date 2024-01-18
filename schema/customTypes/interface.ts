import { objectType } from "nexus";

export const UploadResponse = objectType({
  name: "UploadResponse",
  definition(t) {
    t.boolean("success", { description: "Success flag" });
    t.string("message", { description: "Error mesage, or uploaded file url" });
  },
});
