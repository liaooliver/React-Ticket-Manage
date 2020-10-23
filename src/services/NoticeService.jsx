import http from '../Http_Common';

const getNotice = () => {
    return http.get("/")
}

export default {
    getNotice
}