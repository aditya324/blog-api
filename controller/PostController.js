import postSchema from "../models/PostModel.js"




export const createPost = async (req, res)=>{
    try {
        const newPost = new postSchema(req.body)
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        console.log(error)
    }
}


export const getallpost = async (req,res)=>{
    try {
        const post = await postSchema.find()
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}



export const getPost = async (req, res)=>{
    try {
        const post = await postSchema.findBYId(req.params.id)
        if (post) res.status(200).json(post);
        else res.status(404).json({ message: 'Post not found' });
    } catch (error) {
        res.status(500).json(error)
    }
}


export const updatePost = async (req, res)=>{
    try {
        const post = await postSchema.findByIdAndUpdate(req.params.id, req.body)
        if (post) res.status(200).json({ message: 'Post updated successfully' });
        else res.status(404).json({ message: 'Post not found' });
    } catch (error) {
        res.status(500).json(error)
    }
}



export const deletePost = async (req, res)=>{
    try {
        const post = await postSchema.findByIdAndDelete(req.params.id)
        if (post) res.status(200).json({ message: 'Post deleted successfully' });
        else res.status(404).json({ message: 'Post not found' });
    } catch (error) {
        res.status(500).json(error)
    }
}