import Models from "../models/Models.js";

export const getModels = async (req, res) => {
    try {
        const models = await Models.find();
        res.json(models);
    }catch(error) {
        res.status(500).json({
            message:error.message
        });
    }
}

export const saveNama = async (req, res) => {
    const models = new Models(req.body);
    try {
        const saveModels = await models.save();
        res.status(201).json(saveModels);
    }catch(error) {
        res.status(400).json({
            message:error.message
        });
    }
}

export const updateNama = async (req, res) => {
    try {
        const updateNama = await Models.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(201).json(updateNama);
    }catch(error) {
        res.status(400).json({
            message:error.message
        });
    }
}

export const getNamaById = async (req, res) => {
    try {
        const nama = await Models.findById(req.params.id);
        res.json(nama);
    }catch(error) {
        res.status(404).json({
            message:error.message
        });
    }
}

export const deleteNama = async (req, res) => {
    try {
        const deleteNama = await Models.deleteOne({_id: req.params.id});
        res.status(200).json(deleteNama);
    }catch(error) {
        res.status(400).json({
            message:error.message
        });
    }
}