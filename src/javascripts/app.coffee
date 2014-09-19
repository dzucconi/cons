text = "A train arrives at a station. A little boy and a little girl, brother and sister, are seated in a compartment face to face next to the window through which the buildings along the station platform can be seen passing as the train pulls to a stop. “Look,” says the brother, “We’re at Ladies!” “Imbecile!” replies his sister, “Can’t you see we’re at Gentlemen?”…. For these children, Ladies and Gentlemen will be henceforth two countries toward which each of their souls will strive on divergent wings."
factor = 100
wSize = 50

document.body.style.height = "#{text.length * factor}px"

mapCons = (arr, consSize) ->
  [0..(arr.length - consSize)].map (i, x) ->
    arr[i..i + consSize - 1]

xs = mapCons text.split(''), wSize
xsMap = xs.reduce ((hsh, x, i) -> hsh[x] = i; hsh), {}

document.addEventListener 'scroll', ->
  if cons = xs[Math.floor(document.body.scrollTop / factor)]
    history.replaceState null, null, "#/#{cons.join ''}"

if xsMap.hasOwnProperty (currentLocation = location.hash.replace('#/', '').split '')
  window.scrollTo 0, (xsMap[currentLocation] * factor)
