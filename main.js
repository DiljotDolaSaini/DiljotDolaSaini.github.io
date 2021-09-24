<script>

//Navbar
const mobileBtn = document.getElementById('mobile-cta')
  nav_link = document.querySelector('nav')
const navLinks = document.querySelectorAll('.nav-links li')


mobileBtn.addEventListener('click',
function(){
  nav_link.classList.toggle('open')
  
  navLinks.forEach(link=>{

    if(link.style.animation){ 
      link.style.animation = ""
    }

    else{
      link.style.animation = `navLinkFade 1.5s ease-in`; 
    }
  })
})

document.getElementById('tap-about').addEventListener('click', 
function(){ 
  document.querySelector('.nav-links').classList.toggle('open');
})

document.getElementById('tap-skills').addEventListener('click', 
function(){ 
  document.querySelector('.nav-links').classList.toggle('open');
})

document.getElementById('tap-work').addEventListener('click', 
function(){ 
  document.querySelector('.nav-links').classList.toggle('open');
})

document.getElementById('tap-project').addEventListener('click', 
function(){ 
  document.querySelector('.nav-links').classList.toggle('open');
})

document.getElementById('tap-contact').addEventListener('click', 
function(){ 
  document.querySelector('.nav-links').classList.toggle('open');
})


//Skills

const skillsContent = document.getElementsByClassName('skills__content'), 
  skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){

  let itemClass = this.parentNode.className

  for(i=0; i < skillsContent.length; i++){ 
    skillsContent[i].className = 'skills__content skills__close'
  }
  if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el) => { 
  el.addEventListener('click', toggleSkills)
})

const skills = document.querySelector('.skillsection')

observer = new IntersectionObserver((entries) => { 

  if(entry.intersectionRatio >0){ 
    entry.target.style.animation = `fadein 10s ease-in`
  }

  else{ 
    entry.target.style.animation = 'none';
  }
})

//WORK
document.getElementById('arrow1right').addEventListener('click', 
function(){
  document.querySelector('.part1').style.display = 'none';
  document.querySelector('.part2').style.display = 'block';
  document.querySelector('.part2').style.animation = 'FadeAway 1s ease';
});

document.getElementById('arrow2right').addEventListener('click', 
function(){
  document.querySelector('.part2').style.display = 'none';
  document.querySelector('.part3').style.display = 'block';
  document.querySelector('.part3').style.animation = 'FadeAway 1s ease';
});

document.getElementById('arrow3left').addEventListener('click', 
function(){
  document.querySelector('.part3').style.display = 'none';
  document.querySelector('.part2').style.display = 'block';
  document.querySelector('.part2').style.animation = 'FadeAway 1s ease';
});

document.getElementById('arrow2left').addEventListener('click', 
function(){
  document.querySelector('.part2').style.display = 'none';
  document.querySelector('.part1').style.display = 'block';
  document.querySelector('.part1').style.animation = 'FadeAway 1s ease';
});

//SCROLL ANIMATION
const sections = document.querySelectorAll('section[id]')

function scrollActive(){ 
  const scrollY = window.pageYOffset

  sections.forEach(current =>{ 
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50; 
    sectionID = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){ 
      document.querySelector('.nav-links a[href*=' +sectionId + ']').classList.add('active-link')
    }
    else{ 
      document.querySelector('.nav-links a[href*=' +sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll',scrollActive)

</script>