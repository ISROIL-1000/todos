const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
       title: {
        type: String,
        required: true,
        // unique: true, //2tasi 1xl bosa error berad
        trim: true,
       },
       image: {
        type: String,
        required: true,
        unique: true
       },
       count: {
        type: String,
        required: false,
        default: 1 ,
       },
       desc: {
        type: String,
         required: false,
         trim: true,
       }
    },
    { timestamps: true } // qacon sazdat qgan korsatad
);

module.exports =mongoose.model("Todo", todoSchema);