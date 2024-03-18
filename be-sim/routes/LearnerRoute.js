const express = require('express');
const router = express.Router();
let Learner = require('../models/Learner');
let Level=require('../models/level')


router.get('/', async (req, res) => {
    try {
      //const club=req.params.club;
      //const club="clubb";
  
      //  const Events = await Event.find();
      const Events = await Event.find();
  
      res.status(200).json(Events);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  // console.log(req.query.levelOrder, req.query.education_level);

        // const Learners=await Learner.find({ user_id: 123456789 }).populate('level');
        // console.log(Learners)
        // const learnerss=[]
        // if(!req.query.education_level&& !req.query.levelOrder)
        // {
        //     res.status(200).json(Learners)
            
        // }
        // else{

        // // Iterate through learners to organize data by levelOrder
        // Learners.forEach(learner => {
        //     if (learner.level.education_level === education_level &&
        //         learner.level.name === req.query.levelOrder) {
        //         learnerss.push(learner);
        //     }
        // });

        // console.log("Number of matching learners:", learnerss.length);

        // // Send the response after collecting all matching learners
        // res.status(200).json(learnerss);

        // }
        router.get('/getAllLearners',async(req,res)=>{
            try {
                const learners = await Learner.find({ user_id: 123456789 }).populate('level');
                res.status(200).json(learners);

            } catch (error) {
                console.log(console.error)
                res.status(500).json(error);

            }
        })

router.get('/getLearners',async(req,res)=>{
    try{
      
            const education_level=req.query.education_level;
            const levelOrder=req.query.levelOrder
            console.log(education_level,levelOrder)
            let learnerss=[];
     const learners = await Learner.find({ user_id: 123456789 }).populate('level');
    
        learners.forEach(learner => {
            if (learner.level.education_level === education_level&& learner.level.name===levelOrder) {
                
                learnerss.push(learner);

            
                }
    
            }
        );
    
        res.status(200).json(learnerss);
    
    

    }catch(error){
res.status(500).json(error);
    }
})

router.post('/CreateLearner',async(req,res)=>{
   
    try {
        //creation du level
        levelDocument = await Level.create({
             education_level: req.body.education_level,
            order:req.body.order,
            name:req.body.name,
           
            
            });
            //creation du learner et assign level
        await Learner.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            type:req.body.type,
            level:levelDocument._id,
             user_id:req.body.user_id

        })
        console.log('Level created:', levelDocument);
        res.status(200).json({message:"Etudiant ajouté avec succès"})
    } catch (error) {
        console.error('Error creating Level:', error);
        res.status(500).json(error);
        console.log(error);
    }
})

router.route('/getLearner').get(async (req, res) => {
    try {
      const learner = await Learner.findById(req.query.id).populate('level');
      res.send(learner);
      console.log(learner)
    } catch (error) {
      console.error(error);
      console.log(error)
      res.status(500).send({ message: 'Internal server error' });
    }
  });
  router.route('/getSchoolLearners').get(async (req, res) => {
    try {

      const learner = await Learner.findById(req.query.id).populate('level');
      res.send(learner);
      console.log(learner)
    } catch (error) {
      console.error(error);
      console.log(error)
      res.status(500).send({ message: 'Internal server error' });
    }
  });

  router.route('/getSubLevelsByLevel').get(async (req, res) => {

   
//     const education_level=req.query.education_level;
//     // const learners = await Learner.find({ user_id: 123456789 }).populate('level');
//     const learners = await Learner.find({ user_id: 123456789 }).populate('level');

// try {
//     // Create an object to store the levelOrder occurrences
//     const levelOrderOccurrences = {};

//     // Iterate through learners to count levelOrder occurrences
//     learners.forEach(learner => {
// if(learner.level.education_level=== education_level)
// {
//         const levelOrder = learner.level.name;
//         if (levelOrder in levelOrderOccurrences) {
//             levelOrderOccurrences[levelOrder]++;
//         } else {
//             levelOrderOccurrences[levelOrder] = 1;
//         }
//     }
//     });

//     // Now you can send the levelOrderOccurrences object to the frontend
//     res.json({ levelOrderOccurrences });
//     console.log(levelOrderOccurrences);
// } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred while processing the data.' });
// }
const education_level = req.query.education_level;
const learners = await Learner.find({ user_id: 123456789 }).populate('level');

try {
    // Create an object to store the levelOrder occurrences and associated learners
    const levelOrderData = {};

    // Iterate through learners to organize data by levelOrder
    learners.forEach(learner => {
        if (learner.level.education_level === education_level) {
            const levelOrder = learner.level.name;

            if (!levelOrderData[levelOrder]) {
                levelOrderData[levelOrder] = {
                    count: 0,
                    learners: []
                };
            }

            levelOrderData[levelOrder].count++;
            levelOrderData[levelOrder].learners.push(learner);
        }
    });

    // Now you can send the levelOrderData object to the frontend
    res.json({ levelOrderData });
    console.log(levelOrderData);
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while processing the data.' });
}

    
  });
  
// router.route('/UpdateLearner').put(async (req, res) => {
//     try {
     
//       const id=req.body.id;
//       const updates=req.body;
//   console.log(updates)

//       const result = await Learner.findByIdAndUpdate(
//         id,
        
//         updates,
//         { new: true }
//       );
//       if (result == null) {
//         throw new Exception();
//       }
//       console.log(result)
//       res.json(result);
//     } catch (err) {
//      // res.status(500).json({ error: err.message });
//      console.log(err);
//     }
//   });


router.route('/UpdateLearner').put(async (req, res) => {
    // try {
    //     const id = req.body.id;
    //     const updates = {};

    //     if (req.body.firstName) {
    //         updates.first_name = req.body.firstName;
    //     }

    //     if (req.body.lastName) {
    //         updates.last_name = req.body.lastName;
    //     }

    //     if (req.body.type) {
    //         updates.type = req.body.type;
    //     }
    


        
    //     console.log(updates);

    //     const result = await Learner.findByIdAndUpdate(
    //         id,
    //         updates,
    //         { new: true }
    //     );

    //     if (result == null) {
    //         throw new Error('Learner not found');
    //     }

    //     console.log('Updated learner:', result);
    //     // res.json(result);
    //     res.status(200).json({message:"Apprenant modifié avec succès"})

    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json({ error: 'Something went wrong' });
    // }
    try {
        const id = req.body.id;
        const updates = {};
    
        if (req.body.firstName) {
            updates.first_name = req.body.firstName;
        }
    
        if (req.body.lastName) {
            updates.last_name = req.body.lastName;
        }
    
        if (req.body.type) {
            updates.type = req.body.type;
        }
    
        // Assuming the request body contains the level information
        if (req.body.education_level || req.body.order || req.body.name) {
            const learner = await Learner.findById(id);
            
            if (!learner) {
                throw new Error('Learner not found');
            }
    
            const levelUpdates = {};
    
            if (req.body.education_level) {
                levelUpdates.education_level = req.body.education_level;
            }
    
            if (req.body.order) {
                levelUpdates.order = req.body.order;
            }
    
            if (req.body.name) {
                levelUpdates.name = req.body.name;
            }
    
            const updatedLevel = await Level.findOneAndUpdate(
                { _id: learner.level },
                levelUpdates,
                { new: true }
            );
    
            if (!updatedLevel) {
                throw new Error('Level not found');
            }
        }
    
        console.log(updates);
    
        const result = await Learner.findByIdAndUpdate(
            id,
            updates,
            { new: true }
        );
    
        if (!result) {
            throw new Error('Learner not found');
        }
    
        console.log('Updated learner:', result);
        res.status(200).json({ message: "Apprenant modifié avec succès" });
    
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
    
});

module.exports = router;
