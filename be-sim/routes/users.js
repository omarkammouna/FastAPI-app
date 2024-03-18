const router = require('express').Router();
let User = require('../models/user');
const bcrypt = require('bcryptjs');
const nanoid = require('nanoid');
const axios = require('axios');
let  resetcode='';


router.route('/RecoverPassword').post(async (req, res) => {
  const { email,user_name, phone_number } = req.body;
let method=0;
console.log(email,user_name,phone_number)

  try {
     const user = await User.findOne({
      $and: [
        { $and: [{ email: { $ne: null } }, { number: { $ne: null } }, { username: { $ne: null } }] },
        { $or: [{ email: email }, { number: phone_number }, { username: user_name }] }
      ]
    });
console.log(user)
if (!user || (!user.email && !user.number)) {     
      return res.status(404).json({ error: 'Utilisateur introuvable' });
    }
    else{ if (user.email && user.number) {
      method = 3;
    } else if (user.email) {
      method = 1;
    } else if (user.number) {
      method = 2;
    }
    const id = user._id;
    console.log(user);
    return res.status(200).json({ id, message: 'Compte vérifié' ,method});

    }
   
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.route('/RecoverPassword/SendCode').post(async (req, res) => {
const {user_id,method}=req.body;

//console.log("dkhalna")
const user=await User.findById(user_id);
//console.log(user);
if (!user) {
  //  console.log("fammech")
    return res.status(404).json({ error: 'Utilisateur introuvable' });
   
    }
  
      resetcode=nanoid(5).toUpperCase();
      console.log(resetcode);
      if(method===1)
      {
        console.log("method1")
        return res.status(200).json({ message: 'Code envoyé à votre adresse email avec succès!' });
        

      }else if(method===2)
      {
        console.log("method2")
        return res.status(200).json({ message: 'Code envoyé à votre téléphone avec succès!' });

      }

 
});

router.route('/RecoverPassword/Check').post(async (req, res) => {
  const {user_id,code}=req.body;
  // console.log("dkhalna")
  console.log(code)
  console.log(resetcode)
 if (code!==resetcode){
  return res.status(404).json({ error: 'Code non vérifié' });

 }
  //console.log(user);
 
            return res.status(200).json({ message: 'Code vérifié avec succès! ' });
  
    
    
  
  
  
  });


  router.route('/RecoverPassword/Confirm').put(async (req, res) => {
    try {
     
      const id = req.body.id;
      const password = req.body.password;
      console.log(id,password)
  
     
      const newPassword = await bcrypt.hash(password, 10);
      const result = await User.findByIdAndUpdate(
      id,
        
        { password: newPassword },
        { new: true }
      );
      if (result == null) {
        throw new Exception();
      }
      //res.json(result);
      return res.status(200).json({ message: 'Mot de passe mis à jour avec succès! ' });

    } catch (err) {
     // res.status(500).json({ error: err.message });
     console.log(err);
    }
  });
module.exports = router;
