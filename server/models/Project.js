const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const projectSchema = new Schema({
    title : {
        type : String,
        required : true
    },

    projectDescription : {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description can not be more than 500 characters']
    },

    sampleImage : {
        type : String,
        //default: 'no-image.jpg'
    },
    dueDate1 : {
        type : Date,
        required : true
    },
    dueDate2 : {
        type : Date,
        required : true
    },
    compulsoryWordings: {
        type: String,
        required : true
    },
    colors: {
        type: String,
        enum: ["Black", "Brown", "Silver", "White", "Blue"],
      },
    leaderPhoto: {
        type: String,
        required : true,
       // maxsize : 400
    },
    status : {
        type: String,
        required : true
    },
    approvedStatus : {
        type: String,
        required : true
    },
    createdBy : {
        type : String,
        required : true
    },
    createdAt : {
        type: Date,
        default: Date.now
    },
    lastUpdateBy : {
        type : String,
        //required : true
    },
    lastUpdatedOn : {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
//     allotedFile: [
//         {
//         designerName : {
//             type: String,
//             required : false
//         },
       
//     }
// ]

},)


module.exports = mongoose.model('Project', projectSchema);
