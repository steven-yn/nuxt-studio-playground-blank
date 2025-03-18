import { defineCollection, z } from "@nuxt/content";
import { asSeoCollection } from "@nuxtjs/seo/content";

const commonContentSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
});

const commonBlogSchema = z.object({
  draft: z.boolean().default(false),
  category: z.enum(["Alps", "Himalaya", "Pyrenees"]).optional(),
  date: z.date(),
  image: z.object({
    src: z.string().editor({ input: "media" }),
    alt: z.string(),
  }),
  slug: z.string().editor({ hidden: true }),
  icon: z.string().optional().editor({ input: "icon" }),
  authors: z.array(
    z.object({
      slug: z.string(),
      username: z.string(),
      name: z.string(),
      to: z.string(),
      avatar: z.object({
        src: z.string(),
        alt: z.string(),
      }),
    })
  ),
});

export const collections = {
  content: defineCollection(
    asSeoCollection({
      type: "page",
      source: {
        include: "**/*.md",
        exclude: ["blog/**"],
        prefix: "/",
      },
      schema: commonContentSchema,
    })
  ),
  blog: defineCollection(
    asSeoCollection({
      type: "page",
      source: {
        include: "blog/**/*.md",
        prefix: "/blog",
      },
      schema: commonBlogSchema,
    })
  ),
};
