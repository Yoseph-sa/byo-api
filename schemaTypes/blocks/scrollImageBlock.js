// schemas/scrollImageBlock.js
export default {
    name: "scrollImageBlock",
    title: "Scroll Image Block",
    type: "object",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image", options: { hotspot: true } }],
            options: {
                layout: "grid",
            },
        },
    ],
}
