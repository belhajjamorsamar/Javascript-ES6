const apiEndPoint="https://jsonplaceholder.typicode.com/users";

const getData =async ()=>{
 const res =await fetch(apiEndPoint);
 if(!Response.ok){
    throw new Error (`HTTP error! status: ${response.status}`);
 }
 const data =await res.json();
 console.log(data)
}
getData();