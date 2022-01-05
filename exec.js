const axios = require("axios");

process.on("message",async (msg)=>{
    let {target,loops,id} = JSON.parse(msg);
    process.send(`[${id}]:on running`);
    for (let i = 0;i<parseInt(loops);i++){
        try {
            await axios.get(target);
        } catch (error) {
            console.log("Error");
        }
    }
    process.send(`[${id}]:done`);
    process.exit(0);
})