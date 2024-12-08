import express from "express";
import {
    getNotes, 
    getNotesById,
    createNotes,
    updateNotes,
    deleteNotes
} from "../controllers/NotesController.js";

const router = express.Router();

router.get('/notes', getNotes);
router.get('/notes/:id', getNotesById);
router.post('/notes', createNotes);
router.patch('/notes/:id', updateNotes);
router.delete('/notes/:id', deleteNotes);

export default router;