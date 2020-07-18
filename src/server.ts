import "reflect-metadata";
import "./database";
import express from 'express';
import UsersRouter from "./routes/user.routes";

const app = express();
app.use(express.json());
app.use("/users", UsersRouter);




app.listen(8000);

