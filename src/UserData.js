import React, { useEffect } from 'react'

import  {useDispatch,useSelector} from 'react-redux'
import watcherUserSaga from './saga/usersaga';
export default function UserData() {

    const data = useSelector(y=>y.user);

    const dis = useDispatch();

    useEffect(()=>{

        dis({type: 'GET_USERS_REQUESTED'})

    },[])

    console.log(data);

  return (
    <div>UserData</div>
  )
}
