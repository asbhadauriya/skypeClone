import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
   fname:{
      type:String,
      required:true,

   },
   lname:{
      type:String,
      required:true,

   },
    email:{
    type: String,
    required: true,
    unique: true
    },
    password: {
        type: String,
        required: true,
     },
    conection:{
      type:Array,
      default:[]
      
  },
  groups:{
     type:Array,
     default:[]
  },
    role:{
       type: String,
       default: "User"
    }
      
},
{timestamps:true}
);

 const UserModel = mongoose.model("user",UserSchema)
 export default UserModel;