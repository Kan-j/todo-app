const themeSwitcher = document.querySelector('.theme-switcher')
const bannerImage = document.querySelector('.background-top')
const themeIconLight = document.querySelector('.moon')
const themeIconDark = document.querySelector('.sun')
const body = document.querySelector('body')
const todoItemDiv = document.querySelector('.todo-item-div')
const todoInputDiv = document.querySelector('.todo-input-Div')
const todoFooter = document.querySelector('.todo-footer')
const todoInput = document.querySelector('.todo-input')


themeSwitcher.addEventListener('click',()=> {
    bannerImage.style.background = "images/bg-desktop-dark.jpg"
    bannerImage.classList.toggle('light-mode')
    bannerImage.classList.toggle('dark-mode')

    if(bannerImage.classList.contains('dark-mode')){
            themeIconDark.style.display = 'inline-block'
            themeIconLight.style.display = 'none'
    }else{
        themeIconDark.style.display = 'none'
            themeIconLight.style.display = 'inline-block'
    }

    body.classList.toggle('.light-mode__background')
    body.classList.toggle('dark-mode__background')

    todoItemDiv.classList.toggle('light-mode-main__background')
    todoItemDiv.classList.toggle('dark-mode-main__background')

    todoFooter.classList.toggle('light-mode-main__background')
    todoFooter.classList.toggle('dark-mode-main__background')
    
    todoInputDiv.classList.toggle('light-mode-main__background')
    todoInputDiv.classList.toggle('dark-mode-main__background')


    todoInput.classList.toggle('light-mode-main__background')
    todoInput.classList.toggle('dark-mode-main__background')


    console.log(body);
})