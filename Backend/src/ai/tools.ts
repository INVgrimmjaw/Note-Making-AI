export const noteTools = [
  {
    name: "create_note",
    description: "Create a new note",
    parameters: {
      type: "object",
      properties: {
        content: { type: "string" },
      },
      required: ["content"],
    },
  },

  {
    name: "search_note",
    description: "Search notes by content to find note IDs",
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Text to search the notes",
        },
      },
      required: ["query"],
    },
  },

  {
    name: "search_completed_note",
    description: "Search notes that are marked as completed true",
    parameters: {},
  },

  {
    name: "search_incompleted_note",
    description: "Search notes that are not marked as completed false",
    parameters: {},
  },

  {
    name: "update_note",
    description: "Update an existing note. Use query if Note ID is not known",
    parameters: {
      type: "object",
      properties: {
        noteId: { type: "string" },
        query: { type: "string" },
        content: { type: "string" },
      },
      required: ["content"],
    },
  },

  {
    name: "complete_note",
    description: "Mark the existing note as completed or not completed",
    parameters: {
      type: "object",
      properties: {
        noteId: { type: "string" },
      },
      required: ["noteId"],
    },
  },

  {
    name: "delete_note",
    description: "Delete an existing note. Use query if Note ID is not known",
    parameters: {
      type: "object",
      properties: {
        noteId: { type: "string" },
        query: { type: "string" },
      },
    },
  },
];