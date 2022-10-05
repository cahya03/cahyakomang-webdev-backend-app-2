const {dataServices} = require('../services');
const {responseHelper} = require('../helper');

const getDatas = async (req,res) => {
    try{
        const datas=await dataServices.getDatas();
        if(datas instanceof Error){
            throw new Error(datas);
        }
        res.status(responseHelper.status.success).json(datas);   
    }   catch (error){
        res.status(responseHelper.status.error).json(error.message);
    }
}

const getDatabyName = async(req,res)=>{
    try{
        const{nama} =req.params;
        const data= await dataServices.getDatabyName(nama);
        res.status(responseHelper.status.success).json(data);
    } catch (error){
        res.status(responseHelper.status.error).json(error.message);
    }
}

const getDatabyEmailTelephone = async(req,res)=>{
    try{
        const{email, telepon}=req.params;
        const data = await dataServices.getDatabyEmailTelephone(email,telepon);
        res.status(responseHelper.status.success).json(data);
    } catch (error){
        res.status(responseHelper.status.error).json(error.message);
    }
}

const patchDatabyName = async(req,res)=>{
    try{
        const{nama,telepon}=req.body;
        const data = await dataServices.patchDatabyName(nama,telepon);
        res.status(responseHelper.status.success).json(data);
    } catch (error){
        res.status(responseHelper.status.error).json(error.message);
    }
}

const deleteDatabyEmail = async(req,res)=>{
    try{
        const{email}=req.params;
        const data =await dataServices.deleteDatabyEmail(email);
        res.status(responseHelper.status.success).json(data);
    } catch(error){
        res.status(responseHelper.status.error).json(error.message);
    }
}

const addData = async(req,res)=>{
    try{
        const {nama,jenis_kelamin,angkatan,email,telepon,deskripsi}=req.body;
        const data = await dataServices.addData(nama,jenis_kelamin,angkatan,email,telepon,deskripsi);
        if(data instanceof Error){
            throw new Error(data);
        }
        res.status(responseHelper.status.success).json(data);
    } catch(error){
        res.status(responseHelper.status.error).json(error.message);
    }
}

const addBulkData = async (req,res)=>{
    try{
        const data = await dataServices.addBulkData(JSON.stringify(req.body));
        if(data instanceof Error){
            throw new Error(data);
        }
        res.status(responseHelper.status.success).json(data);
    } catch(error){
        res.status(responseHelper.status.error).json(error.message);
    }
}

module.exports={
    getDatas,
    getDatabyName,
    getDatabyEmailTelephone,
    patchDatabyName,
    deleteDatabyEmail,
    addData,
    addBulkData
}



