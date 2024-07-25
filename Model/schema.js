import mongoose from "mongoose";

// _id
// name
// description
// created_at
// updated_at
// status - todo/complete

const {Schema} = mongoose;

  const todoSchema = new Schema ({
    _id: Schema.Types.UUID,
    name : {type : String} ,
    description :{type : String} ,
    
    status : {type : Boolean}, // Either it can be true or false 

} , {timestamps: true} )


const Todo = mongoose.model("Todo", todoSchema);

export default Todo;

