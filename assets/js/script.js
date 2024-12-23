

const acordeonTriggers = document.querySelectorAll('.acordeon .btn-acordeon')


acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) =>{
        const acordeon = trigger.parentElement

        const contentAcordeon = acordeon.querySelector('.acordeon-content')
        const isOpen = acordeon.classList.contains('open')

        if(isOpen){
            acordeon.classList.remove('open')
            contentAcordeon.classList.remove('open')
        }else{
            acordeon.classList.add('open')
            contentAcordeon.classList.add('open')
        }
    })
})