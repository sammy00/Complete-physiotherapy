import { Router, Request, Response } from "express";

const router = Router();

router.post("/", (req: Request, res: Response) => {
    const appointmentData = req.body;

    console.log("📋 New appointment received:");
    console.log(appointmentData);

    res.status(201).json({
        success: true,
        message: "Appointment received successfully",
        data: appointmentData,
    });
});

export default router;