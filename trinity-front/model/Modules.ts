export class LeetcodeModule implements HeaderModule {
  name: Module;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  easyTotal: number;
  mediumTotal: number;
  hardTotal: number;
  easyBeats: number;
  mediumBeats: number;
  hardBeats: number;

  constructor(totalSolved: number, easySolved: number, mediumSolved: number, hardSolved: number, easyTotal: number, mediumTotal: number, hardTotal: number, easyBeats: number, mediumBeats: number, hardBeats: number) {
    this.name = Module.Leetcode;
    this.totalSolved = totalSolved;
    this.easySolved = easySolved;
    this.mediumSolved = mediumSolved;
    this.hardSolved = hardSolved;
    this.easyTotal = easyTotal;
    this.mediumTotal = mediumTotal;
    this.hardTotal = hardTotal;
    this.easyBeats = easyBeats;
    this.mediumBeats = mediumBeats;
    this.hardBeats = hardBeats;
  }
}

export interface HeaderModule {
  name: Module;
}

export enum Module {
  Leetcode = "Leetcode",
  Github = "Github",
}