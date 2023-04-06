import Express from "express";

const mongoose = require("mongoose");



const ur = "mongodb+srv://chidikehenry:Softwareguy$101@cluster3.iopbkxd.mongodb.net/?retryWrites=true&w=majority";
// const URI = "mongodb+srv://flash101:flash101@cluster0.xrdal5y.mongodb.net/flash?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;
export const connectDatabase = (app: Express.Application) => {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(ur, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("connected to database");
      app.listen(PORT, () => {
        console.log("listening for request at port ", PORT);
      });
    })
    .catch((err: any) => {
      console.log(err);
    });
};
