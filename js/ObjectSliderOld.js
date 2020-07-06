let slider = {
    prevBtn: document.querySelector('.prev-btn'),
    nextBtn: document.querySelector('.next-btn'),
    imageSlider: document.querySelector('.imageSlider'),
    currentIndex : 0,
    imageUrls: [],

    start: function () {

        this.nextBtn.addEventListener('click',this.onShowNextBtnClick);
        this.prevBtn.addEventListener('click',this.onShowPrevBtnClick);

        this.imageUrls.push('https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348')
        this.imageUrls.push('https://fashion-stil.ru/wp-content/uploads/2019/04/apelsin-ispaniya-kg-92383155888981_small6.jpg')
        this.imageUrls.push('https://itsfresh.ru/upload/iblock/178/178d8253202ef1c7af13bdbd67ce65cd.jpg')


        this.currentIndex = 0
        this.imageSlider.src  = this.imageUrls[this.currentIndex]
        this.prevBtn.disabled = true
    },

        onShowNextBtnClick: function (e) {
                this.currentIndex++
                this.imageSlider.src  = this.imageUrls[this.currentIndex]
                if (this.currentIndex === this.imageUrls.length-1){
                    this.nextBtn.disabled = true
                }
                this.prevBtn.disabled = false
        },
        onShowPrevBtnClick: function (e) {
                this.currentIndex--
                this.imageSlider.src  = this.imageUrls[this.currentIndex]
                if (this.currentIndex === 0){
                    this.prevBtn.disabled = true
                }
                this.nextBtn.disabled = false

        }

}