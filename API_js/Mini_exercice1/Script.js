const apiEndPoint="https://jsonplaceholder.typicode.com/users";
const display =document.querySelector("#display-data");
const input =document.querySelector("#input");


const getData = async ()=>{
 const res  =await fetch(apiEndPoint);
 console.log(res)
 const data =await res.json();
 return data
 

}

const displayUsers =async()=>{
    let query= input.value;
    console.log("query ::", query);

    const payload= await getData();

    let dataDisplay =payload.filter((eventData) => {
        if(query === ""){
            return eventData
        }
        else if(eventData.name){

         return eventData;
        }


    }).map((object)=>{
        const{name,username}=object;
        return`
        <div class="container">
        <p> Name: ${name}</p>
        <p>Username :${username}</p>
        </div>
        `


    }).join("");

    display.innerHTML=dataDisplay;

}
displayUsers();
input.addEventListener("input",()=>{
    displayUsers();

});