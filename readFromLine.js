let readline=require("readline")
let val=readline.Interface({
    input:process.stdin,
    output:process.stdout
})
val.question("Enter Your Name:",ans=>{
    console.log(`Hello ${ans}`)
    val.close()
})