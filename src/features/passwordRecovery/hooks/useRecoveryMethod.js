import { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import {AuthContext} from '../../../context/AuthContext';

const useRecoveryMethod = (baseURL, user_id) => {
  const [resetCode, setResetCode] = useState('');
  const [phone, setPhone] = useState('');
  const [hid, setHid] = useState(false);
  const [code, setCode] = useState('');
  const { retour, setRetour } = useContext(AuthContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  useEffect(() => {
    console.log(hid);
    console.log(resetCode);
  }, [hid, resetCode]);

  // const verifyWithEmail = () => {
  //   const data = {};
  //   data.method = 1;
  //   data.user_id = user_id;
    
  //   axios
  //     .post(`${baseURL}/users/E_AAAB`, data)
  //     .then((res) => {
  //       console.log(res);
  //       if (res.status === 200) {
  //         toast.success(res.data.message);
  //         setHid(true);
  //         setRetour(false);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       toast.error('Invalid phone number');
  //     });
  // };

//   const verifyWithEmail = async() => {
//     const data = {};
//     data.method = 1;
//     data.user_id = user_id;

//    await fetch(`http://localhost:4001/E_AAAB`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//           else if(response.ok) {
//             toast.success(response.data.message);
//             setHid(true);
//             setRetour(false);
//         }
//         return response.json();
//     })
    
//     .catch((error) => {
//         console.log(error);
//         toast.error('Invalid phone number');
//     });
// };
const verifyWithEmail = async () => {
  const data = {};
  data.method = 1;
  data.user_id = user_id;

  try {
    const response = await fetch(`http://localhost:4001/E_AAAB`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log(responseData.message);
    toast.success(responseData.message);
    setHid(true);
    setRetour(false);
  } catch (error) {
    console.log(error);
    toast.error('Invalid phone number');
  }
};


  // const verifyWithPhone = () => {
  //   const data = {};
  //   data.method = 2;
  //   data.user_id = user_id;
    
  //   axios
  //     .post(`${baseURL}/users/RecoverPassword/SendCode`, data)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         toast.success(res.data.message);
  //         setHid(true);
  //         setRetour(false);
  //       }
  //     })
  //     .catch((error) => {
  //       if (error.response && error.response.data && error.response.data.error) {
  //         toast.error(error.response.data.error);
  //       } else {
  //         console.log(error);
  //         toast.error('An error occurred');
  //       }
  //     });
  // };

//   const verifyWithPhone = async () => {
//     const data = {};
//     data.method = 2;
//     data.user_id = user_id;

//    await fetch(`http://localhost:4001/E_AAAB`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         else if(response.ok) {
//             toast.success(response.data.message);
//             setHid(true);
//             setRetour(false);
//         }
//         return response.json();
//     })
   
//     .catch((error) => {
//         if (error.response && error.response.data && error.response.data.error) {
//             toast.error(error.response.data.error);
//         } else {
//             console.log(error);
//             toast.error('An error occurred');
//         }
//     });
// };
const verifyWithPhone = async () => {
  const data = {};
  data.method = 2;
  data.user_id = user_id;

  try {
    const response = await fetch(`http://localhost:4001/E_AAAB`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    toast.success(responseData.message);
    setHid(true);
    setRetour(false);
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      toast.error(error.response.data.error);
    } else {
      console.log(error);
      toast.error('An error occurred');
    }
  }
};


  return {
    resetCode,
    setResetCode,
    phone,
    setPhone,
    hid,
    setHid,
    code,
    setCode,
    retour,
    setRetour,
    register,
    handleSubmit,
    errors,
    verifyWithEmail,
    verifyWithPhone,
  };
};

export default useRecoveryMethod;
