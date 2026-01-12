import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

// Configuration object
const project = defineCollection({
    loader: file('src/data/projects.json'), // loader is looking for one file
    schema: z.object({ // schema definition: working definition for what data inside json is gonna look like - query this data with APIs
        title: z.string(),
        description: z.string().optional(),
        image: z.string(),
        slug: z.string(),
        githubURL: z.string(),
        liveSiteURL: z.string()
    }),
});

const blog = defineCollection({
    loader: glob({pattern: "**/*.md", base: "src/data/blog"}),
    schema: z.object({
        title: z.string(),
        description: z.string().max(200), // will be 200 chars total - cut it down
        image: z.string(),
        date: z.string().date(),
        tags: z.array(z.string()),
    }),
});

export const collections = {project, blog}; // export so they're accessible to use
