require("dotenv").config(); // env format ucun
const todosRouter = require('./routes/todos'); //users routerni import qildik ismi unique yani bowqaca boliwi kere
const express = require("express"); //express
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const app = express(); //express () bilan qoyiliwi kere ctob cistiyro bosin!!
app.use(cors());

app.use(express.json());
app.use('/users', todosRouter);

const PORT = process.env.PORT || 8000;



 const start = async () => {
   try {
   await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
    });
      .then(() => console.log("ok")).catch(() => console.log("bad"))
    app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
   } catch (error) {
    console.log(error);
   }
}
start()
