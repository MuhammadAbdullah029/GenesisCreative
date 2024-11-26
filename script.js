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
