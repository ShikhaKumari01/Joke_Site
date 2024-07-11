let input=document.querySelector('.fetchText');
let clickBtn=document.querySelector('.btn');
const apiUrl="https://hindi-jokes-api.onrender.com/jokes?api_key=50164cc21479a1e8249b56a0ee04";
const handleClick=async ()=>{
    try{
        const res=await fetch(apiUrl,{
            headers:{
                Accept:"application/json"
            }
        });
        const data=await res.json();
        input.innerHTML=data.jokeContent;

    }catch(error){
        input.textContent="API is not working :(";
    }
}
handleClick();
clickBtn.addEventListener('click',handleClick);