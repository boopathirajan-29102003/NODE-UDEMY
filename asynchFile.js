const {readFile,writeFile}=require('fs')

readFile('./content/first','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first =result;
    
    readFile('./content/second','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second=result;

    writeFile(
    './content/async.txt',
    `here is result: ${first} ${second}`,
    (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
    }
)

})

})

