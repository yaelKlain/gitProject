import { useSelector} from 'react-redux'
import BasicCard1 from './showUser'


const User = () => {  
    console.log('user');


    const UserSlice1 = useSelector((myStore) => myStore.userSlice.UserList)
    console.log(UserSlice1);
    

    return (
        <>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    UserSlice1.map((item) => {
                        return (
                            <BasicCard1 id={item.id} text={item.writer} />
                        )
                    })
                }
                </div>


        </>
    )
}

export default User