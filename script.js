const slides = document.querySelectorAll('.slide');
let count = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
);

const goNext = () => {
    if(count < (slides.length - 1)) {
        count++;
        slideImage();
    }
}

const goPrev = () => {
    if(count > 0) {
        count--;
        slideImage();
    }
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`;
        }
    )
}

const resetImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(${count * 100}%)`;
        }
    )
}


setInterval(() => {
    if (count < slides.length - 1) {
        count++;
        slideImage();
    } else {
        count--;
        resetImage();
    }
}, 8000); 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);

        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
