import { buildSchema, buildProperty } from "@camberi/firecms";
import { BlogEntryPreview } from "./BlogEntryPreview";

export const blogSchema = buildSchema({
  name: "Blog entry",
  views: [
    {
      path: "preview",
      name: "Preview",
      builder: (props) => <BlogEntryPreview {...props} />,
    },
  ],
  properties: {
    name: buildProperty({
      title: "Title",
      validation: { required: true },
      dataType: "string",
    }),
    header_image: buildProperty({
      title: "Header image",
      dataType: "string",
      config: {
        storageMeta: {
          mediaType: "image",
          storagePath: "images",
          acceptedFiles: ["image/*"],
          metadata: {
            cacheControl: "max-age=1000000",
          },
        },
      },
    }),
    category: buildProperty({
      title: "Category",
      validation: { required: true },
      dataType: "string",
    }),
    content: buildProperty({
      title: "Content",
      description:
        "Example of a complex array with multiple properties as children",
      validation: { required: true },
      dataType: "array",
      columnWidth: 400,
      oneOf: {
        typeField: "type", // you can ommit these `typeField` and `valueField` props to use the defaults
        valueField: "value",
        properties: {
          images: buildProperty({
            title: "Images",
            dataType: "array",
            of: buildProperty({
              dataType: "string",
              config: {
                storageMeta: {
                  mediaType: "image",
                  storagePath: "images",
                  acceptedFiles: ["image/*"],
                  metadata: {
                    cacheControl: "max-age=1000000",
                  },
                },
              },
            }),
            description:
              "This fields allows uploading multiple images at once and reordering",
          }),
          text: buildProperty({
            dataType: "string",
            title: "Text",
            config: {
              markdown: true,
            },
          }),
          products: buildProperty({
            title: "Products",
            dataType: "array",
            of: {
              dataType: "reference",
              path: "products", // you need to define a valid collection in this path
            },
          }),
        },
      },
    }),
    status: buildProperty(({ values }) => ({
      title: "Status",
      validation: { required: true },
      dataType: "string",
      columnWidth: 140,
      config: {
        enumValues: {
          published: {
            label: "Published",
            disabled: !values.header_image,
          },
          draft: "Draft",
        },
      },
    })),
  },
  defaultValues: {
    status: "draft",
  },
});
