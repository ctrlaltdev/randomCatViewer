(() => {
  fetch('http://aws.random.cat/meow')
    .then(r => r.json())
    .then((r) => {
      document.querySelector('main').style.backgroundImage = 'url(' + r.file + ')'
    })
})()