// Cursor Circle GSAP
const cursor = document.querySelector('.cursor-circle');
window.addEventListener('mousemove' , e => {
    gsap.from(cursor , {
        x: e.clientX - 5,
        y: e.clientY - 5,
        ease: "power1.out",
    })
})

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseenter' , () => {
        gsap.to(cursor , {
            scale: 10,
            duration: 0.3,
            opacity: 0.2,
            ease: "power1.out",
        })
    })
    img.addEventListener('mouseleave' , () => {
        gsap.to(cursor , {
            scale: 1,
            duration: 0.3,
            opacity: 1,
            ease: "power1.out",
        })
    })
})


document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter' , () => {
        gsap.to(cursor , {
            scale: 5,
            duration: 0.3,
            opacity: 0.6,
            ease: "power1.out",
        })
    })
    link.addEventListener('mouseleave' , () => {
        gsap.to(cursor , {
            scale: 1,
            duration: 0.3,
            opacity: 1,
            ease: "power1.out",
        })
    })
})




document.querySelectorAll('.title').forEach(title => {
    gsap.from(title , {
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
        },
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: "power2.out",
    })
})