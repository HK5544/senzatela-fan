/*
 * プロフィールと今季成績のデータ
 * ------------------------------------------------------------
 * 成績を更新するときは、このファイルの数字と「asOf」「sources」を書き換えてください。
 * HTML を触る必要はありません。
 * 数字が分からない項目は null にすると「—」と表示されます。
 */
window.SITE_DATA = window.SITE_DATA || {};

window.SITE_DATA.profile = {
  nameJa: "アントニオ・センザテラ",
  nameAltJa: "センザテーラ／センサテーラと表記されることもあります",
  nameEn: "Antonio Senzatela",
  team: "ミルウォーキー・ブルワーズ",
  position: "投手（右投げ）／2026年はリリーフ専任",
  born: "1995年1月21日",
  birthplace: "ベネズエラ・カラボボ州バレンシア",
  facts: [
    "2017年にコロラド・ロッキーズでメジャーデビュー。2026年途中まで、メジャーではロッキーズ一筋でした。",
    "先発だった2025年は4勝15敗と苦しんだシーズンでした。",
    "2026年はリリーフに専念。ロッキーズでは34試合に登板し、9勝2敗3セーブ、防御率3.61でした。",
    "2026年のワールド・ベースボール・クラシックにベネズエラ代表として出場。ブルワーズのチョウリオ、W.コントレラスとはその代表仲間です。",
    "2026年8月3日、トレードでブルワーズに移籍。8月4日（現地時間）のパイレーツ戦（7回の1イニング無失点）がブルワーズでの初登板でした。",
    "9月2日のカブス戦で今季10勝目。先発登板が一度もないまま10勝に到達しました。"
  ],
  sources: [
    { label: "MLB.com プレスリリース（トレード発表）", url: "https://www.mlb.com/press-release/press-release-brewers-acquire-right-handed-reliever-antonio-senzatela-from-rockies" },
    { label: "MLB.com（ブルワーズ初登板）", url: "https://www.mlb.com/news/dustin-may-joins-brewers-rotation-after-trade-deadline-move" },
    { label: "Yahoo Sports（ブルワーズ初登板）", url: "https://sports.yahoo.com/articles/senzatela-records-scoreless-inning-brewers-043549810.html" },
    { label: "ClutchPoints（10勝目）", url: "https://clutchpoints.com/mlb/milwaukee-brewers/brewers-news-antonio-senzatela-joins-interesting-company-with-10th-win-of-2026" },
    { label: "Wikipedia 日本語版", url: "https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%83%88%E3%83%8B%E3%82%AA%E3%83%BB%E3%82%BB%E3%83%B3%E3%82%B6%E3%83%86%E3%83%BC%E3%83%A9" }
  ]
};

window.SITE_DATA.season = {
  year: 2026,
  // 成績を確認した日（更新したらここも書き換える）
  asOf: "2026-10-03",
  note: "2026年レギュラーシーズン終了時点の成績です。",
  // 今季通算（ロッキーズ＋ブルワーズ）
  total: {
    label: "2026年 通算（COL＋MIL）",
    G: 57, GS: 0, W: 11, L: 5, SV: 4,
    IP: "73.1", SO: 60, BB: 26, HR: 6,
    ERA: "4.05", WHIP: "1.35"
  },
  // チーム別
  splits: [
    {
      label: "ロッキーズ（トレード前）",
      G: 34, GS: 0, W: 9, L: 2, SV: 3,
      IP: "52.1", SO: 46, BB: 17, HR: null,
      ERA: "3.61", WHIP: "1.30",
      note: "MLB.com のトレード発表時点の数字"
    },
    {
      label: "ブルワーズ（移籍後）",
      G: 23, GS: 0, W: 2, L: 3, SV: 1,
      IP: "21.0", SO: 14, BB: 9, HR: null,
      ERA: null, WHIP: null,
      note: "通算からロッキーズ分を差し引いて計算した値（登板数・投球回は出典に記載あり）"
    }
  ],
  sources: [
    { label: "ESPN 選手ページ（2026年通算）", url: "https://www.espn.com/mlb/player/_/id/33750/antonio-senzatela" },
    { label: "MLB.com プレスリリース（ロッキーズでの成績）", url: "https://www.mlb.com/press-release/press-release-brewers-acquire-right-handed-reliever-antonio-senzatela-from-rockies" },
    { label: "MLB.com 選手ページ（最新の公式成績はこちら）", url: "https://www.mlb.com/player/antonio-senzatela-622608" },
    { label: "Baseball Savant（Statcast）", url: "https://baseballsavant.mlb.com/savant-player/antonio-senzatela-622608" }
  ]
};
