import axios from "axios"
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newPersonObject => {
    const request = axios.post(baseUrl, newPersonObject)
    return request.then(response => response.data)
}

const remove = id => axios.delete(`${baseUrl}/${id}`)

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const exportObject = {getAll, create, remove, update}

export default exportObject