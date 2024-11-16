import express from "express";
import cors from "cors";

const server = express();

// Middlewares
server.use(express.json());
server.use(cors());

// Routes


const PORT = 3000;

server.listen(4000, () => {
  console.log(
    `The Server fo CodeGreen has Started at http://localhost:${PORT}`
  );
});
