import axios from 'axios'

const UsePost = () => {

    const post = async (url, data) => {
        try {
            console.log(url);
            console.log(data);
            await axios.post(url,data)
            alert("good post")
        } catch (error) {
            console.error(error)
        }
    }

    return post
}

export default UsePost