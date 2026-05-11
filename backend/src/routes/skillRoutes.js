const express = require('express')

const { createSkill,
    getSkills,
    updateSkill,
    deleteSkill
} = require('../controllers/skillController')

const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

//Public route
router.get('/', getSkills);

//Admin Route
router.post('/', protect, adminOnly, createSkill);

router.put('/', protect, adminOnly, updateSkill);

router.put('/:id', protect, adminOnly, updateSkill);

router.delete('/:id', protect, adminOnly, deleteSkill);

module.exports = router;