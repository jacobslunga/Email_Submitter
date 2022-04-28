import { Router } from "express";
import Email from "../Models/Email.js";

const router = Router();

export const get_emails = async (_, res) => {
  try {
    const emails = await Email.find();
    res.status(200).json(emails);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const submit_email = async (req, res) => {
  const new_email = new Email({ email: req.body.email });

  try {
    await new_email.save();
    res.status(201).json(new_email);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default router;
