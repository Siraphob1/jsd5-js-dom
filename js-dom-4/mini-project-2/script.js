//input
let input_name = document.querySelector('#input_name');
let input_age = document.querySelector('#input_age');
let input_weight = document.querySelector('#input_weight');
let input_running = document.querySelector('#input_running');

//display
let display_name = document.querySelector('#display_name');
let display_age = document.querySelector('#display_age');
let display_weight = document.querySelector('#display_weight');
let display_current = document.querySelector('#display_current');
let display_goodrunning = document.querySelector('#display_goodrunning');
input_age.textContent




let SubmitFunction = (event) =>{
    event.preventDefault()

    let tbody = document.querySelector('#section-table-tbody')
    tbody.innerHTML += `
    <tr>
        <td>${input_name.value}</td>
        <td>${input_age.value}</td>
        <td>${input_weight.value}</td>
        <td>${input_running.value}</td>
        <td>${CalResultRunning(input_running.value)}</td>        
    </tr>`
    ResetInputfield() 
}

let CalResultRunning = (running_minute) =>{
    running_minute = parseInt(running_minute)

    if(typeof running_minute == 'number'){
        if(running_minute >= 61){
            return  'extreme'
        }
        else if(running_minute >= 31 && running_minute <= 60){
            return   'balance'
        }
        else if(running_minute >= 0 && running_minute<= 30){
            return   'good'
        }
        else {
            return   'Current Running (Minutes) must >0 '
        }
    }
}

let ResetInputfield = () =>{
     input_name.value = ''
     input_age.value = ''
     input_weight.value = ''
     input_running.value = ''
} 