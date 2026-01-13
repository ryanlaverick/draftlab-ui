export default function usePositions() {
  const positions = Object.freeze([
    {id: "OT", value: "OT"},
    {id: "OG", value: "G"},
    {id: "C", value: "C"},
    {id: "QB", value: "QB"},
    {id: "WR", value: "WR"},
    {id: "HB", value: "HB"},
    {id: "TE", value: "TE"},
    {id: "IDL", value: "IDL"},
    {id: "EDGE", value: "EDGE"},
    {id: "LB", value: "LB"},
    {id: "S", value: "S"},
    {id: "CB", value: "CB"},
  ])

  return {
    positions
  }
}
