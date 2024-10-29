import express from "express";
import { createPost, deletePost, getPost, getallpost, updatePost } from "../controller/PostController.js";


const router = express.Router();


router.post("/addpost", createPost)
router.get("/", getallpost)
router.get("/:id", getPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)

export default router