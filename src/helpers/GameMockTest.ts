import type GameTest from "@/models/GameTest";

export const GamesMockTest: GameTest[] = [
  {
    id: 1,
    title: "The outer world 2",
    isFavor: false,
    note: "",
    isFinish: true,
    platform: "Xbox serie x",
    year: 2025,
    disc: true,
  },
  {
    id: 2,
    title: "Arc Raiders",
    isFavor: false,
    note: "",
    isFinish: false,
    platform: "Steam",
    year: 2025,
    disc: false,
  },
  {
    id: 3,
    title: "Battlefiled 6",
    isFavor: false,
    note: "Campagne fini (6h)",
    isFinish: true,
    platform: "Xbox serie x",
    year: 2025,
    disc: false,
  },
    {
    id: 4,
    title: "Star Wars Outlaws",
    isFavor: false,
    note: "Avec ses dlc",
    isFinish: true,
    platform: "Xbox serie x",
    year: 2025,
    disc: false,
  },
];
