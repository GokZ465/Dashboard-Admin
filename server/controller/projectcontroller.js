const Project = require("../models/Project.js");


const addProject = async (req, res, next) => {

  const { 
    title,
    projectDescription ,
    sampleImage,
    dueDate1,
    dueDate2,
    compulsoryWordings,
    colors,
    leaderPhoto,
    status,
    //allotedFile,
    approvedStatus,
    createdBy,
    createdAt,
 } = req.body;

    let project;
    try{
        project = new Project({
          title,
          projectDescription ,
          sampleImage,
          dueDate1,
          dueDate2,
          compulsoryWordings,
          colors,
          leaderPhoto,
          status,
          //allotedFile,
          approvedStatus,
          createdBy,
          createdAt,
        });
        console.log("req.body.user", req.body.userData)
        console.log("req.user.id", req.user.id)
        req.body.userData = req.user.id;
        console.log("Project",req.body)
        await project.save();
        
    }
    catch(err){
        console.log(err);
    }
    if (!project && req.user.role !== 'superadmin') {
      return res.status(500).json({ message: "Unauthorized user Unable To Add Project" });
    }
    return res.status(201).json({ project });
  }
 
const getAllProjects = async (req, res) => {
    let projects;
    try{
        projects = await Project.find()
        
    }
    catch (err) {
        console.log(err);
      }
    
      if (!projects) {
        return res.status(404).json({ message: "No Projects found" });
      }
      return res.status(200).json({ projects });
    };
    



const getById = async (req, res) => {
    let project;
    try{
        project = await Project.findById(req.params.id)
        
    }

    catch (err) {
        console.log(err);
      }
    
      if (!project) {
        return res.status(404).json({ message: "No Projects found" });
      }
      return res.status(200).json({ project });

}

const updateProject = async (req, res, next) => {
    const id = req.params.id;
    const { 
      title,
      projectDescription ,
      sampleImage,
      dueDate1,
      dueDate2,
      compulsoryWordings,
      colors,
      leaderPhoto,
      status,
      allotedFile,
      approvedStatus,
      lastUpdateBy,
      lastUpdatedOn    
     } = req.body;  
    
    let project;
    try{
        project = await Project.findByIdAndUpdate(id,{
          title,
          projectDescription ,
          sampleImage,
          dueDate1,
          dueDate2,
          compulsoryWordings,
          colors,
          leaderPhoto,
          status,
          allotedFile,
          approvedStatus,
          lastUpdateBy,
          lastUpdatedOn
        },{new:true},);
        req.body.user = req.user.id;
        console.log(project)
        project = await project.save()
        
    }
    catch (err) {
        console.log(err);
      }
    if (!project && req.user.role !== 'superadmin') {
      return res.status(500).json({ message: "Unauthorized user Unable To Update By this ID" });
    }
    return res.status(201).json({ project });

}

const deleteProject = async (req, res) => {
    const id = req.params.id;
    let project;
    try{
        project = await Project.findByIdAndRemove(id);
    }

    catch (err) {
        console.log(err);
      }
    
      if (!project && req.user.role !== 'superadmin') {
        return res.status(500).json({ message: "Unauthorized user Unable To Delete By this ID" });
      }
      return res.status(201).json({ message: "Project Successfully Deleted" });

}

const createAllotedFile = async (req, res, next) => {

  const _id = req.params._id;
  const { 
    designerName
} = req.body;
  const allotedFile = {
      designerName
  }

  const project = await Project.findById(projectId);

  console.log(project.allotedFile);

 /* if (isAlloted) {
      project.allotedFiles.forEach(allotedFile => {
          if (allotedFile.user.toString() === req.user._id.toString()) {
              allotedFile.designerName = designerName;
              
          }
      })

  } else {
      project.allotedFiles.push(allotedFile);
      project.numOfAllotedFiles = project.allotedFiles.length
  }*/
  await project.save({ validateBeforeSave: false });

  res.status(200).json({
      success: true
  })

}




  
const getAllAllotedFiles = async (req, res) => {
  let allotedfiles;
  try{
    allotedfiles = await AllotedFile.find()
      
  }
  catch (err) {
      console.log(err);
    }
  
    if (!allotedfiles) {
      return res.status(404).json({ message: "No Alloted Files found" });
    }
    return res.status(200).json({ allotedfiles });
  };
  





exports.addProject = addProject;
exports.getAllProjects = getAllProjects;
exports.getById = getById;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;
exports.createAllotedFile = createAllotedFile;
exports.getAllAllotedFiles = getAllAllotedFiles;