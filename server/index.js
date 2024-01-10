require('dotenv').config();
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const axios =require('axios');
const {Configuration,OpenAIApi}=require('openai')

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended :true}));


app.listen(3000,()=>{
    console.log(`server is running.... http://localhost:3000`);
})

app.get("/",(req,res)=>{
    res.send("hi andi hi");
})


app.post('/', async (req, res)=>{
  const {message}= req.body;
  const options = {
    method: 'POST',
    url: 'https://open-ai21.p.rapidapi.com/conversationgpt',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '1655a8f34bmsh056234229340566p1a60a1jsn002269f555a2',
      'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
    },
    data: {
      messages: [
        {
          role: 'user',
          content: `${message}`
        }
      ],
      web_access: false
    }
  };
  
  
  
  const main=async()=>{
  try {
    const response = await axios.request(options);
    console.log(response.data.result)
    res.json({message:response.data.result})
  } catch (e) {
    res.json({message:"sorry for inconveinence plz try after sometime"})
  }
  }
  
  main();

});

