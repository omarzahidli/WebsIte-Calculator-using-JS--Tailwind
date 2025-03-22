const langDrop = document.getElementById('langDrop')
const langDown = document.getElementById('langDown')
const menuToggle = document.getElementById('menuToggle')
const menu = document.getElementById('menu')
menuToggle.onclick = () => {
    menu.classList.toggle('hidden')
}
menu.onclick = () => {
    menu.classList.toggle('hidden')
}
dropDown()
showOption(document.querySelector('#langDown span:first-child'), 'az')
langDrop.onclick = () => {
    if (!currDown.classList.contains('hidden')) {
        currDown.classList.toggle('hidden')
    }
    langDown.classList.toggle('hidden')
}
function dropDown() {
    let kod = ''
    kod += `<span id='az' onclick="showOption(this, this.id)" class="block py-2 px-4"><img class="w-[24px] h-[16px]" src="img/az.jpg" alt="AZ" /></span>
            <span id='usa' onclick="showOption(this, this.id)" class="block py-2 px-4"><img class="w-[24px] h-[16px]" src="img/usa.jpg" alt="US" /></span>`
    langDown.innerHTML = kod
}
function showOption(arg, id) {
    let shownOption = document.querySelector('#langDrop span:first-child')
    shownOption.innerHTML = arg.innerHTML
    let selections = document.querySelectorAll('#langDown > *') 
    for (i of selections) {
        i.classList.remove('selected')
    }
    let selectedOption = document.getElementById(`${id}`)
    selectedOption.classList.add('selected')
}

const currDrop = document.getElementById('currDrop')
const currDown = document.getElementById('currDown')
dropDownCurr()
showOptionCurr(document.querySelector('#currDown span:first-child'), 'AZN')
currDrop.onclick = () => {
    if (!langDown.classList.contains('hidden')) {
        langDown.classList.toggle('hidden')
    }
    currDown.classList.toggle('hidden')
}
function dropDownCurr() {
    let kod = ''
    kod += `<span id='AZN' onclick="showOptionCurr(this, this.id)" class="py-2 px-4"><i class="text-xl fa-solid fa-manat-sign"></i></span>
            <span id='USD' onclick="showOptionCurr(this, this.id)" class="py-2 px-4"><i class="text-xl fa-solid fa-dollar-sign"></i></span>`
    currDown.innerHTML = kod
}
function showOptionCurr(arg, id) {
    let shownOption = document.querySelector('#currDrop span:first-child')
    shownOption.innerHTML = arg.innerHTML
    let selections = document.querySelectorAll('#currDown > *') 
    for (i of selections) {
        i.classList.remove('selected')
    }
    let selectedOption = document.getElementById(`${id}`)
    selectedOption.classList.add('selected')
}
const head = document.querySelectorAll('#heads > div')

function flate(arg) {
    let down = arg.querySelector('div')
    
    head.forEach(element => {
            element.querySelector('span').classList.remove('head-after')
            if (element.querySelector('div') != down)  
                element.querySelector('div').classList.add('hidden')
        });
    down.classList.toggle('hidden')
    if (down.classList.contains('hidden')) arg.querySelector('span').classList.remove('head-after')
    else arg.querySelector('span').classList.add('head-after')
}
const pageCount = document.getElementById('pageCount')
const pageQuallity = document.getElementById('pageQuallity')
const pageDetails = document.getElementById('pageDetails')

const ecommerceEnd = document.getElementById('ecommerceEnd')
const addOnsEnd = document.getElementById('addOnsEnd')
const pageEnd = document.getElementById('pageEnd')
const logoEnd = document.getElementById('logoEnd')
const seoEnd = document.getElementById('seoEnd')
const total = document.getElementById('total')

let calcPageDetails = () => {
    if (pageQuallity.value == 1) { pageQuallity.price = 100 }
    else if (pageQuallity.value == 2) { pageQuallity.price = 200 }
    else if (pageQuallity.value == 3) { pageQuallity.price = 300 }
    let kod = ''
    let fullPrice = '₼ ' + pageCount.value*pageQuallity.price
    kod = `${pageCount.value} səhifə / ${fullPrice}`
    pageDetails.innerHTML = kod
    pageEnd.innerHTML = fullPrice
    calcTotal()
}
calcPageDetails()
pageCount.oninput = calcPageDetails
pageQuallity.oninput = calcPageDetails

const webSiteAddOns = document.getElementById('webSiteAddOns')
const addOnsPrice = document.getElementById('addOnsPrice')
function renderAddons() {
    let kod = ''
    product[0].forEach(elm => {
        kod += `<label onclick="calcAddOnsPrice()" class="relative xl:items-center gap-x-2 flex cursor-pointer justify-between">
                    <div class="w-3/4"><span class="text-sm font-medium text-gray-900">${elm.name}</span></div>
                    <div>
                        <input class="sr-only peer" type="checkbox" name="Bloq" value=${elm.price}>
                        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white  after:content-['']  after:absolute  after:top-0.5  after:right-[22px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5  after:w-5 after:transition-all duration-300 after:duration-300 peer-checked:bg-mainLightPurple">
                        </div>
                    </div>
                </label>`
    })
    webSiteAddOns.innerHTML = kod
}
renderAddons()

function calcAddOnsPrice() {
    const totalSum = [...webSiteAddOns.querySelectorAll('label > div > input')]
    .reduce((sum, element) => {
        if (element.checked) sum += Number(element.value)
        return sum
    }, 0);
    addOnsPrice.innerHTML = '₼ ' + totalSum
    addOnsEnd.innerHTML = '₼ ' + totalSum
    calcTotal()
}
calcAddOnsPrice()

const seo = document.getElementById('seo')
const seoPrice = document.getElementById('seoPrice')

function renderSeo() {
    let kod = ''
    product[1].forEach(elm => {
        kod += `<div onclick="calcSeoPrice()" class="inline-flex items-center">
                    <label class="relative flex items-center mr-2 rounded-full cursor-pointer" for="${elm.name}" data-ripple-dark="true">
                        <input id="${elm.name}" class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all duration-500 before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-mainLightPurple checked:bg-mainLightPurple checked:before:bg-mainLightPurple hover:before:opacity-40"
                            type="checkbox" name="${elm.name}" value="${elm.price}">
                        <div class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z">
                                </path>
                            </svg>
                        </div>
                    </label>
                    <label class="mt-px text-gray-700 cursor-pointer select-none" for="${elm.name}">${elm.name}</label>
                </div>`
    })
    seo.innerHTML = kod
}
renderSeo()

function calcSeoPrice() {
    const totalSum = [...seo.querySelectorAll('div > label > input')]
    .reduce((sum, element) => {
        if (element.checked) sum += Number(element.value)
        return sum
    }, 0);
    seoPrice.innerHTML = '₼ ' + totalSum
    seoEnd.innerHTML = '₼ ' + totalSum
    calcTotal()
}
calcSeoPrice()

const ecommerce = document.getElementById('ecommerce')
const ecommercePrice = document.getElementById('ecommercePrice')

function renderEcommerce() {
    let kod = ''
    product[2].forEach(elm => {
        kod += `<label onclick="calcEcommercePrice()" class="relative xl:items-center gap-x-2 flex cursor-pointer justify-between">
                    <div class="w-3/4"><span class="text-sm font-medium text-gray-900">${elm.name}</span></div>
                    <div>
                        <input class="sr-only peer" type="checkbox" name="Bloq" value=${elm.price}>
                        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white  after:content-['']  after:absolute  after:top-0.5  after:right-[22px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5  after:w-5 after:transition-all duration-300 after:duration-300 peer-checked:bg-mainLightPurple">
                        </div>
                    </div>
                </label>`
    })
    ecommerce.innerHTML = kod
}
renderEcommerce()

function calcEcommercePrice() {
    const totalSum = [...ecommerce.querySelectorAll('label > div > input')]
    .reduce((sum, element) => {
        if (element.checked) sum += Number(element.value)
        return sum
    }, 0);
    ecommercePrice.innerHTML = '₼ ' + totalSum
    ecommerceEnd.innerHTML = '₼ ' + totalSum
    calcTotal()
}
calcEcommercePrice()

const logo = document.getElementById('logo')
const logoPrice = document.getElementById('logoPrice')
let calcLogo = () => {
    if (logo.value == 1) { logo.price = 0 }
    else if (logo.value == 2) { logo.price = 100 }
    else if (logo.value == 3) { logo.price = 200 }
    let kod = ''
    kod = `₼ ${logo.price}`
    logoPrice.innerHTML = kod
    logoEnd.innerHTML = kod
    calcTotal()
}
function calcTotal() {
    let end = 0
    end = Number(pageEnd.innerHTML.slice(2)) + Number(addOnsEnd.innerHTML.slice(2)) + Number(seoEnd.innerHTML.slice(2)) + Number(ecommerceEnd.innerHTML.slice(2)) + Number(logoEnd.innerHTML.slice(2))
    if (end < 450) total.innerHTML = '₼ ' + 450
    else total.innerHTML = '₼ ' + end
    
}
calcLogo()
logo.oninput = calcLogo

