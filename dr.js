let menu=document.querySelector('#navMenu')
let nav2=document.querySelector('#nav2')

menu.addEventListener('click',()=>{
  nav2.classList.toggle('nav2')
})
let apt=document.querySelector('.apt')
let abcd=document.querySelector('.abcd')

apt.addEventListener('click',()=>{
  abcd.innerText='hello'
})
let Name=document.querySelector('#name')
let Email=document.querySelector('#Email')
let Mobile=document.querySelector('#Mobile_no')
let Doctor=document.querySelector('#Doctor')
let Gender =document.querySelector('#Gender')
let Description=document.querySelector('#problemArea')

document.getElementById('btn-p').addEventListener('click', () => {
  fetchdata({Name: Name.value, Email: Email.value, Mobile: Mobile.value, Doctor: Doctor.value, Gender: Gender.value, Description: Description.value})
  
  Name.value= "";
  Email.value="";
  Mobile.value="";
  Doctor.value="";
  Gender.value="";
  Description.value=""  
})



const fetchdata = async(data) => {
  const fetchResp = await fetch("http://localhost:5000/forms", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data),
  })
  const resp = await fetchResp.json();
  alert(resp.message)
}