function goAbout() {
  window.scrollTo({
    top:document.getElementById('abt-me').getBoundingClientRect().top,left:0,
    behavior: 'smooth'
  })
}

function goLinks() {
  window.scrollTo({
    top:document.getElementById('connect').getBoundingClientRect().top,left:0,
    behavior: 'smooth'
  })
}

function toTop() {
  window.scrollTo({
    top:document.getElementById('screentop').getBoundingClientRect().top,left:0,
    behavior: 'smooth'
  })
}