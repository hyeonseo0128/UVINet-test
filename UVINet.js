const {exec} = require('child_process');
exec("sudo ./mavlink-test", (error, stdout, stderr) => {
    if (error) {  
        console.log('OS is Windows');
    }
    console.log(stdout);
});