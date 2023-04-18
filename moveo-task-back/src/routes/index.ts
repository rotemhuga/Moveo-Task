import express from "express";
import codesRoutes from "../routes/codes.routes"


const router = express.Router();

router.use("/codes", codesRoutes);

export default router;
