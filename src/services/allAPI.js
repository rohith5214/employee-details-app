import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

export const uploadDetails = async (reqBody)=>{
   return await commonAPI("POST",`${serverURL}/details`,reqBody)
}

export const getAllDetails = async (id)=>{
    return  await commonAPI("GET",`${serverURL}/details`,"")
}
 
export const deleteAdettails = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/details/${id}`,{})
}
