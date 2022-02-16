function firstPageAnimation() {
    var tl = gsap.timeline();
    tl.to(".anim1", {
        opacity: 1,
        y: -13,
        ease: Expo.easeInOut,
        stagger: .3,
        duration: 1.5,
        onStart: function () {
            $(" .anim2").textillate({ delay: 30, in: { effect: 'fadeInUp', delayScale: 1 } });
        }
    }, "abc")

        .to(".an", {
            opacity: .5,
            duration: 3,
            ease: "slow(0.7, 0.7, false)",
        }, "1.2")

        .to(".anim3", {
            opacity: 1,
            y: -30,
            ease: Expo.easeInOut,
            duration: 2,
            stagger: .3
        }, "abc")
}

function secondPageAnimation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section2",
            // markers: true,
            start: "-50% top",
            end: '10%',
            scrub: 2,

        }
    })
    tl2.
        from("#box", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: Expo.easeInOut,
            reverse: false
        }, "-2")
}

function thirdPageAnimation() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section3",
            // markers: true,
            start: "-10% 50%",
            end: '20%',
            scrub: 2,
        }
    })
    tl3.
        from(".anim5", {
            opacity: 0,
            y: 80,
            duration: 2,
            stagger: .5,
            ease: Expo.easeInOut
        }, "xyz")
    tl3.from(".anim6", {
        opacity: 0,
        y: 70,
        duration: 3,
        stagger: .5,
        transform: 'rotate(-100deg)',
        ease: Expo.easeInOut,
    }, "xyz")

}

function fourthPageAnimation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section4",
            // markers: true,
            start: "-50% top",
            end: '10%',
            scrub: 3,

        }
    })
    tl4.
        from("#box4", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: Expo.easeInOut,
            reverse: false
        }, "-2")
}

function fifthPageAnimation() {
    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section5",
            // markers: true,
            start: "top 70%",
            end: '10%',
            scrub: 2,

        }
    })
    tl5.to("#txt", {
        opacity: 1,
        ease: Expo.easeInOut,
        duration: 1,
        onStart: function () {
            $(".anim7").textillate({ delay: 20, in: { effect: 'fadeInUp', delayScale: .34}, type: 'char' });
            $(".anim77").textillate({ delay: 1, in: { effect: 'fadeInUp', delayScale: .34 }, type: 'char' });
        }
    })

    tl5.to(".anim8", {
        opacity: 1,
        ease: Expo.easeInOut,
        duration: 2,
        scale: 1
    })
}

function sixthPageAnimation() {
    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section6",
            // markers: true,
            start: "top 60%",
            end: '-20%',
            scrub: 2,

        }
    })
    tl6.to(".anim9", {
        opacity: 1,
        stagger: .2,
        ease: Expo.easeInOut,
        duration: 1.3,
        onStart: function () {
            $(".anim9").textillate({ delay: 50, in: { effect: 'fadeInUp', delayScale: .5 }, type: 'char' });
        }
    })
    tl6.to("#booking button", {
        opacity: 1,
        stagger: .2,
        ease: Expo.easeInOut,
        duration: 1.3,
        scale: 1
    })

}

firstPageAnimation();
secondPageAnimation();
thirdPageAnimation();
fourthPageAnimation();
fifthPageAnimation();
sixthPageAnimation();

