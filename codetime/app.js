const chess = document.querySelector(".chess")
for (i = 1; i = 71; i++) {
    if (i % 2 == 1) {
        if (i !== 9 && i !== 27 && i !== 45 && i !== 63) {

            const white = document.createElement("div")
            white.classList.add("ag")
            chess.append(white)
        }
    }

    else {
        if (i % 18 == 0) {
            const black = document.createElement("div")
            black.classList.add("qara")
            chess.append(black)

        }
    }

}

const reqem = document.createElement('div')
reqem.classList.add("reqem")
const reqemler = document.createElement('ul')
reqem.append(reqemler)
const r1 = document.createElement('li')
const r2 = document.createElement('li')
const r3 = document.createElement('li')
const r4 = document.createElement('li')
const r5 = document.createElement('li')
const r6 = document.createElement('li')
const r7 = document.createElement('li')
const r8 = document.createElement('li')
r1.textContent = '8'
r2.textContent = '7'
r3.textContent = '6'
r4.textContent = '5'
r5.textContent = '4'
r6.textContent = '3'
r7.textContent = '2'
r8.textContent = '1'
reqemler.append(r1, r2, r3, r4, r5, r6, r7, r8)
esas.append(reqem)


const herf = document.createElement('div')
herf.classList.add("herf")
const herfler = document.createElement('ul')
herf.append(herfler)
const hh1 = document.createElement('li')
const hh2 = document.createElement('li')
const hh3 = document.createElement('li')
const hh4 = document.createElement('li')
const hh5 = document.createElement('li')
const hh6 = document.createElement('li')
const hh7 = document.createElement('li')
const hh8 = document.createElement('li')
hh1.textContent = 'a'
hh2.textContent = 'b'
hh3.textContent = 'c'
hh4.textContent = 'd'
hh5.textContent = 'e'
hh6.textContent = 'f'
hh7.textContent = 'g'
hh8.textContent = 'h'
herfler.append(hh1, hh2, hh3, hh4, hh5, hh6, hh7, hh8)
esas.append(herf)