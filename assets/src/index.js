const navBtn = document.querySelector('.nav-btn')
const nav = document.querySelector('.nav')

const serviceBox = document.querySelector('.services')


const services = [
    {
        name: 'Recycling',
        img: 'bin',
        description: 'We collect and recycle items.' + '\n '+ 'We make products reusable'
    },
    {
        name: 'Taking care',
        img: 'world',
        description: 'By simple activites, we care about the good of our planet'
    },
    {
        name: 'Production',
        img: 'energy',
        description: 'We produce and supply energy only from renewable sources'
    },
    {
        name: 'Instruction',
        img: 'book',
        description: 'We share the knowledge that will save our planet'
    }
]

const links = document.querySelectorAll('[data-link]')
links.forEach(link => {
    link.addEventListener('click', () => {
        const target = link.dataset.link
        const elem = document.querySelector(`[data-location=${target}]`)
        elem.scrollIntoView({behavior:'smooth'})
    })
})
const navLogo = document.querySelector('.nav-logo')
navLogo.addEventListener('click',() => {
    document.body.scrollIntoView({behavior: 'smooth'})
})
services.forEach(service => {
    serviceBox.innerHTML += `
        <div class="service">
            <img src="./assets/svg/${service.img}.svg" alt="${service.img}" class="service__img">
            <div>
                <h3 class="service__title">${service.name}</h3>
                <p class="service__text">${service.description}</p>
            </div>
        </div>
    `
})

navBtn.addEventListener('click', e => {
    
    if(!nav.classList.contains('nav--opened')) {
        nav.classList.add('nav--opened')
        document.body.classList.add('overflow--hidden')
    }
    else {
        nav.classList.remove('nav--opened')
        document.body.classList.remove('overflow--hidden')
    }
    
}, false)

const menuLinks = document.querySelectorAll('.menu__item')
menuLinks.forEach(link => {
    link.addEventListener('click', e => {
        if(nav.classList.contains('nav--opened')) {
            nav.classList.remove('nav--opened')
            document.body.classList.remove('overflow--hidden')
        }
    })
})


window.addEventListener('scroll', function(){
    const scroll_value = document.body.scrollTop || document.documentElement.scrollTop
    const one = window.innerHeight / 100;
    scroll_value > one ? nav.classList.add('nav--scrolled') : nav.classList.remove('nav--scrolled')
})