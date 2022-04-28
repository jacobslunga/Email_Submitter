import { Router } from "express";
import { get_emails, submit_email } from "../controllers/emails.js";

const router = Router();

router.get("/get_emails", get_emails);
router.post("/submit_email", submit_email);

export default router;
