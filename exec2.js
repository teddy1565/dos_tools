const axios = require("axios");

process.on("message",async (msg)=>{
    let {target,loops,id} = JSON.parse(msg);
    process.send(`[${id}]:on running`);
    let p = [];
    for (let i = 0;i<parseInt(loops);i++){
        p.push(axios.get(target));
    }
    Promise.all(p).then((result)=>{
        console.log(result);
        process.send(`[${id}]:done`);
        process.exit(0);
    }).catch((error)=>{
        process.send(`[${id}]:done`);
        process.exit(0);
    });
})