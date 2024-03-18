import React from 'react'
import useFetch from '../hooks/fetch-hook'
import UserService from '../service/UserService'


const Users = () => {

    //const { error, isPending, data } = useFetch('http://localhost:4000/api/user/')
    const { error, isPending, data } = UserService.getAllUsers();
    console.log(data, error, isPending)

    return (
        <div>
           Users
        </div>
    )
}

export default Users
