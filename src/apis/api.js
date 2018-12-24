import axios from 'axios';

const myBackEndAxios = axios.create({
    baseURL: 'http://123.207.227.186:8080',
    timeout: 5000,
    withCredentials: true
  });


export const requestUserGrxx = params => {
    return myBackEndAxios.post('/user/info/', params)
}

export const requestSellerGrxx = params => {
    return myBackEndAxios.post('/company/info/', params)
}

export const requestAdminGrxx = params => {
    return myBackEndAxios.post('/admin/info/', params)
}

export const InfoChange = (params) => {
    return myBackEndAxios.put('/user/update', params)
}



export const userLogout = params => {
    return myBackEndAxios.post('/logout/user', params)
}

export const sellerLogout = params => {
    return myBackEndAxios.post('/logout/company', params)
}


export const adminLogout = params => {
    return myBackEndAxios.post('/logout/admin', params)
}


// export const requestRegister = params => {
//     return myAxios.post('/user/register', params).then(data => data.data);
// }