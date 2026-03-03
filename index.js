// 1) Use npm to install ejs in the terminal


// 2) create a views and a public folder



// 3) In your public folder create an index.html and add your code from the planning document 
// You can also add your CSS files here too if applicable 




// 4) Now in your views folder create your EJS file and add your HTML code from your planning document



const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})


// 5) Paste in your data array of objects from the planning documents here. 
const decisions = [
    {
        studentName: "Lucas Gomez",
        university: "Princeton University",
        major: "Operations Research and Financial Engineering",
        decisionType: "Regular Decision",
        reason: "Strong quantitative focus and top-tier finance placement.",
        location: "Princeton, NJ",
        image: "/images/princeton.jpeg"
    },
    {
        studentName: "Maya Patel",
        university: "Harvard University",
        major: "Government",
        decisionType: "Early Action",
        reason: "Strong public policy programs and global influence.",
        location: "Cambridge, MA",
        image: "/images/harvard.jpeg"
    },
    {
        studentName: "Ethan Chen",
        university: "MIT",
        major: "Computer Science",
        decisionType: "Regular Decision",
        reason: "Cutting-edge innovation and tech entrepreneurship.",
        location: "Cambridge, MA",
        image: "/images/mit.png"
    },
    {
        studentName: "Sofia Martinez",
        university: "Stanford University",
        major: "Biomedical Engineering",
        decisionType: "Early Decision",
        reason: "Strong research opportunities and startup culture.",
        location: "Stanford, CA",
        image: "/images/stanford.png"
    },
    {
        studentName: "Daniel Kim",
        university: "University of Chicago",
        major: "Economics",
        decisionType: "Regular Decision",
        reason: "NYC access and strong finance pipeline.",
        location: "New York, NY",
        image: "/images/uchicago.png"
    }
]




// 6) Add static file middleware here
app.use(express.static('public'))

// 7) Set the view engine to ejs here
app.set('view engine','ejs')

// 8) Create a route handler to path / and send your index.html 
// run your server with node index.js to test it
app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/decisions',(req,res)=>{
    res.render('decisions',{decisions:decisions})
})

app.use((req,res)=>{
    res.status(404).render('404 Page Not Found')
})

// 9) Create a route handler to your overview route from your planning document
// Pass in your data array




// 10) Go to your EJS file and turn the HTML into EJS
// Test and run your server then submit if working (git add . git commit -m 'message' git push)


app.listen(3000, ()=> {
    console.log("Server Started")
})