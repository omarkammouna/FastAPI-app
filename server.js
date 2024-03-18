const PORT = 4001
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()
app.use(bodyParser.json());
app.use(cors())




// Handle welcome endpoint proxy
app.get('/', (req, res) => { res.json('welcome to proxy') })

// Handle signup endpoint proxy
app.post('/E_AAAE', async (req, res) => {
    const { name, familyName, email, phoneNumber, password } = req.body;

    try {
        const response = await fetch('http://localhost:4000/UM/Subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, familyName, email, phoneNumber, password }),
        });

        if (!response.ok) {
            const json = await response.json();
            return res.status(response.status).json(json);
        }

        const json = await response.json();
        return res.status(200).json(json);
    } catch (error) {
        console.error('Error during fetch:', error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
});

// Handle welcome endpoint proxy
app.get('/', (req, res) => { res.json('welcome to proxy') })

// Handle fetch users endpoint proxy
app.get('/E_AAAF', (req, res) => {

    const options = {
        method: 'GET',
        url: 'http://localhost:4000/UM/',
        headers: { 'Content-Type': 'application/json' }
    }

    axios.request(options).then((response) => {
        res.json(response.data)

    }).catch((error) => {
        console.error(error)
    })

})

// Handle login endpoint proxy
//test push
app.post('/E_AAAG', async (req, res) => {
    const loginInfo = req.body;

    try {
        const response = await fetch('http://localhost:4000/UM/Login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginInfo),
        });

        if (!response.ok) {
            const json = await response.json();
            return res.status(response.status).json(json);
        }

        const json = await response.json();
        return res.status(200).json(json);
    } catch (error) {
        console.error('Error during fetch:', error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
});


app.post('/E_AAAA', async (req, res) => {


    const { email, user_name, phone_number } = req.body;
    const response = await fetch('http://localhost:5000/api/users/RecoverPassword', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ email, user_name, phone_number }),
    });

    if (!response.ok) {
        const errorMessage = await response.json(); // Get the error message from the response
console.log(errorMessage.error)
        return res.status(response.status).json({ error: errorMessage.error });
    }

    const data = await response.json();
    return res.status(200).json(data);
});



app.post('/E_AAAB', async (req, res) => {
    const { user_id, method } = req.body;

    try {
        const response = await fetch('http://localhost:5000/api/users/RecoverPassword/SendCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id, method }),
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Request failed' });
        }

        const data = await response.json();
        console.log(data.message)
        return res.status(200).json({ message: data.message });
    } catch (error) {
        console.error('Error during fetch:', error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
});




app.post('/E_AAAC', async (req, res) => {
    const { user_id, code } = req.body;

    try {
        const response = await fetch('http://localhost:5000/api/users/RecoverPassword/Check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id, code }),
        });

        if (!response.ok) {
            const errorMessage = await response.json(); // Get the error message from the response
console.log(errorMessage.error)
            return res.status(response.status).json({ error: errorMessage.error});
        }

        const data = await response.json();
        return res.status(200).json({ message: data.message });
    } catch (error) {
        console.error('Error during fetch:', error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
});



app.put('/E_AAAD', async (req, res) => {
    const id = req.body.user_id;
    const password = req.body.password;
    console.log(id);

    try {
        const response = await fetch('http://localhost:5000/api/users/RecoverPassword/Confirm', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, password }),
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Request failed' });
        }

        const data = await response.json();
        return res.status(200).json({ message: data.message });
    } catch (error) {
        console.error('Error during fetch:', error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
});

app.get('/E_AAAI', (req, res) => {
    const levelOrder=req.query.levelOrder
    const education_level=req.query.education_level
    console.log(levelOrder,education_level)
    if (!education_level ) 

    {
        console.log("ddd")
       
    }
    const options = {
        method: 'GET',
        url: `http://localhost:5000/Learners/GetLearners?education_level=${education_level}&levelOrder=${levelOrder}`,
        headers: { 'Content-Type': 'application/json' }
    }

    axios.request(options).then((response) => {
        res.json(response.data)

    }).catch((error) => {
        console.log(error)
    })

})

app.post('/E_AAAM', async (req, res) => {
    const first_name = req.body.firstName;
    const last_name = req.body.lastName;
    const type = req.body.type;
    const education_level = req.body.education_level;
    const name = req.body.name;
    const order = req.body.order
    const user_id=req.body.user_id;

    console.log("jjj" + first_name, last_name, type, order, education_level, name,user_id);

    try {
        const response = await fetch('http://localhost:5000/Learners/CreateLearner', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ first_name, last_name, type, name, order, education_level,user_id }),
        });
        const data = await response.json();
        if (!response.ok) {
            return res.status(response.status).json({ error: data.error });
        }

        // const data = await response.json();
        return res.status(200).json({ message: data.message });
    } catch (error) {
        console.error('Error during fetch:', error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
});

app.get('/E_AAAJ', (req, res) => {
    const id = req.query.id;
   
    const options = {
        method: 'GET',
        url: `http://localhost:5000/Learners/GetLearner?id=${id}`,
        headers: { 'Content-Type': 'application/json' }
    }

    axios.request(options).then((response) => {
        res.json(response.data)

    }).catch((error) => {
        console.error(error)
    })

})

app.put('/E_AAAK', async (req, res) => {

    const inf = req.body;
    console.log(inf)

    try {
        const response = await fetch(`http://localhost:5000/Learners/UpdateLearner`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inf),
        });
        const data = await response.json();
        if (!response.ok) {
            return res.status(response.status).json({ error: data.error });
        }

        // const data = await response.json();
        return res.status(200).json({ message: data.message });
    } catch (error) {
        console.error('Error during fetch:', error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
});


app.listen(PORT, () => { console.log(`server is running on port ${PORT}`) })
