console.log('Clinet side javascript file is loaded!.')


// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//       response.json().then((data)=>{
//           console.log(data)
//       })
// })



const weatherForm = document.querySelector('form')
const search = document.querySelector ('input')
const messageOne = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) =>{
   e.preventDefault()
   
   const location = search.value

   messageOne.textContent = 'Loading..'
   message2.textContent =''

   fetch('http://localhost:3000/weather?address=' + location).then((response)=>{
      response.json().then((data)=>{
         if (data.error){
           
            messageOne.textContent = data.error
         
         } else { 
            messageOne.textContent = data.location
            message2.textContent = data.forecast
            }
                  
        })
})
})