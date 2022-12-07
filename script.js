//portfolio carusel

const img = Array.from(document.querySelectorAll('.img'))
        const btnNext = document.querySelector('.btn-left');
        const btnPrev = document.querySelector('.btn-right');
        let slideIndx = 1;
        
        showSlides(slideIndx)

        function showSlides(n) {
            if(n > img.length){
                slideIndx = 1;
            }

            if(n < 1){
                slideIndx = img.length;
            }

            img.forEach(item => {
                item.style.display = "none"
            });

            img[slideIndx -1].style.display = "block"
        }

        function addSlides(n) {
            showSlides(slideIndx += n)
        }

        btnNext.addEventListener('click', ()=>{
            addSlides(1) 
        })
        btnPrev.addEventListener('click', ()=>{
            addSlides(-1) 
        })