import mongoose from "mongoose";

const TokenModel=new mongoose.Schema({
    userID:{
        type:String,
        required: true
    },
    tokenId:{
        type:String,
        required: true

    }
})
export default TokenModel