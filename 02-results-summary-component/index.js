import { data } from './data.js'

const elements = JSON.parse(data)

const $resultsContainer = document.querySelector('#results-container')

for (const element of elements) {
    const icon = element['icon']
    const category = element['category']
    const score = element['score']

    const $section = document.createElement('section')
    const $div = document.createElement('div')
    const $img = document.createElement('img')
    const $title = document.createElement('h2')
    const $span = document.createElement('span')
    const $p = document.createElement('p')

    $section.classList.add('test-element')
    $img.setAttribute('src', icon)
    $title.innerText = category
    $span.innerText = score


    $p.append($span, document.createTextNode = " / 100")        // UTILIZANDO FUNCIÓN PARA ANIDAR TEXTO    
    $div.append($img, $title)
    $section.append($div, $p)
    $resultsContainer.appendChild($section)
}
