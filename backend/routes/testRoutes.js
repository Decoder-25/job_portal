import express from "express";
import { testPostConntroller } from "../controllers/testController.js";
import userAuth from "../middlewares/authMiddleware.js";

//router.object
const router = express.Router();

//test
router.post("/test-post", userAuth, testPostConntroller);

//export
export default router;
