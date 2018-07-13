const fetch = require("node-fetch")

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>{
// setTimeout(resolve,2000,'GoodBye')});
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json());


// //.all will collect values in an array. It takes time equivalent to longest promise
// Promise.all([promise1,promise2,promise3,promise4]).then((values)=>console.log(values));


async function foo()
{
    //fetch returns a promise resolved to API data. It is .then converted to json
    let fetchedcontent = await fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json());

    return fetchedcontent;
    //fetchedcontent has to be returned as data in resolved async. By default async will return promise
}

//since foo resolved to some data, it can be succeeded by .then.
foo().then((data)=>console.log(data));


