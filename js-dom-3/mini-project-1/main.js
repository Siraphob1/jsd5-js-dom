let card_Fullname = document.querySelector('#card-Fullname');
let card_BirthDate = document.querySelector('#card-BirthDate');
let card_ExpirationDate = document.querySelector('#card-ExpirationDate');
let card_License = document.querySelector('#card-License');
let card_State = document.querySelector('#card-State');
let card_Image = document.querySelector('#card-Image');


let input_Fullname = document.querySelector('#input-Fullname');
let input_Date = document.querySelector('#input-Date');
let input_License = document.querySelector('#input-License');
let input_State = document.querySelector('#input-State');
let input_Image = document.querySelector('#input-Image');


function SubmitInput(event){
    event.preventDefault(); 

    card_Fullname.innerText = `${input_Fullname.value}`;    
    card_BirthDate.innerText = FormatDate()
    card_License.innerText = `License No: ${input_License.value}`;
    card_State.innerText =`State: ${input_State.value}`;
    //card_Image.src = URL.createObjectURL(input_Image.files[0]) 
    card_Image.src = input_Image.value
    card_Image.style.height = 'auto'
       // card_Image.setAttribute('src',`${input_Image.files[0]}`)
    console.log(`image: ${input_Image}`)
}


function FormatDate(){
    let tempdate = input_Date.value.split('-')
    let year = tempdate[0]
    let month = tempdate[1]
    let day = tempdate[2]
    return `Date of Birth: ${day} / ${month} / ${year}`;
}

