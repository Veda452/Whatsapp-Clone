import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url='Http://localhost:8000';

let gfs,gridFsBucket;
const con=mongoose.connection;
con.once('open',()=>{
    gridFsBucket=new mongoose.mongo.GridFSBucket(con.db,{
        bucketName:'fs'
    });
    gfs=grid(con.db,mongoose.mongo);
    gfs.collection('fs');
})

export const uploadFile=async(req,res)=>{
    if(!req.file){
        return res.status(404).json('File not found');
    }
    const imageUrl=`${url}/file/${req.file.filename}`;

    return res.status(200).json(imageUrl);
}
export const getFile=async(req,res)=>{
    try{
        const file=await gfs.files.findOne({filename:req.params.filename});
        const readstream=gridFsBucket.openDownloadStream(file._id);
        readstream.pipe(res);
    }catch(error){
        return res.status(500).json(error.message);
    }
}