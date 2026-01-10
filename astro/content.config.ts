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
    })
});