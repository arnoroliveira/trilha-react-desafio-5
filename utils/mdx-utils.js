import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    // Busca um post específico pelo ID
    const {data} = await api.get(`/posts/${id}`);

    if(data){
        return data;
    }

    return {}
}
