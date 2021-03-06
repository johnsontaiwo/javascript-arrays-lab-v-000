const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var new_kittens = [...kittens, name]
  return new_kittens
}

function prependKitten(name) {
  var new_kittens = [name, ...kittens]
  return new_kittens
}

function removeLastKitten() {
  var new_kittens = kittens.slice(0, 2)
  return new_kittens
}

function removeFirstKitten() {
  var new_kittens = kittens.slice(1, kittens.length)
  return new_kittens
}