// import mongoose from "mongoose";

// async function connectDb(data){
//     try{
//      mongoose.connect(data,{dbName:'login'})
//      console.log('database connected successfully');
//     }catch{
//         console.log(erro.message);
//     }
// }

// export default connectDb;

import mongoose from "mongoose";

async function connectDb(data){
    try{
        mongoose.connect(data);
        console.log('database connected');

    }catch(error){
        console.log(error.message);
    }
}
export default connectDb