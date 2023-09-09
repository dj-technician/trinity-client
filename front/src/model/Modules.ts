class LeetcodeModule implements HeaderModule {
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
}

interface HeaderModule {
  name: Module;
}

enum Module {
  Leetcode,
  Github
}