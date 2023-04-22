function saveToLocalStorage(event){
    event.preventDefault();
    console.log("hi")
    
    const firstName =event.target.fname.value;
    const lastName =event.target.lname.value;
    const email =event.target.email.value;
    const phoneNo =event.target.phone.value;
    const Time =event.target.time.value;
    const Date =event.target.date.value;
    


const obj ={
    firstName,
    lastName ,
    email,
    phoneNo,
    Time,
    Date
}
console.log(obj)


localStorage.setItem(obj.email , JSON.stringify(obj))

axios.post("https://crudcrud.com/api/18369d96034e4dfaa559786e119ffa46/AppointmentData" ,obj)
.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
})


}
// window.addEventListener("DOMContentLoaded" ,()=>{
//     const LocalStorageObj =localStorage;
//     const localstoragekeys=Object.keys(LocalStorageObj)

//     for(var i=0 ; i<localstoragekeys.length ; i++){
//         const key=localstoragekeys[i];
//         const userDetailstring =LocalStorageObj[key];
//         const userDetailsobj = JSON.parse(userDetailstring);

//     }

// })
