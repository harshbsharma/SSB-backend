require('dotenv').config();
const express = require('express');
const app = express();
const fast2sms = require('fast2sms');
const textflow = require('textflow.js');
const options  = { API_KEY:process.env.API_KEY,

};
fast2sms.init(options);

textflow.useKey(process.env.TEXTFLOW_API_KEY);
app.use(express.json());




app.listen(process.env.PORT,()=>
{
    console.log(`Server live on PORT -> ${process.env.PORT}`)
})

app.post('/send-code',async(req,res)=>
{
    const number = req.body;
    // console.log(typeof(number));
    const ph = number.number;
    // console.log(ph);
    // console.log(typeof(ph))
    // const phone = JSON.stringify(number);
    // console.log(typeof(number));
    // console.log(phone);
    try{
        const response  = await textflow.sendSMS(`+91${ph}`, "Dummy message text...");
        return res.status(200).json({
            response
        })
    }
    catch(err)
    {
        console.log(err);
        return res.status(400);
    }




    // await fast2sms.send({
    //     authorization:process.env.API_KEY,
    //     message:"Hello Testing",
    //     to:['6263937759']
    // }).then(function (data) {
    //     console.log('data................', data);
    //     return res.status(200).json({
    //         data
    //     });
    // }).catch(function (error) {
    //     console.log('err.................', error);
    //     return res.status(400).json(
    //         {
    //             success:false
    //         }
    //     )
    // })

    // try{
    //     const response = await fast2sms.send({
    //         authorization:process.env.API_KEY,
    //         message:"Hello testing",
    //         number:'6263937759'
    //     })
    //     return res.status(200).json({
    //         response
    //     })
    // }
    // catch(err)
    // {
    //     console.log(err);
    //     return res.status(400);
    // }
    
})


// app.get('/',(request,response)=>
// {
//     return response("<h1>Welcome</h1>");
// })