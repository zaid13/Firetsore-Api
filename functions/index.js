const functions = require('firebase-functions');
var app = require('express')();
var bodyParser = require('body-parser')();
var main = app;
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


const courses = [{
    id:1,name:"zaid"},
    {
    id:2,name:"hamza"},
    {
    id:3,name:"bilal"},
        
    
    ];  


// exports.helloWorld = functions.https.onRequest((request, response) => {
 
//     request.param
//     response.send("Hello from Firebase!");


// });


  app.get('/',(req,res)=>{
    res.send("hel  o")
});





app.get('/courses/:id',(req,res)=>{

const course = courses.find(c => c.id === parseInt(req.params.id));
if(!course) res.status(404).send('the course was not found ')


    res.send(course)


})


app.get('/courses/add/:data',(req,res)=>{

     


    course= {
        id:courses.length+1,
        name:req.params['data']
    }
    courses.push(course)
    
    
        res.send(courses)
    
    
    })
    app.get('/courses/get/:data',(req,res)=>{

        const course = courses.find(c => c.id === parseInt(req.params['data']));
        if(!course) res.status(404).send('the course was not found ')
        
        
            res.send(course)
        
    
        })

        app.get('/courses/delete/:id',(req,res)=>{
            const course = courses.find(c =>c.id === parseInt(req.params['data']));
            
            // const schema = {   name:Joi.string().min(2).required() };
        // const result = Joi.validate(req.body, schema);
        
        // if(result.error){ res.status(400).send(result.error.details[0].message  );
        //     return;}
        const l =courses.indexOf(course);
        
        courses.splice(l,1)
        
        
        res.send(courses);
         
        })
        
app.get('/courses',(req,res)=>{

    res.send(courses)
})
const api = functions.https.onRequest(app)

module.exports = {
  api
}
