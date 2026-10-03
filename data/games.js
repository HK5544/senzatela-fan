/*
 * 試合ごとの登板記録（2026年レギュラーシーズン最後の10登板）
 * ------------------------------------------------------------
 * 1試合 = 1つの { ... }。配列のどこに足しても、表示は日付の新しい順に並びます。
 *
 *   date     : "YYYY-MM-DD"（現地日付）
 *   opponent : 相手球団の略称（例 "CIN"）
 *   home     : true = ホーム / false = ビジター（表示では「@」が付きます）
 *   result   : チームの勝敗とスコア 例 "○10-7"、"●8-12"、"○4-3(延長10回)"
 *   decision : 勝敗等 例 "勝(11-5)"、"敗(10-5)"、"セーブ(4)"、"ホールド"、"セーブ失敗"（なければ null →「—」）
 *   IP, H, R, ER, HR, BB, SO : 投球回・被安打・失点・自責点・被本塁打・与四球・奪三振
 *   pitches  : 球数
 *   ERA      : その試合終了時点の防御率（シーズン累計）
 */
window.SITE_DATA = window.SITE_DATA || {};

window.SITE_DATA.games = [
  {
    date: "2026-09-04",
    opponent: "CIN",
    home: false,
    result: "○10-7",
    decision: null,
    IP: "1.0", H: 2, R: 1, ER: 1, HR: 0, BB: 0, SO: 0,
    pitches: 15,
    ERA: "3.82"
  },
  {
    date: "2026-09-06",
    opponent: "CIN",
    home: false,
    result: "●8-12",
    decision: "敗(10-5)",
    IP: "0.2", H: 2, R: 3, ER: 3, HR: 0, BB: 2, SO: 1,
    pitches: 28,
    ERA: "4.19"
  },
  {
    date: "2026-09-08",
    opponent: "CHC",
    home: true,
    result: "○4-3(延長10回)",
    decision: null,
    IP: "1.0", H: 0, R: 0, ER: 0, HR: 0, BB: 0, SO: 0,
    pitches: 11,
    ERA: "4.12"
  },
  {
    date: "2026-09-12",
    opponent: "CIN",
    home: true,
    result: "○13-9",
    decision: null,
    IP: "1.0", H: 0, R: 0, ER: 0, HR: 0, BB: 0, SO: 1,
    pitches: 14,
    ERA: "4.06"
  },
  {
    date: "2026-09-13",
    opponent: "CIN",
    home: true,
    result: "●3-4",
    decision: "セーブ失敗",
    IP: "0.1", H: 2, R: 2, ER: 2, HR: 1, BB: 0, SO: 0,
    pitches: 8,
    ERA: "4.30"
  },
  {
    date: "2026-09-16",
    opponent: "PIT",
    home: false,
    result: "○5-4",
    decision: "勝(11-5)",
    IP: "0.2", H: 1, R: 0, ER: 0, HR: 0, BB: 0, SO: 2,
    pitches: 14,
    ERA: "4.26"
  },
  {
    date: "2026-09-18",
    opponent: "BAL",
    home: false,
    result: "○6-5(延長10回)",
    decision: null,
    IP: "1.0", H: 2, R: 0, ER: 0, HR: 0, BB: 0, SO: 0,
    pitches: 24,
    ERA: "4.20"
  },
  {
    date: "2026-09-20",
    opponent: "BAL",
    home: false,
    result: "○3-0",
    decision: null,
    IP: "0.2", H: 1, R: 0, ER: 0, HR: 0, BB: 0, SO: 0,
    pitches: 11,
    ERA: "4.16"
  },
  {
    date: "2026-09-24",
    opponent: "PHI",
    home: false,
    result: "○5-1",
    decision: "セーブ(4)",
    IP: "1.2", H: 0, R: 0, ER: 0, HR: 0, BB: 1, SO: 1,
    pitches: 19,
    ERA: "4.07"
  },
  {
    date: "2026-09-26",
    opponent: "STL",
    home: true,
    result: "○3-2",
    decision: "ホールド",
    IP: "0.1", H: 0, R: 0, ER: 0, HR: 0, BB: 0, SO: 1,
    pitches: 5,
    ERA: "4.05"
  }
];

// 出典（このページの数字はすべてここから）
window.SITE_DATA.gameLogSource = {
  label: "Baseball-Reference 2026年ゲームログ",
  url: "https://www.baseball-reference.com/players/gl.fcgi?id=senzaan01&t=p&year=2026"
};

// 全試合の詳しい記録を確認できる外部ページ
window.SITE_DATA.gameLogLinks = [
  { label: "Baseball-Reference 2026年ゲームログ（全登板）", url: "https://www.baseball-reference.com/players/gl.fcgi?id=senzaan01&t=p&year=2026" },
  { label: "MLB.com 選手ページ（Game Log）", url: "https://www.mlb.com/player/antonio-senzatela-622608" },
  { label: "スポーツナビ 選手ページ（日本語）", url: "https://baseball.yahoo.co.jp/mlb/player/2100072/top" }
];
