import sample from './json/sample.json'

console.log({
  id: sample.root.id,
  name: sample.root.name
})

type Dog = {
  tail: 'tail',
  bark: () => void
}

type Bird = {
  wing: 'wing',
  fly: () => void
}

type Kimera = Dog & Bird
