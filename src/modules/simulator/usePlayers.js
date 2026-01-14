import { computed, reactive } from 'vue'

const state = reactive({
  players: [],
})

export default function usePlayers() {
  const getPlayers = computed(() => state.players)

  const addPlayer = (player) => state.players.push(player)

  const loadPlayers = async () => {
    let players = await fetch('/assets/players/alt_players.json')

    if (!players.ok) {
      console.log('Unable to load file')
      return
    }

    let json = await players.json()

    for (const [, player] of Object.entries(json.players)) {
      addPlayer(player)
    }
  }

  return {
    getPlayers,
    loadPlayers,
  }
}
