import { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const useAddLearner = (edLevel,levelOrd,resfresh,setRefresh) => {
  const { handleSubmit, register, setValue, formState: { errors } } = useForm(

    {
      defaultValues: {
        order: 0, // Set the initial value of the order property
      },
    }
  );
  const [success, setSuccess] = useState(false); // Add a success state


  const onSubmit = async (data) => {

    try {
      data.user_id = 123456789;
      const response = await fetch(`http://localhost:4001/E_AAAM`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setSuccess(true)
      toast.success(responseData.message);
     // setRefresh(true)
    //   if (resfresh) {
    //     setRefresh(false);
    // }
    if (typeof setRefresh === 'function') {
      setRefresh(true);
    }


    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error(error.response.data.error);

      } else {
        console.log(error);
        toast.error('An error occurred');
      }
    }
  };


  let optionsByLevel = {
    HS: ['Baccalauréat', '3ème Année', '2ème Année', '1ère Année'],
    MS: ['9ème Année', '8ème Année', '7ème Année'],
    PS: ['1ère année', '2ème Année', '3ème Année', '4ème Année', '5ème Année', '6ème Année']
  };
   // Modify optionsByLevel based on edLevel and levelOrd
   if (edLevel && levelOrd) {
    optionsByLevel[edLevel] = [`${levelOrd}`];
  }

  const [educationLevel, setEducationLevel] = useState('');
  const [name, setName] = useState('');
  const [order, setOrder] = useState()
  const [errorLastName, setErrorLastName] = useState('');
  const [errorFirstName, setErrorFirstName] = useState('');


  const isValidLastName = (value) => {
    return /^[a-zA-Z\s]+$/.test(value);
  };

  const isValidFirstName = (value) => {
    return /^[a-zA-Z\s]+$/.test(value);
  };
  const handleInputChangeFirstName = (e) => {
    const value = e.target.value;

    if (!isValidFirstName(value)) {
      setErrorFirstName('Veuillez entrer un prénom valide.');
    } else {
      setErrorFirstName('');
    }
  };

  const handleInputChangeLastName = (e) => {
    const value = e.target.value;

    if (!isValidLastName(value)) {
      setErrorLastName('Veuillez entrer un nom valide.');
    } else {
      setErrorLastName('');
    }
  };


  const handleLevelChange = (e) => {
    const level = e.target.value;
    setEducationLevel(level);
    setName('');
  };

  const handleSubLevelChange = (e) => {
    setName(e.target.value);
    let newOrder = 0;

    if (e.target.value === 'Baccalauréat') {
      newOrder = 4;
    } else {
      newOrder = parseInt(e.target.value.charAt(0));
    }

    setOrder(newOrder);

    // Set the 'order' value in the form using setValue from useForm
    setValue('order', newOrder);
  };


  return {
    handleSubmit,
    register,
    success,
    onSubmit,
    setValue,
    formState: { errors }, optionsByLevel, educationLevel, name, order, handleInputChangeFirstName, handleInputChangeLastName, handleLevelChange, handleSubLevelChange, errorFirstName, errorLastName
  };
};

export default useAddLearner;
