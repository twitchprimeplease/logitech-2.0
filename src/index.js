let product="";

  const txts=document.querySelector(".slide-text").children,
        txtsLen=txts.length;
        let index=0;
        const textInTimer=3000,
        textOutTimer=3200;

    function animateText() {
        for(let i=0; i<txtsLen; i++){
            txts[i].classList.remove("text-in", "text-out");
        }
        txts[index].classList.add("text-in");

        setTimeout(function() {
            txts[index].classList.add("text-out");
        },textOutTimer)

        setTimeout(function() {

        if(index == txtsLen-1) {
            index=0;
        }
        else {
            index++;
        }
        animateText();
        },textOutTimer);
    }



    window.onload=animateText;

    $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })

        var swiper = new Swiper(".mySwiper", {
          autoplay: {
            delay: 4000,
          },
          pagination: {
            el: ".swiper-pagination",
          }
        })
