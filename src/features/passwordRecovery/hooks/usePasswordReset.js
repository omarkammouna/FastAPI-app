import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify'; // Add this import statement

const usePasswordReset = (baseURL) => {
    const [hidden, setHidden] = useState(false);
    const [RecovMethod, setRecoveryMethod] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [id, setId] = useState();
    const [method, setMethod] = useState();
    const [emailOrUsernameOrPhone, setEmailOrUsernameOrPhone] = useState();
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    useEffect(() => {
        console.log(id, method)

    }, [method, id]

    )

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setEmailOrUsernameOrPhone(value);

        if (value === '') {
            setError('');
            return;
        }

        if (isUsername(value)) {
            if (!isValidUsername(value)) {
                setError('Veuillez entrer un nom d\'utilisateur valide (3 à 16 caractères alphanumériques, tirets ou soulignements).');
            } else {
                setError('');
            }
        } else if (isEmail(value)) {
            if (!isValidEmail(value)) {
                setError('Veuillez entrer une adresse e-mail valide.');
            } else {
                setError('');
            }
        } else if (isPhone(value)) {
            if (!isValidPhone(value)) {
                setError('Veuillez entrer un numéro de téléphone valide.');
            } else {
                setError('');
            }
        } else {
            setError('Veuillez entrer une adresse e-mail ou un numéro de téléphone valide.');
        }
    };

    const isEmail = (value) => {
        const firstChar = value.charAt(0);
        return isNaN(firstChar) && firstChar !== '+';
    };

    const isPhone = (value) => {
        const firstChar = value.charAt(0);
        return !isNaN(firstChar) || firstChar === '+';
    };

    const isValidEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const isValidPhone = (value) => {
        const phoneRegex = /^(\+\d{1,3})?\d{10}$/;
        return phoneRegex.test(value);
    };

    const isValidUsername = (value) => {
        return /^[a-zA-Z0-9_-]{5,16}$/.test(value);
    };

    const isUsername = (value) => {
        return /^[a-zA-Z0-9]{3,16}$/.test(value);
    };

    const onSubmit = async (data) => {
        if (emailOrUsernameOrPhone.includes('@')) {
            console.log('Input is an email:', emailOrUsernameOrPhone);
            data.email = emailOrUsernameOrPhone;
        } else if (/^[a-zA-Z0-9_-]{3,16}$/.test(emailOrUsernameOrPhone)) {
            console.log('Input is a username:', emailOrUsernameOrPhone);
            data.user_name = emailOrUsernameOrPhone;
        } else {
            console.log('Input is a phone number:', emailOrUsernameOrPhone);
            data.phone_number = emailOrUsernameOrPhone;
        }

        if (isValidEmail(emailOrUsernameOrPhone) || isValidPhone(emailOrUsernameOrPhone) || isValidUsername(emailOrUsernameOrPhone)) {
            // axios
            //     .post(`${baseURL}/users/E_AAAA`, data)
            //     .then((res) => {
            //         if (res.status === 200) {
            //             setRecoveryMethod(true);
            //             setHidden(true);
            //             const message = res.data.message;
            //             toast.success(message);
            //             setId(res.data.id);
            //             setMethod(res.data.method);
            //         }
            //     })
            //     .catch((error) => {
            //         if (error.response && error.response.status === 404) {
            //             toast.error(error.response.data.error);
            //         } else {
            //             console.log(error);
            //             toast.error(error.message);
            //         }
            //     });
              
          await  fetch(`http://localhost:4001/E_AAAA`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                
              })
                .then((response) => {
                    if (!response.ok) {
                        return response.json().then((errorData) => {
                            throw new Error(errorData.error); // Throw a new Error with the error message from the second fetch request response
                        });
                    }
                    return response.json();
                })
                .then((data) => {
                  setRecoveryMethod(true);
                  setHidden(true);
                  const message = data.message;
                  toast.success(message);
                  setId(data.id);
                  setMethod(data.method);
                 
                })
                .catch((error) => {
                            if (error.response && error.response.status === 404) {
                                toast.error(error.response.data.error);
                            } else {
                                console.log(error);
                                toast.error(error.message);
                            }
                        });
              


        } else {
            toast.error('Invalid input');
        }
    };

    return {
        hidden,
        setHidden,
        RecovMethod,
        setRecoveryMethod,
        email,
        setEmail,
        isEmailValid,
        setIsEmailValid,
        id,
        setId,
        method,
        setMethod,
        emailOrUsernameOrPhone,
        setEmailOrUsernameOrPhone,
        inputValue,
        setInputValue,
        error,
        setError,
        register,
        handleSubmit,
        errors,
        handleInputChange,
        onSubmit,
    };
};

export default usePasswordReset;
