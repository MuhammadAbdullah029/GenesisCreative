const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

function page3Anim(t, nam) {
    const text = t;
        const wrapper = document.querySelector(nam);

    
        function createInfiniteMarquee() {
        
            for (let i = 0; i < 11; i++) {
                const marqueeContent = document.createElement('h1');
                marqueeContent.textContent = text;
                wrapper.appendChild(marqueeContent);
            }
        }

        createInfiniteMarquee();
}

page3Anim("Graphic Design Print Design", ".text-lr");
page3Anim("Social Media Brand Identity Social Media Brand Identity", ".rl-text");

var swiper = new Swiper(".mySwiper", {
     
    slidesPerView: (window.innerWidth > 600) ? 3 : 1,
    spaceBetween: 30,
    freeMode: false,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


document.querySelector(".vid").addEventListener('mouseenter', function(dets){
    gsap.to(".music", {
        display: "block"
    })
    document.querySelector(".vid").style.cursor = "none";
})
document.querySelector(".vid").addEventListener('mousemove', function(dets){
    gsap.to(".music", {
        x: dets.x + 15,
        y: dets.y,
        display: "block"
    })
})
document.querySelector(".vid").addEventListener('mouseleave', function(dets){
    gsap.to(".music", {
        display: "none"
    })
    // document.querySelector(".vid").style.cursor = "default";

})