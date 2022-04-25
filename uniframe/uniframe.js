/* eslint-disable */
window.__Uniframe_JSONP_CALLBACK__ = function (json) {
  function loadjs(url, callback) {
    var script = document.createElement('script')
    callback = callback || function () {}
    script.type = 'text/javascript'
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState == 'loaded' || script.readyState == 'complete') {
          script.onreadystatechange = null
          callback()
        }
      }
    } else {
      script.onload = function () {
        callback()
      }
    }
    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)
  }
  function loadcss(url) {
    var cssLink = document.createElement('link')
    cssLink.rel = 'stylesheet'
    cssLink.rev = 'stylesheet'
    cssLink.type = 'text/css'
    cssLink.media = 'screen'
    cssLink.href = url
    document.getElementsByTagName('head')[0].appendChild(cssLink)
  }
  var entrypoints =
    json.entrypoints && json.entrypoints.length ? json.entrypoints : []

  var hostname = location.hostname
  var isProd = /^[^.]+\.[^.]+\.[^.]+$/.test(hostname)
  var isTestnet = isProd && /^testnet\./.test(hostname)
  var prefix =
    isProd || isTestnet ? '/uniframe/' : '//www.test1.zoomex.com/uniframe/'
  for (var i = 0; i < entrypoints.length; i++) {
    var asset = entrypoints[i]
    var url = prefix + asset
    if (/\.js$/.test(asset)) {
      loadjs(url)
    } else {
      loadcss(url)
    }
  }
}
;(function () {
  var uniFrame = {
    readyQueue: [],
    isReady: false,
    ready: function (cb) {
      if (typeof cb === 'function') {
        uniFrame.isReady ? cb(uniFrame) : uniFrame.readyQueue.push(cb)
      }
    }
  }
  window.UniFrame = uniFrame
  var hostname = location.hostname
  var isProd = /^[^.]+\.[^.]+\.[^.]+$/.test(hostname)
  var isTestnet = isProd && /^testnet\./.test(hostname)
  var prefix =
    isProd || isTestnet ? '/uniframe/' : '//www.test1.zoomex.com/uniframe/'

  loadJs(prefix + 'uniframe-manifest.js?_=' + Date.now())

  function loadJs(url) {
    var script = document.createElement('script')
    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)
  }

  var cssLink = document.createElement('link')
  cssLink.rel = 'stylesheet'
  cssLink.rev = 'stylesheet'
  cssLink.type = 'text/css'
  cssLink.media = 'screen'
  cssLink.href =
    'https://smart1.bycsi.com/zoomex/uniframe/static/css/re-main-var-common.css'
  document.getElementsByTagName('head')[0].appendChild(cssLink)
})()
