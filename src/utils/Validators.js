const Validators =  {
  
    validateInput (name, value)  {
        switch (name) {
          case 'familyName':
            return value.trim() === '' ? 'Le nom est requis !' : '';
          case 'name':
            return value.trim() === '' ? 'Le prénom est requis !' : '';
          case 'email':
          return (value === null || value.trim() === '' || /^\S+@\S+\.\S+$/.test(value)) ? '' : 'Adresse e-mail invalide !';
          case 'phoneNumber':
          return (value === null || value.trim() === '' || /^[0-9]{8}$/.test(value)) ? '' : 'Numéro de téléphone invalide !';
          case 'password':
            return value.length < 8 ? 'Le mot de passe doit comporter au moins 8 caractères: Introduire au moin une majuscule, une miniscule, un chiffre et un caractère spécial' : '';
         /* case 'confirmPassword':
            return value === formData.password ? '' : 'vérifier votre mot de passe: Pas de correspondance !';*/
          default:
            return '';
        }
      }

}
export default Validators