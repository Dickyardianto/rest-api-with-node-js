import express from "express";
import { 
    getModels, 
    saveNama, 
    updateNama, 
    getNamaById, 
    deleteNama} from "../controllers/namaPegawaiController.js";

const router = express.Router();

router.get('/', getModels);
router.get('/:id', getNamaById);
router.post('/', saveNama);
router.patch('/:id', updateNama);
router.delete('/:id', deleteNama);

export default router;