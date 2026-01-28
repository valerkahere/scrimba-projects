import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
        coverImage: fields.image({
          label: "Cover Image",
          directory: "src/content/posts",
        }), // Regardless of where the posts entried are created, the coverImage image will be generated in src/content/posts/{post-slug}
      },
    }),
  },
});
