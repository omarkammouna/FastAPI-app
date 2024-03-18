import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom';
//import Fetch from '../../../lib/Fetch';

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate();

  const login = async (loginInfo) => {
    setIsLoading(true)
    setError(null)

    
    const response = await fetch('http://localhost:4001/E_AAAG', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify( loginInfo )
    })
    //const response = await Fetch.post('http://localhost:4001/E_AAAG', loginInfo)
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json })

      // update loading state
      setIsLoading(false)

      navigate('/Logged');
    }
  }

  return { login, isLoading, error }
}