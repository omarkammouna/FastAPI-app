import { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import {AuthContext} from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const useVerificationCode = (baseURL, user_id) => {
  const { handleSubmit, register } = useForm();
  const [verifcode, setVerifCode] = useState('');
  const [hidden, setHidden] = useState(false);
  const [validcode, setValidCode] = useState(false);
  const { retour, setRetour } = useContext(AuthContext);

  useEffect(() => {
    console.log(validcode);
  }, [validcode]);

  const navigate = useNavigate();

  // const resendCode = () => {
  //   const data = {};
  //   const method = 'email';
  //   data.method = method;
  //   data.user_id = user_id;

  //   axios
  //     .post(`${baseURL}/users/E_AAAC`, data)
  //     .then((res) => {
  //       console.log(res);
  //       if (res.status === 200) {
  //         toast.success(res.data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       toast.error('Invalid phone number');
  //     });
  // };
  const resendCode = async() => {
    const data = {};
    const method = 'email';
    data.method = method;
    data.user_id = user_id;

    await fetch(`http://localhost:4001/E_AAAB`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        
    })
    .then((data) => {
        if (data.status === 200) {
            toast.success(data.message);
        } else {
            toast.error(data.error || 'An error occurred');
        }
    })
    .catch((error) => {
        console.error('Error during fetch:', error);
        toast.error('Invalid phone number');
    });
};


  const returnToMethods = () => {
    setRetour(true);
  };

  // const onSubmit = (data) => {
  //   const verificationCode = Object.values(data).join('');
  //   data = {};
  //   data.code = verificationCode;

  //   axios
  //     .post(`${baseURL}/users/RecoverPassword/Check`, data)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         setHidden(true);
  //         toast.success(res.data.message);
  //         setVerifCode(verificationCode);
  //       }
  //     })
  //     .catch((error) => {
  //       if (error.response.status === 404) {
  //         toast.error(error.response.data.error);
  //         setValidCode(true);
  //       } else {
  //         console.log(error);
  //         toast.error('An error occurred');
  //       }
  //     });
  // };

  const onSubmit = async (data) => {
    const verificationCode = Object.values(data).join('');
    data = {};
    data.code = verificationCode;
try{
  const response= await fetch(`http://localhost:4001/E_AAAC`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    if (!response.ok) {
      const errorMessage = await response.json(); // Get the error message from the response
      console.log(errorMessage.error)
      toast.error( errorMessage.error)
        //throw new Error( errorMessage.error);
      }
  
      const responseData = await response.json();
      setHidden(true);
      toast.success(responseData.message);
      setVerifCode(verificationCode);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error(error.response.data.error);
        setValidCode(true);
      } else {
        console.log(error);
        toast.error(error);
      }
    }
};


  return {
    handleSubmit,
    register,
    verifcode,
    setVerifCode,
    hidden,
    setHidden,
    validcode,
    setValidCode,
    retour,
    setRetour,
    resendCode,
    returnToMethods,
    onSubmit,
  };
};

export default useVerificationCode;
