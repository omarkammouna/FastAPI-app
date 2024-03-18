import React, {Component} from 'react'
import useFetch from '../hooks/fetch-hook';

class UserService extends Component {

    getAllUsers = () => {
        return useFetch('http://localhost:4001/E_AAAF')

    }
}

export default new UserService();
