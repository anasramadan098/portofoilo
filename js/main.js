let firstName = "Anas";
let lastName = "Ramadan";
let fullName = firstName + ' ' + lastName

let span = document.querySelector('header .logo span');
span.textContent = firstName.toUpperCase();

document.querySelector('.welcome-p h1 span').textContent = fullName;
document.title = fullName
window.onscroll = function() {
    if (window.scrollY >= 150) {
            document.querySelector('header').classList.add('scrolled')
            document.querySelector('.arrow').classList.add('active');
        } else {
            document.querySelector('header').classList.remove('scrolled')
            document.querySelector('.arrow').classList.remove('active');
    }
}

let allCards = document.querySelectorAll('.features .cards .card');
allCards.forEach((card)=> {
    let a = document.createElement('a')
    a.setAttribute('href','https://anasramadan098.github.io/anasdeveloper/pages/Portofoilo/Coding');
    a.append(card);
    document.querySelector('.cards').append(a)
})


let allLinks = document.querySelectorAll('a');
allLinks.forEach((a)=> {
    a.setAttribute('target','blank')
    
}) 
// Add Class Active On Secondry Menu
document.querySelector('.secondry-menu lord-icon').addEventListener('click',()=> {
    document.querySelector('.secondry-menu ul.links').classList.toggle('active')
})

document.querySelectorAll('header a').forEach((a)=> {
    a.removeAttribute('target','blank')
})


document.querySelector('.no-blank').removeAttribute('target','blank')
// Fetch The Json Files To Take The Content
let data;
fetch('js/portofoilo.json')
    .then((response) => response.json())
    .then((json) => {
        data = json
        index = json[0]
        indexp = json[1]
        indexa = json[2]
        for (let i = 0 ; i < json.length ; i++ ) {
            // Create Card Div
            let card = document.createElement('div');
            card.className = 'card'
            // Create Text And Img Div
            let textDiv = document.createElement('div');
            textDiv.className = 'text'
            let imgDiv = document.createElement('div');
            imgDiv.className = 'img'
            let img = document.createElement('img');
            img.src = json[i].src_0;
            img.setAttribute('alt',`img_${i}`)
            let p = document.createElement('p');
            p.textContent = json[i].p_0
            // Append Elements
            imgDiv.append(img);
            textDiv.append(imgDiv);
            textDiv.append(p)
            card.append(textDiv);
            let a = document.createElement('a')
            a.setAttribute('href', json[i].a_0);
            a.append(card);
            document.querySelector('.portofoilo .cards').append(a)
        }
    });
fetch('js/testimonils.json')
    .then((response) => response.json())
    .then((json) => {
        for (let i = 0 ; i < json.length ; i++ ) {
            // Create Card Div
            let card = document.createElement('div');
            card.className = 'card'
            // Create Text And Img Div
            let lordIcon = document.createElement('lord-icon');
            lordIcon.setAttribute('src','https://cdn.lordicon.com/meqqbzid.json');
            lordIcon.setAttribute('trigger','loop');
            lordIcon.setAttribute('colors','outline:#121331,primary:#4bb3fd');
            lordIcon.setAttribute('style','width:50px;height:50px');
            let p = document.createElement('p');
            p.setAttribute('data-content',json[i].contetnt);
            p.textContent = json[i].contetnt
            if (json[i].contetnt.length > 200) {
                p.style.fontSize = '13px'
            }
            let span  = document.createElement('span');
            span.setAttribute('data-content',json[i].Aurthor);
            span.textContent = json[i].Aurthor
            // Append Elements
            card.append(lordIcon);
            card.append(p);
            card.append(span);
            card.addEventListener('click',function() {
                document.querySelector('.full-scren').classList.add('active')
                // p
                document.querySelector('.full-scren p').addEventListener('click',function() {
                    document.querySelector('.full-scren').classList.remove('active')                   
                })
                document.querySelector('.full-scren p').textContent = p.getAttribute('data-content')

                // span
                document.querySelector('.full-scren span').addEventListener('click',function() {
                    document.querySelector('.full-scren').classList.remove('active')                   
                })
                document.querySelector('.full-scren span').textContent = span.getAttribute('data-content')
            })
            document.querySelector('.testimonial .cards').append(card);
        }
    })


const form = document.querySelector('form');

form.addEventListener('submit', function(e) { 
  e.preventDefault();
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
});
    
    
}



let date = new Date();
document.querySelector('footer span').textContent = date.getFullYear();
