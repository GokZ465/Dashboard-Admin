const Event = require("../models/Events.js");
const moment = require("moment");

const addEvent = async (req, res, next) => {

    const { eventName, eventCategory, eventDate, status, createdBy, createdAt, lastUpdateBy, lastUpdatedOn, description } = req.body;

    let event;
    try{
        event = new Event({
            eventName, eventCategory, eventDate, status, createdBy, createdAt, lastUpdateBy, lastUpdatedOn, description
          });
        req.body.user = req.user.id;
        console.log(event);
        await event.save();
        
    }
    catch(err){
        console.log(err);
    }
    if (!event && req.user.role !== 'superadmin') {
      return res.status(500).json({ message: "Unauthorized user Unable To Add Event" });
    }
    return res.status(201).json({ event });

}
 
const getAllEvents = async (req, res) => {
    let events;
    try{
        events = await Event.find()
        
    }
    catch (err) {
        console.log(err);
      }
    
      if (!events) {
        return res.status(404).json({ message: "No events found" });
      }
      return res.status(200).json({ events });
    };
    



const getById = async (req, res) => {
    let event;
    try{
        event = await Event.findById(req.params.id)
        
    }

    catch (err) {
        console.log(err);
      }
    
      if (!event) {
        return res.status(404).json({ message: "No events found" });
      }
      return res.status(200).json({ event });

}

const updateEvent = async (req, res, next) => {
    const id = req.params.id;
    const { eventName, eventCategory, eventDate, status, lastUpdateBy, lastUpdatedOn, description } = req.body;
    
    let event;
    
    try{
        event = await Event.findByIdAndUpdate(id,{
            eventName, eventCategory, eventDate, status, lastUpdateBy, lastUpdatedOn, description
        },{new:true},);
        
        req.body.user = req.user.id;
        console.log(event)
        event = await event.save()
        
    }
    catch (err) {
        console.log(err);
      }
    
      if (!event && req.user.role !== 'superadmin') {
        return res.status(500).json({ message: "Unauthorized user Unable To Update By this ID" });
      }
      return res.status(201).json({ event });

}

const deleteEvent = async (req, res) => {
    const id = req.params.id;
    let event;
    try{
        event = await Event.findByIdAndRemove(id);
        req.body.user = req.user.id;
    }

    catch (err) {
        console.log(err);
      }
      if (!event && req.user.role !== 'superadmin') {
        return res.status(500).json({ message: "Unauthorized user Unable To Delete By this ID" });
      }
      return res.status(201).json({ message: "Event Successfully Deleted" });
     
}


exports.addEvent = addEvent;
exports.getAllEvents = getAllEvents;
exports.getById = getById;
exports.updateEvent = updateEvent;
exports.deleteEvent = deleteEvent;