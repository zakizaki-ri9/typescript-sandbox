type Dog = {
  tail: 'tail',
  bark: () => void
}

type Bird = {
  wing: 'wing',
  fly: () => void
}

type Kimera = Dog & Bird
