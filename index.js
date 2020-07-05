const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const imageSlider = document.querySelector('.imageSlider')



const fruits = []

fruits.push('https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348')
fruits.push('https://fashion-stil.ru/wp-content/uploads/2019/04/apelsin-ispaniya-kg-92383155888981_small6.jpg')
fruits.push('https://itsfresh.ru/upload/iblock/178/178d8253202ef1c7af13bdbd67ce65cd.jpg')


let currentIndex = 0
imageSlider.src  = fruits[currentIndex]

nextBtn.addEventListener('click',() => {
    currentIndex++
    imageSlider.src  = fruits[currentIndex]
    if (currentIndex === fruits.length-1){
        nextBtn.disabled = true
    }
    prevBtn.disabled = false
})

prevBtn.addEventListener('click',() => {
    currentIndex--
    imageSlider.src  = fruits[currentIndex]
    if (currentIndex === 0){
        prevBtn.disabled = true
    }
    nextBtn.disabled = false
})