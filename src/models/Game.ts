export default class Game {
  id: number;
  title: string;
  isDisc: boolean;
  isFinish: boolean;
  hour: number;
  isFavorite: boolean;
  isPc: boolean;
  platform: string;
  year: string;
  isTodo: boolean;
  note?: string | null;


  constructor(
  id: number,
  title: string,
  isDisc: boolean,
  isFinish: boolean,
  hour: number,
  isFavorite: boolean,
  isPc: boolean,
  platform: string,
  year: string,
  isTodo: boolean,
  note?: string | null,
  ) {
    this.id = id;
    this.title = title;
    this.isDisc = isDisc;
    this.isFinish = isFinish;
    this.hour = hour;
    this.isFavorite = isFavorite;
    this.isPc = isPc;
    this.platform = platform;
    this.year = year;
    this.isTodo = isTodo;
    this.note = note;

  }
}
