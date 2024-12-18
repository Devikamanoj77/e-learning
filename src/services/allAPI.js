import commonAPI from './commonAPI'
import SERVER_BASE_URL from './serverURL'

// registerAPI
export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}

export const loginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}

// add-course
export const addCourseAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-course`,reqBody,reqHeader)
}

// all-course
export const allCourseAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-courses`,{},reqHeader)
}

// alluser-course
export const allUserCourseAPI = async()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/alluser-courses`,{})
}
