import { useState } from 'react'
import { useAuthContext } from './useAuthContext'


export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const ignoreEmptyFields = (obj) => {
    const result = {};
    for (const key in obj) {
      const value = obj[key];
      if (value !== '') {
        result[key] = value;
      } else {
        result[key] = null;
      }
    }
    return result;
  };

  const signup = async (name, familyName, email, phoneNumber, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:4001/E_AAAE', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(ignoreEmptyFields({name, familyName, email, phoneNumber, password }))
    })
    

    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}