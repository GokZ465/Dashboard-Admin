const User = require("../models/User.js");
const ErrorResponse = require('../utils/errorResponse');


const addUser = async (req, res, next) => {

    const { name, email, password, role } = req.body;

    let user;
    try{
        user = new User({
            name, email, password, role
        });
        console.log(user);
        await user.save();
        sendTokenResponse(user, 200, res);
        
    }
    catch (err) {
        console.log(err);
      }
    
      if (!users) {
        return res.status(404).json({ message: "Unable to Add User" });
      }
      return res.status(200).json({ users });
};
const getAllUsers = async (req, res) => {
    let users;
    try{
        users = await User.find()
        
    }
    catch (err) {
        console.log(err);
      }
    
      if (!users) {
        return res.status(404).json({ message: "No Users found" });
      }
      return res.status(200).json({ users });
    };
    



const getById = async (req, res) => {
    let user;
    try{
        user = await User.findById(req.params.id)
        
    }

    catch (err) {
        console.log(err);
      }
    
      if (!user) {
        return res.status(404).json({ message: "No User found" });
      }
      return res.status(200).json({ user });

}

const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, email, password, role } = req.body;  
    
    let user;
    try{
        user = await User.findByIdAndUpdate(id,{ name, email, password, role },{new:true},);
        
        console.log(user)
        user = await user.save()
        
    }
    catch (err) {
        console.log(err);
      }
    
      if (!user) {
        return res.status(404).json({ message: "Unable To Update By this ID" });
      }
      return res.status(200).json({ user });

}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    let user;
    try{
        user = await User.findByIdAndRemove(id);
    }

    catch (err) {
        console.log(err);
      }
    
      if (!user) {
        return res.status(404).json({ message: "Unable To Delete By this ID" });
      }
      return res.status(200).json({ message: "User Successfully Deleted" });

}

const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwtToken();
  
    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true
    };
  
      
    res
      .status(statusCode)
      .cookie('token', token, options)
      .json({
        success: true,
        token
      });
    }

exports.addUser = addUser;
exports.getAllUsers = getAllUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.sendTokenResponse = sendTokenResponse;