

function setLocalStorage(value){
    localStorage.setItem("authvalue",JSON.stringify(value))
}


function getLocalStorage(){
    const data = localStorage.getItem("authvalue");
    return JSON.parse(data);
}

function removeLocalStorage(){
    localStorage.removeItem("authvalue")
}

export default {setLocalStorage , getLocalStorage , removeLocalStorage}