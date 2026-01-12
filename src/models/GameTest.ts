export default class GameTest {
  id: number;
  title: string;
  isFavor: boolean;
  note?: string | null;
  isFinish: boolean;
  platform: string;
  year: number;
  disc: boolean;

  constructor(
    id: number,
    title: string,
    isFavor: boolean,
    note: string,
    isFinish: boolean,
    platform: string,
    year: number,
    disc: boolean,
  ) {
    this.id = id;
    this.title = title;
    this.isFavor = isFavor;
    this.note = note;
    this.isFinish = isFinish;
    this.platform = platform;
    this.year = year;
    this.disc = disc;
  }
}
