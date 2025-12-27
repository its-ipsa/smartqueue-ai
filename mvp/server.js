import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI("PASTE_YOUR_GEMINI_API_KEY");

let queue = [];

app.post("/join", async (req, res) => {
  const { name } = req.body;
  queue.push(name);

  const peopleAhead = queue.length - 1;

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
There are ${peopleAhead} people ahead in a service queue.
Each person usually takes 2–4 minutes.
Estimate waiting time briefly (1–2 lines).
`;

  const result = await model.generateContent(prompt);

  res.json({
    position: queue.length,
    peopleAhead,
    aiWaitTime: result.response.text()
  });
});

app.listen(5000, () => {
  console.log("SmartQueue AI running on http://localhost:5000");
});
