const assetConfig = {
  childList: true,
  subtree: true
}

const observerYoutube = new MutationObserver(youtubeCallback)
const player = document.querySelector('#player')
observerYoutube.observe(player, assetConfig);
let count = 0
function youtubeCallback(e) {
  console.log(e)
  const btnSkip = document.querySelector('.ytp-ad-skip-button-container')
  if(btnSkip) {
    count = count + 1
    btnSkip.click()
    console.log(count)
  }

  console.log(document.querySelector('.ytp-ad-skip-button-container'))
}