let prevBtn = document.querySelector("#prev")
let nextBtn = document.querySelector("#next")
let indicatorsArr = document.querySelector("#indicators")
let images = document.querySelectorAll("img")
let slideNumberElement =document.querySelector(".slide-number")
//array of images
let arrOfImgs = Array.from(images)

//indicators list
let indicatorsList = document.createElement("ul")


// building the indicators 1=>5
for(let i = 1 ; i <= images.length ; i++){
    let indicator = document.createElement("li")
    let indicatorNum = document.createTextNode(i)
    
    indicator.appendChild(indicatorNum)
    indicatorsList.appendChild(indicator)
    indicatorsArr.appendChild(indicatorsList)
}
// indicators array
let theIndicators = document.querySelectorAll("ul li")
let arrOfIndcators = Array.from(theIndicators)
arrOfIndcators[0].classList.add("active")

// base for current img index
let currentImgNum = 0;

// sliding images throught its number (indicator)
arrOfIndcators.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        // removing active class from all indicators
        arrOfIndcators.forEach((ele)=>{
            ele.classList.remove("active")
        })
        arrOfImgs.forEach((img,imgIndex)=>{
            // updating sliding info
            slideNumberElement.textContent = 'Slide #' + (currentImgNum+1) + ' of ' + (arrOfImgs.length);
            if(e.currentTarget.innerHTML === img.dataset.num){
                // removing active class from all imgs
                arrOfImgs.forEach((img)=>{
                    currentImgNum = imgIndex
                    img.classList.remove("active")
                })
                //adding active class to the chosen img
                img.classList.add("active")
                ele.classList.add("active")
            }
        })
    })  
})


// next button
nextBtn.addEventListener("click", ()=>{
        nextImg()
        // updating sliding info
        slideNumberElement.textContent = 'Slide #' + (currentImgNum+1) + ' of ' + (arrOfImgs.length);
})


// prev button
prevBtn.addEventListener("click", ()=>{
    prevImg()
    // updating sliding info
    slideNumberElement.textContent = 'Slide #' + (currentImgNum+1) + ' of ' + (arrOfImgs.length);

})




// next image func
function nextImg() {
    // if you reached the end start from the beg again
    if(currentImgNum === 4){
        currentImgNum = -1
    }
    arrOfImgs.forEach((img)=>{
        // removing active class from all imgs
        img.classList.remove("active")

        //adding active class to the chosen img
        arrOfImgs[currentImgNum +1].classList.add("active")
    })
    // increasing current img index by 1
    currentImgNum++
    // removing active class from all indicators
    arrOfIndcators.forEach((ele)=>{
        ele.classList.remove("active")
        arrOfIndcators.forEach((ele)=>{
            if(ele.innerHTML == currentImgNum +1){
                // add acitve class to the chosen indicator
                ele.classList.add("active")
            }
        })  
    })
}


// previous image func
function prevImg() {
    if(currentImgNum === 0){
        currentImgNum = 5
    }
    arrOfImgs.forEach((img)=>{
        // removing active class from all imgs
        img.classList.remove("active")

        //adding active class to the chosen img
        arrOfImgs[currentImgNum -1].classList.add("active")
    })
    // increasing current img index by 1
    currentImgNum--
    // removing active class from all indicators
    arrOfIndcators.forEach((ele)=>{
        ele.classList.remove("active")
        arrOfIndcators.forEach((ele)=>{
            if(ele.innerHTML == currentImgNum +1){
                // add acitve class to the chosen indicator
                ele.classList.add("active")
            }
        })  
    })
}