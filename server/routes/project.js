const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectcontroller.js");
const { protect, authorize } = require('../middleware/aauth.js');

router
  .route('/')
  .get(projectController.getAllProjects)
  .post(projectController.addProject);
  
router
  .route('/:id')
  .get(projectController.getById)
  .put(protect, authorize('superadmin'), projectController.updateProject)
  .delete(protect, authorize('superadmin'), projectController.deleteProject);

  router.route('/project/alloted').put(projectController.createAllotedFile);
  router.route('/alloted').get(projectController.createAllotedFile)

module.exports = router;