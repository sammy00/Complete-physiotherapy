import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import appointmentRoutes from "./appointments";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/appointments", appointmentRoutes);

app.get("/", (_req, res) => {
    res.json({
        message: "Dr. Vanita's Physiotherapy Backend is running!",
    });
});

app.get("/api/health", (_req, res) => {
    res.json({
        success: true,
        message: "Backend is healthy",
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});