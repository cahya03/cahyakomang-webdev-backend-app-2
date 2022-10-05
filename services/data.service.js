const { databaseQuery } = require ('../database');

const getDatas = async() =>{
    try{
        const query = `SELECT * FROM praktikan_webdev`;
        const result = await databaseQuery(query);
        return{
            count: result.rowCount,
            rows: result.rows,
        };
    }
    catch(error){
        return error;
    }
}

const getDatabyName = async(nama) =>{
    try{
        const query = `SELECT * FROM praktikan_webdev WHERE nama=$1`;
        const result = await databaseQuery(query,[nama]);
        return{
            count: result.rowCount,
            rows: result.rows,
        };    
    } catch(error){
        return error;
    }
}

const getDatabyEmailTelephone=async(email,telepon)=>{
    try{
        const query = `SELECT * FROM praktikan_webdev WHERE email=$1 AND telepon=$2`;
        const result = await databaseQuery(query,[email,telepon]);
        return{
            count: result.rowCount,
            rows: result.rows,
        };    
    } catch(error){
        return error;
    }
}

const patchDatabyName=async(nama,telepon)=>{
    try{
        const query =`UPDATE praktikan_webdev SET telepon=$2 WHERE nama=$1`;
        const result = await databaseQuery(query,[nama,telepon]);
        if(!result){
            throw new Error('Error updating Telephone')
        }
        return{
            message: "Telephone updated successfully",
        }
    } catch(error){
        return error;
    }
}

const deleteDatabyEmail=async(email)=>{
    try{
        const query=`DELETE FROM praktikan_webdev WHERE email=$1`;
        const result= await databaseQuery(query,[email]);
        if(!result){
            throw new Error('Error deleting Data')
        }
        return{
            message: "Data deleted successfully",
        }
    } catch (error){
        return error;
    }
}

const addData = async(nama,jenis_kelamin,angkatan,email, telepon,deskripsi)=>{
    try{
        const query = `INSERT INTO praktikan_webdev (nama,jenis_kelamin,angkatan,email,telepon,deskripsi)
        VALUES ($1,$2,$3,$4,$5,$6)`;
        const result= await databaseQuery(query,[nama,jenis_kelamin,angkatan,email,telepon,deskripsi]);
    
    if (!result){
        throw new Error('Error adding data');
    }
    return{
        message: 'Data added successfully',
    };
    } catch (error){
        return error;
    }
}

const addBulkData = async(params) => {
    try{
        let arrayDataList =[]
        JSON.parse(params,(a,b)=>{arrayDataList.push(b)})
        for (let a=0; a < (arrayDataList.length-1)/7;a++){
            const query =   `INSERT INTO praktikan_webdev values('${arrayDataList[a*7]}',
                            '${arrayDataList[(a*7)+1]}','${arrayDataList[(a*7)+2]}','${arrayDataList[(a*7)+2]}',
                            '${arrayDataList[(a*7)+4]}','${arrayDataList[(a*7)+5]}')`;
            const data = await databaseQuery(query);

            if (!data){
                throw new Error('Error inserting Bulk Data');
            }

        }
        return{
            message: 'Data inserted successfully'
        }
    } catch (error){
        return error
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
