let body = document.querySelector('body')

let textbox = document.querySelector('#textbox')

let logo = document.querySelector('#e8')
let infinity1 = document.querySelector('#infinity1 path')
let infinity2 = document.querySelector('#infinity2 path')
let infinity3 = document.querySelector('#infinity3 path')

let socialNetworks = document.querySelector('.social-networks')

let spinInterval

textbox.addEventListener('input', () => {
  let textboxFocus = document.querySelector('#textbox:focus')

  let newWidth = `${textbox.value.length + 2}ch`
  textbox.style.width = newWidth

  logo.setAttribute("transform", "rotate(0)")

  let c = textbox.value.substring(1)
  let rgb = parseInt(c, 16)
  let r = (rgb >> 16) & 0xff 
  let g = (rgb >>  8) & 0xff 
  let b = (rgb >>  0) & 0xff 

  let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b
  console.log(luma)

  if (textbox.value === '') {
    infinity1.style.fill = '#ffffff'
    infinity1.style.stroke = '#ffffff'
    infinity2.style.fill = '#ffffff'
    infinity2.style.stroke = '#ffffff'
    infinity3.style.fill = '#ffffff'
    infinity3.style.stroke = '#ffffff'

    body.style.backgroundColor = '#000000'
    textbox.style.color = '#ffffff'
    socialNetworks.style.fill = '#ffffff'
    textbox.style.width = '9ch'
    luma = 254.99999999999997
  } else if (textbox.value === 'vane' || textbox.value === 'vanellope' || textbox.value === 'vnllpe') {
    let color = '#83ecb9'

    infinity1.style.fill = color
    infinity1.style.stroke = color
    infinity2.style.fill = color
    infinity2.style.stroke = color
    infinity3.style.fill = color
    infinity3.style.stroke = color
  } else if (textbox.value === 'e8.world' || textbox.value === 'www.e8.world' || textbox.value === 'see.ya.at.e8.world') {
    let spinDegrees = 0
    spinInterval = setInterval(() => {
      spinDegrees += 1
      logo.setAttribute("transform", `rotate(${spinDegrees})`)
    }, 1)
  } else {
    infinity1.style.fill = textbox.value
    infinity1.style.stroke = textbox.value
    infinity2.style.fill = textbox.value
    infinity2.style.stroke = textbox.value
    infinity3.style.fill = textbox.value
    infinity3.style.stroke = textbox.value
  }

  if (infinity1.style.fill === 'black' || infinity1.style.fill === 'rgb(0, 0, 0)' || (textbox.value.startsWith('#') && textbox.value.length >= 4 && luma < 20) ||
      infinity1.style.fill.startsWith('dark')) {
    body.style.backgroundColor = '#ffffff'
    textbox.style.color = '#000000'
    socialNetworks.style.fill = '#000000'
    textboxFocus.style.borderBottom = '5px solid #000000'
  } else {
    body.style.backgroundColor = '#000000'
    textbox.style.color = '#ffffff'
    socialNetworks.style.fill = '#ffffff'
    textboxFocus.style.borderBottom = '5px solid #ffffff'
  }

  if (!(textbox.value === 'e8.world' || textbox.value === 'www.e8.world' || textbox.value === 'see.ya.at.e8.world')) {
    clearInterval(spinInterval)
  }
})

textbox.addEventListener('focusin', () => {
  let textboxFocus = document.querySelector('#textbox:focus')

  if (infinity1.style.fill === 'black' || infinity1.style.fill.startsWith('#000') ||
      infinity1.style.fill.startsWith('dark')) {
    textboxFocus.style.borderBottom = '5px solid #000000'
  } else {
    textboxFocus.style.borderBottom = '5px solid #ffffff'
  }
})

textbox.addEventListener('focusout', () => {
  textbox.style.borderBottom = '5px solid rgba(0, 0, 0, 0)'

  if (textbox.value === '') {
    textbox.value = 'enddless8'
  }
})

function componentToHex(c) {
  var hex = c.toString(16)
  return hex.length == 1 ? "0" + hex : hex
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}