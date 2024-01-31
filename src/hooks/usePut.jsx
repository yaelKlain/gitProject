import axios from 'axios'

const UsePut = () => {

    const put = async (url, data) => {
        try {
            console.log(url);
            console.log(data);
            await axios.put(url, data)
            alert("good put")
        } catch (error) {
            console.error(error)
        }
    }

    return put
}

export default UsePut