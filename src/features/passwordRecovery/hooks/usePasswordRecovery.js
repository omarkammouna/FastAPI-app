import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { baseURL } from '../../../utils/BaseUrl';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const usePasswordRecovery = (user_id, verifcode) => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [passwordStrengthError, setPasswordStrengthError] = useState(false);
const navigate=useNavigate();


  // const onSubmit = (data) => {
  //   if (data.password === data.verifpassword) {
  //     data.user_id = user_id;
  //     data.code = verifcode;

  //     axios
  //       .put(`${baseURL}/users/E_AAAD`, data)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           console.log(res);
  //           console.log(data);

  //           // Show success message and navigate
  //            navigate('/SignIn');
  //         }
  //       })
  //       .catch((error) => {
  //         if (error.response && error.response.data && error.response.data.error) {
  //           console.error(error.response.data.error);
  //         } else {
  //           console.error(error);
  //         }
  //       });
  //   } else {
  //     setPasswordMatchError(true);
  //   }
  // };

//   const onSubmit = async(data) => {
//     if (data.password === data.verifpassword) {
//         data.user_id = user_id;
//         data.code = verifcode;
// console.log(user_id)
//        await fetch(`http://localhost:4001/E_AAAD`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }else  if (response.ok) {
//               // console.log(res);
//               console.log(data);

//               // Show success message and navigate
//               navigate('/Login-form');
              
//           }
//             return response.json();
//         })
        
//         .catch((error) => {
//             if (error.response && error.response.data && error.response.data.error) {
//                 console.error(error.response.data.error);
//             } else {
//                 console.error(error);
//             }
//         });
//     } else {
//         setPasswordMatchError(true);
//     }
// };


  useEffect(() => {
    const handleVerifPasswordChange = (e) => {
      const { value } = e.target;
      const passwordValue = getValues('password');
      setPasswordMatchError(value !== passwordValue);
    };

    const handlePasswordChange = (e) => {
      const passwordValue = getValues('password');
      setPasswordMatchError(false);
      setPasswordLengthError(passwordValue.length < 8);
      setPasswordStrengthError(!isPasswordStrong(passwordValue));
    };

    register('password', {
      required: true,
      minLength: 8,
    });

    register('verifpassword', {
      required: true,
      minLength: 8,
    });

    const passwordInput = document.getElementById('password');
    passwordInput.addEventListener('input', handlePasswordChange);

    const verifPasswordInput = document.getElementById('verifpassword');
    verifPasswordInput.addEventListener('input', handleVerifPasswordChange);

    return () => {
      passwordInput.removeEventListener('input', handlePasswordChange);
      verifPasswordInput.removeEventListener('input', handleVerifPasswordChange);
    };
  }, [register, getValues]);

  const isPasswordStrong = (password) => {
    // Check for special characters
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharacters.test(password)) {
      return false;
    }

    // Check for uppercase letters
    const uppercaseLetters = /[A-Z]/;
    if (!uppercaseLetters.test(password)) {
      return false;
    }

    return true;
  };

const onSubmit = async (data) => {
  if (data.password === data.verifpassword) {
    data.user_id = user_id;
    data.code = verifcode;
    console.log(user_id);

    try {
      const response = await fetch(`http://localhost:4001/E_AAAD`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      } else {
        // Show success message and navigate
        const responseData = await response.json();
        toast(responseData.message)
        console.log(data);
        navigate('/Login-form');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        console.error(error.response.data.error);
      } else {
        console.error(error);
      }
    }
  } else {
    setPasswordMatchError(true);
  }
};


  return {
    handleSubmit,
    register,
    errors,
    passwordMatchError,
    passwordLengthError,
    passwordStrengthError,
    onSubmit,
  };
};

export default usePasswordRecovery;
