/*
 * プロフィールと今季成績のデータ
 * ------------------------------------------------------------
 * 成績を更新するときは、このファイルの数字と「asOf」「sources」を書き換えてください。
 * HTML を触る必要はありません。
 * 数字が分からない項目は null にすると「—」と表示されます。
 */
window.SITE_DATA = window.SITE_DATA || {};

window.SITE_DATA.profile = {
  nameJa: "アントニオ・センザテーラ",
  nameEn: "Antonio Senzatela",
  team: "ミルウォーキー・ブルワーズ",
  position: "投手（リリーフ）",
  // プロフィール表（[項目, 内容, 小さく添える注記] の順。注記がなければ省略）
  // 事実の出典は経歴ページ（biography.html）の「出典」にまとめています。
  details: [
    ["名前", "アントニオ・センザテーラ（Antonio Senzatela）", "センザテラ／センサテーラと表記されることも"],
    ["本名", "Antonio Senzatela Rondón"],
    ["所属", "ミルウォーキー・ブルワーズ（2026年8月〜）"],
    ["ポジション", "投手（リリーフ）"],
    ["投打", "右投右打"],
    ["身長", "185cm（6フィート1インチ）"],
    ["生年月日", "1995年1月21日（31歳）"],
    ["出身", "ベネズエラ・カラボボ州バレンシア"],
    ["プロ入り", "2011年7月8日、16歳でロッキーズと契約"],
    ["メジャーデビュー", "2017年4月6日（対ブルワーズ）"],
    ["経歴", "コロラド・ロッキーズ（2011〜2026）→ ミルウォーキー・ブルワーズ（2026〜）"],
    ["主な球種", "4シーム（平均約97マイル）、カッター、シンカー、チェンジアップ、カーブ"],
    ["主な表彰", "カリフォルニアリーグ最優秀投手（2015）、ナ・リーグ月間最優秀新人（2017年4月）"],
    ["代表歴", "ベネズエラ代表（2026年WBC優勝）"],
    ["愛称", "リトル・プリンス", "同郷のフェリックス・ヘルナンデス“キング・フェリックス”にちなむ"]
  ],
  // 選手紹介の文章（1要素＝1段落）
  intro: [
    "ベネズエラ・バレンシア出身の右腕。15歳のとき三塁手としてロッキーズのスカウトの目に留まり、16歳でプロの道へ。マイナーでは2015年にカリフォルニアリーグ最優秀投手に輝き、2017年に3Aを経ずにメジャーデビューすると、いきなりナ・リーグ月間最優秀新人に選ばれた。長くロッキーズの先発ローテーションを支え、打者有利のクアーズ・フィールドで「打たせて取る」投球を続けてきた。",
    "膝の前十字靱帯断裂とトミー・ジョン手術という2度の大けがを乗り越え、2025年終盤にリリーフへ転向。オフのフォーム改造で球速は平均約97マイルまで上がり、カッターやシンカーを加えた新しいスタイルで生まれ変わった。2026年3月にはベネズエラ代表としてWBC優勝を経験し、8月にはメジャーデビュー戦の相手だったブルワーズへ移籍。口数は少なくても闘志は強く、「投げるのが大好き」と語るブルペンの職人だ。"
  ],
  // トップのヒーローの選手写真（Wikimedia Commons の自由ライセンス画像）。クレジット表示は必須なので消さないでください。
  photo: {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/68/Antonio_Senzatela_(47114817704)_(cropped).jpg",
    alt: "コロラド・ロッキーズのユニフォームを着たアントニオ・センザテーラ投手",
    caption: "ロッキーズ時代（2019年ごろ）のセンザテーラ投手",
    author: "Ian D'Andrea",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Antonio_Senzatela_(47114817704)_(cropped).jpg"
  },
  // プロフィール欄の顔写真（選手名鑑風に顔の周りをトリミングして表示）。
  // トリミングの位置・拡大率は assets/style.css の「.headshot-frame img」で調整します。
  headshot: {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Antonio_Senzatela_Colorado_Rockies_(33945081480)_(cropped).jpg",
    alt: "アントニオ・センザテーラ投手の顔写真（2017年、ロッキーズ時代）",
    author: "Jeff Warrington",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Antonio_Senzatela_Colorado_Rockies_(33945081480)_(cropped).jpg"
  }
};

window.SITE_DATA.season = {
  year: 2026,
  // 成績を確認した日（更新したらここも書き換える）
  asOf: "2026-10-03",
  note: "2026年レギュラーシーズン終了時点の成績です（Baseball-Reference）。",
  // 今季通算（ロッキーズ＋ブルワーズ）
  total: {
    label: "2026年 通算（COL＋MIL）",
    G: 57, GS: 0, W: 11, L: 5, SV: 4,
    IP: "73.1", SO: 60, BB: 26, HR: 6,
    ERA: "4.05", WHIP: "1.350"
  },
  // チーム別
  splits: [
    {
      label: "ロッキーズ（トレード前）",
      G: 34, GS: 0, W: 9, L: 2, SV: 3,
      IP: "52.1", SO: 46, BB: 17, HR: 4,
      ERA: "3.61", WHIP: "1.299"
    },
    {
      label: "ブルワーズ（移籍後）",
      G: 23, GS: 0, W: 2, L: 3, SV: 1,
      IP: "21.0", SO: 14, BB: 9, HR: 2,
      ERA: "5.14", WHIP: "1.476"
    }
  ],
  sources: [
    { label: "Baseball-Reference 選手ページ", url: "https://www.baseball-reference.com/players/s/senzaan01.shtml" },
    { label: "Baseball-Reference 2026年ゲームログ", url: "https://www.baseball-reference.com/players/gl.fcgi?id=senzaan01&t=p&year=2026" },
    { label: "MLB.com 選手ページ（最新の公式成績はこちら）", url: "https://www.mlb.com/player/antonio-senzatela-622608" }
  ]
};
