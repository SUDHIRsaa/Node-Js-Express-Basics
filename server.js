const express= require('express');

const fs=require('fs');


const app=express();
app.use(express.json()); // Add this line at the top, after creating 'app'

app.get('/',(req,res)=>{
    res.send('GET: hello');
   
});

app.get('/users', (req, res) => {
    fs.readFile('./MOCK_DATA.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading CSV file');
        }

        res.send(JSON.parse(data)) // Log the raw CSV data for debugging.
    });
});
app.get('/users/:id', (req, res) => {
    fs.readFile('./MOCK_DATA.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading JSON file');
        }
        const users = JSON.parse(data);
        const user = users.find(u => String(u.id) === req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    });
});

app.post('/post',(req,res)=>{
    res.send('POST: hello');
});

app.post('/users', (req, res) => {
  const body = req.body;
  console.log(body); // Log the request body for debugging.
  fs.readFile('./MOCK_DATA.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading JSON file');
    }
    let users = JSON.parse(data);
    const newUser = {
      id: users.length + 1,
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      ip_address: body.ip_address
    };
    users.push(newUser);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing JSON file');
      }
      res.status(201).json(newUser);
    });
  });
});


app.delete('/delete',(req,res)=>{
    res.send('DELETE: hello');
});
app.delete('/users/:id', (req, res) => {
    fs.readdirSync('./MOCK_DATA.json', 'utf8', (err, data) => {
    if(err) {
        return res.status(500).send('Error reading JSON file');
    }
    const users = JSON.parse(data);
    const newUsers = users.filter(u => String(u.id) !== req.params.id);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(newUsers, null, 2), (err) => {
        if (err) {
            return res.status(500).send('Error writing JSON file');
        }
        res.status(204).send();
    });
});
});

app.use((req,res)=>{
    res.status(404).send('Not Found');
});

app.listen(9000,()=>{
    console.log('server is running on port 9000');
});
