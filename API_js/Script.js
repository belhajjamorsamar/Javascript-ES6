const apiEndPoint="https://jsonplaceholder.typicode.com/users";
const display =document.querySelector("#display-data");
const getData =async ()=>{
 const res =await fetch(apiEndPoint);
const data =await res.json();
return data;

}

const displayUsers =async()=>{

    const payload= await getData();
    let dataDisplay=payload.map((object)=>{
        console.log(object);
        const{name,username}=object;
        return `
        <div class="container">
        <p> Name: ${name}</p>
        <p>Username :${username}</p>
        </div>
        `


    }).join("");

    display.innerHTML=dataDisplay;

}
displayUsers();