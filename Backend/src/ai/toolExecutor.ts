import { ToolExecutor } from "../types/index.js";
import { noteService } from "../services/note.service.js";

async function resolveNoteId(userId: string, args: any) {
  if (args.noteId) return args.noteId;

  if (!args.query) return null;

  const results = await noteService.search(userId, args.query);

  if (!results.length) return null;

  return results[0].id;
}

export const toolRegistry: Record<string, ToolExecutor> = {
    create_note: async (userId: string, args: any) => {
        return noteService.create(userId, args.content);
    },

    search_note: async (userId: string, args: any) => {
        return noteService.search(userId, args.query);
    },

    search_completed_note: async (userId: string, args: any) => {
        return noteService.searchCompletedNotes(userId);
    },

    search_incompleted_note: async (userId: string, args: any) => {
        return noteService.searchIncompletedNotes(userId);
    },

    update_note: async (userId: string, args: any) => {
        const noteId = await resolveNoteId(userId, args);
        if(!noteId) {
            return {
                success: false,
                message: "No note found.",
            };
        }
        return noteService.markCompleted(noteId, userId);
    },

    complete_note: async (userId: string, args: any) => {
        const noteId = await resolveNoteId(userId, args);
        if(!noteId) {
            return {
                success: false,
                message: "No note found.",
            };
        }
        return noteService.markCompleted(noteId, userId);
    },

    delete_note: async (userId: string, args: any) => {
        const noteId = await resolveNoteId(userId, args);
        if(!noteId) {
            return {
                success: false,
                message: "No note found.",
            };
        }
        return noteService.markCompleted(noteId, userId);
        /* const deletion = await noteService.delete(args.noteId, userId);
        if (deletion.count === 0) {
            return {
                success: false,
                message: "No note found.",
            }
        }
        else {
            return {
                success: true,
                message: "Note deleted successfully.",
            }
        } */
    },
};