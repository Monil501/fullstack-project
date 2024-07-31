import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://monilmodi501:Monil.2004@cluster0.e1yqkqo.mongodb.net/fullstack-project').then(()=>console.log("DB Connected"));
}