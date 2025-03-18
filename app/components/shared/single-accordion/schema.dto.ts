import { z } from "zod";

const schema = z.array(
  z.object({
    value: z.string(),
    title: z.string(),
    content: z.string(),
  })
);

export type SingleAccordionSchema = z.infer<typeof schema>;

export default schema;
