function task1()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const completed1=true;

            if(completed1)
           resolve("task1 completed");
           else
           reject("task1 is not completd");
            
        }, 2000);
    })
    
}
function task2()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const completed2=true;

            if(completed2)
           resolve("task2 completed");
           else
           reject("task2 is not completd");
        }, 2000);
    })
    
}
function task3()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const completed3=true;

            if(completed3)
           resolve("task3 completed");
           else
           reject("task3 is not completd");
           
        }, 2000);
    })
};
 async function result()
{
      const result1=await task1();
      console.log(result1);
      const result2=await task2();
      console.log(result2);
      const result3=await task3();
      console.log(result3);
}
result();