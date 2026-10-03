/*
 * 試合ごとの登板記録
 * ------------------------------------------------------------
 * 1試合 = 1つの { ... }。新しい登板は配列のどこに足しても、表示は日付の新しい順に並びます。
 *
 *   date     : "YYYY-MM-DD"（現地日付）
 *   team     : "MIL" または "COL"（その日の所属）
 *   opponent : 相手チーム名
 *   home     : true = ホーム / false = ビジター / null = 未確認
 *   score    : チームの最終スコア 例 "4-2"（分からなければ null）
 *   result   : "勝" / "敗"（チームの勝敗）
 *   decision : "W"（勝利投手）/ "L"（敗戦投手）/ "SV" / "HLD" / "BS" / null
 *   IP, H, R, ER, BB, SO : 投球回と各成績（分からない項目は null →「—」表示）
 *   memo     : ひとこと
 *   source   : 出典 { label, url }（必ず書く）
 */
window.SITE_DATA = window.SITE_DATA || {};

window.SITE_DATA.games = [
  {
    date: "2026-09-02",
    team: "MIL",
    opponent: "シカゴ・カブス",
    home: null,
    score: "9-4",
    result: "勝",
    decision: "W",
    IP: null, H: null, R: null, ER: null, BB: null, SO: null,
    memo: "今季10勝目。先発登板ゼロでの2桁勝利。うち9勝はロッキーズ時代。",
    source: { label: "ClutchPoints", url: "https://clutchpoints.com/mlb/milwaukee-brewers/brewers-news-antonio-senzatela-joins-interesting-company-with-10th-win-of-2026" }
  },
  {
    date: "2026-08-05",
    team: "MIL",
    opponent: "ピッツバーグ・パイレーツ",
    home: null,
    score: "4-2",
    result: "勝",
    decision: null,
    IP: "1.0", H: null, R: 0, ER: 0, BB: null, SO: null,
    memo: "ブルワーズ初登板。7回を無失点。球場到着は試合開始の約30分前だった。",
    source: { label: "Yahoo Sports", url: "https://sports.yahoo.com/articles/senzatela-records-scoreless-inning-brewers-043549810.html" }
  }
];

// 全試合の詳しい記録を確認できる外部ページ
window.SITE_DATA.gameLogLinks = [
  { label: "MLB.com 選手ページ（Game Log）", url: "https://www.mlb.com/player/antonio-senzatela-622608" },
  { label: "ESPN 2026年 試合別成績", url: "https://www.espn.com/mlb/player/gamelog/_/id/33750/antonio-senzatela" },
  { label: "スポーツナビ 選手ページ（日本語）", url: "https://baseball.yahoo.co.jp/mlb/player/2100072/top" }
];
