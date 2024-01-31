import axios from 'axios'

const UseDelete = () => {

    const Delete = async (url) => {
        console.log(url);
        try {
            await axios.delete(url)
            alert("good del")
        } catch (error) {
            console.error(error)
        }
    }

    return Delete
}

export default UseDelete