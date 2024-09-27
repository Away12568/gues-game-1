const input = document.querySelector("#input")
const  result = document.querySelector("#result")
const btn = document.querySelector(".btn")




let randomNumber = Math.floor(Math.random() * 100) + 1

btn.addEventListener("click" , () => {
    const userGues =  Number(input.value )


    if (!userGues || userGues < 1 || userGues > 100 ) {
        result.innerText = "введите число от 1 до 100"
        input.value = ""
    }
    else if (userGues == randomNumber ) {

            result.innerText = "вы выйграли🥇"
            input.value = ""
            setTimeout(() => {
            randomNumber = Math.floor(Math.random() * 100) + 1   
                 result.innerText = "загаданное число обновлено🤣"
            }, 3000);
           
    }
    
    else if (userGues < randomNumber ) {
               result.innerText =` число ${userGues} больше🔼`
                 input.value = ""
    }
    else {
        result.innerText =` число ${userGues} меньше🔽`
          input.value = ""
}
})

console.log(randomNumber);
