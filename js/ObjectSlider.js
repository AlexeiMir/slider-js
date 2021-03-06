function Slider(elId) {


    this.prevBtn = null
    this.nextBtn = null
    this.imageSlider =null
    this.currentIndex = 0
    this.imageUrls = []

    this.startSlider = function (elId) {
        let that = this

        let elSelector = '#' + elId
        let el = document.querySelector(elSelector)
        this.nextBtn = el.querySelector(".next-btn")
        this.prevBtn = el.querySelector(".prev-btn")
        this.imageSlider = el.querySelector(".imageSlider")


        this.nextBtn.addEventListener('click',function (e) {
            that.onShowNextBtnClick(e)
        });
        this.prevBtn.addEventListener('click',function(e) {
            that.onShowPrevBtnClick(e)
        });

        this.imageUrls.push('https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348')
        this.imageUrls.push('https://fashion-stil.ru/wp-content/uploads/2019/04/apelsin-ispaniya-kg-92383155888981_small6.jpg')
        this.imageUrls.push('https://itsfresh.ru/upload/iblock/178/178d8253202ef1c7af13bdbd67ce65cd.jpg')


        this.currentIndex = 0
        this.imageSlider.src  = this.imageUrls[this.currentIndex]
        this.prevBtn.disabled = true
    },

        this.onShowNextBtnClick = function (e) {
                this.currentIndex++
                this.imageSlider.src  = this.imageUrls[this.currentIndex]
                if (this.currentIndex === this.imageUrls.length-1){
                    this.nextBtn.disabled = true
                }
                this.prevBtn.disabled = false
        },
        this.onShowPrevBtnClick = function (e) {
                this.currentIndex--
                this.imageSlider.src  = this.imageUrls[this.currentIndex]
                if (this.currentIndex === 0){
                    this.prevBtn.disabled = true
                }
                this.nextBtn.disabled = false

        }
} 
   

