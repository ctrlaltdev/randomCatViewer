(() => {
  function reqListener () {
    document.querySelector('main').style.backgroundImage = 'url(' + JSON.parse(this.response).file + ')'
  }
  
  const oReq = new XMLHttpRequest()
  oReq.addEventListener("load", reqListener)
  oReq.open("GET", "https://aws.random.cat/meow")
  oReq.send()
})()
