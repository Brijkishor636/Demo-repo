const express = require("express");

const app = express();
const port = 3001;
app.use(express.json());

app.get('/', function(req, res){
    const n = req.query.n;
    const answer = sum(n);
    
    console.log("Sum of " + n + " numbers is : " + answer);
    res.json({
        ans : answer
    })

})

function sum(n){
    let ans = 0;
    for(let i = 0; i <= n; i++){
        ans = ans + i;
    }
    return ans;
}


app.listen(port);