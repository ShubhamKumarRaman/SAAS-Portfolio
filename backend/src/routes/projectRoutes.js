const express = require('express')

const { createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject,
    getFeaturedProjects
} = require('../controllers/projectController');

const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

//public routes
router.get('/', getProjects);

router.get('/featured', getFeaturedProjects);

router.get('/:id', getProjectById);

//Admin Routes
router.post('/', protect, adminOnly, createProject);

router.put('/:id', protect, adminOnly, updateProject);

router.delete('/:id', protect, adminOnly, deleteProject);

module.exports = router;