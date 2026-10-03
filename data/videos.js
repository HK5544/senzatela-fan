/*
 * おすすめ動画（日本のYouTuberによる紹介動画）
 * ------------------------------------------------------------
 * 載せるのは、実在を確認できた動画だけにしてください。
 *   id       : YouTube の動画ID（https://www.youtube.com/watch?v=【ここ】）
 *   title    : 動画タイトル（YouTube上の表記のまま）
 *   channel  : チャンネル名（分からなければ null）
 *   channelUrl : チャンネルURL（分からなければ null）
 *   comment  : このサイトでのひとこと紹介
 *   verified : 実在を確認した日
 * サムネイルは https://i.ytimg.com/vi/【動画ID】/hqdefault.jpg を自動で表示し、
 * クリックすると YouTube の動画ページを開きます。
 * 「ここで再生」を押したときだけ YouTube 公式の埋め込みプレーヤー
 * （youtube-nocookie.com）を読み込みます。
 *
 * チャンネル（videoChannels）
 *   name        : チャンネル名
 *   url         : チャンネルURL
 *   icon        : チャンネルの公式アイコン画像URL（分からなければ null。
 *                 null や読み込み失敗のときは initial の丸アイコンになります）
 *   initial     : 丸アイコンに表示する頭文字
 *   description : ひとこと紹介
 */
window.SITE_DATA = window.SITE_DATA || {};

window.SITE_DATA.videoChannels = [
  {
    name: "センザテーラ（@A.Senzatela）",
    url: "https://www.youtube.com/@A.Senzatela",
    icon: "https://yt3.googleusercontent.com/gLhjWHCUvDnkQg6KyooYWSZqgWrtisbsWCDdSnywpNIpoCjdj0mji0FiWgS-FzJtub5j6E6TTg=s176-c-k-c0x00ffffff-no-rj",
    initial: "S",
    description: "日本のロッキーズファンが運営するチャンネル（本人や球団とは無関係と明記されています）。登板ごとに内容を紹介する《THE FEATURE PLAYER》シリーズを投稿しています。"
  },
  {
    name: "MLB Park Japan / サカイ（@MLB_Park_Japan）",
    url: "https://www.youtube.com/@MLB_Park_Japan",
    icon: "https://yt3.googleusercontent.com/ayWfbNize4ZII0MMQcJmzlZiiTIGp1zA97J068POcNggij4oYHoV8Pko5y8_zcwc_et9Q08DRtk=s176-c-k-c0x00ffffff-no-rj",
    initial: "M",
    description: "サカイさんがMLBの話題を日本語で発信するチャンネル。センザテーラ投手を愛あるネタで盛り上げる動画も多数。"
  }
];

window.SITE_DATA.videos = [
  {
    id: "5PJRQbK-rVc",
    title: "センザテーラ『WBCに向け準備万端！3回4奪三振無失点の好リリーフ！』《THE FEATURE PLAYER》",
    channel: "センザテーラ（@A.Senzatela）",
    channelUrl: "https://www.youtube.com/@A.Senzatela",
    comment: "WBC前の登板を紹介。3回4奪三振無失点のロングリリーフ。",
    verified: "2026-10-03"
  },
  {
    id: "H3B55sdbSiU",
    title: "センザテーラ『勝利を呼び込むパーフェクトリリーフ！無傷の今季8勝目で初オールスター・下山に向け準備万端！』《THE FEATURE PLAYER》",
    channel: "センザテーラ（@A.Senzatela）",
    channelUrl: "https://www.youtube.com/@A.Senzatela",
    comment: "リリーフとして無傷の8勝目を挙げた登板。",
    verified: "2026-10-03"
  },
  {
    id: "mVQYNDjWXVI",
    title: "センザテーラ『相手に流れを渡さない完璧なリリーフ！チームの逆転勝利を呼び込んだ！！』《THE FEATURE PLAYER》",
    channel: "センザテーラ（@A.Senzatela）",
    channelUrl: "https://www.youtube.com/@A.Senzatela",
    comment: "逆転勝利につながった好リリーフ。",
    verified: "2026-10-03"
  },
  {
    id: "dhajNbBP9lA",
    title: "センザテーラ『今季最長となる7回6安打3失点の力投！P.スキーンズに並ぶ4勝目！』《THE FEATURE PLAYER》",
    channel: "センザテーラ（@A.Senzatela）",
    channelUrl: "https://www.youtube.com/@A.Senzatela",
    comment: "先発時代の登板。7回を投げきった力投。",
    verified: "2026-10-03"
  },
  {
    id: "GB_IoV1mmas",
    title: "センザテーラ『許した走者はわずか7人！5回1失点0奪三振の圧巻の投球でチームトップタイとなる今季2勝目！』《THE FEATURE PLAYER》",
    channel: "センザテーラ（@A.Senzatela）",
    channelUrl: "https://www.youtube.com/@A.Senzatela",
    comment: "打たせて取る、センザテーラらしい先発登板。",
    verified: "2026-10-03"
  },
  {
    id: "LzTZJy-BMZ0",
    title: "一部界隈でなぜか大人気なアントニオ・センザテーラさんの2025シーズン奪三振集",
    channel: null,
    channelUrl: null,
    comment: "2025年シーズンの奪三振シーンをまとめた動画。",
    verified: "2026-10-03"
  },
  {
    id: "nD7QNPgqIog",
    title: "ありがとう アントニオ・センザテーラ ～ロッキーズ時代MV～",
    channel: null,
    channelUrl: null,
    comment: "ロッキーズでの9年あまりを振り返るファンメイドのMV。",
    verified: "2026-10-03"
  },
  {
    id: "Z2qH52_cd2U",
    title: "【WBC非公式テーマソング②】センザテーラ",
    channel: "MLB Park Japan / サカイ（@MLB_Park_Japan）",
    channelUrl: "https://www.youtube.com/@MLB_Park_Japan",
    comment: "WBC非公式テーマソングシリーズのセンザテーラ編。",
    verified: "2026-10-03"
  },
  {
    id: "9fuAT4H4I6k",
    title: "【MLB替え歌】センザテーラ",
    channel: "MLB Park Japan / サカイ（@MLB_Park_Japan）",
    channelUrl: "https://www.youtube.com/@MLB_Park_Japan",
    comment: "センザテーラ投手の替え歌。",
    verified: "2026-10-03"
  },
  {
    id: "xsKHwNZF1rk",
    title: "【MLB替え歌】センザテラ",
    channel: "MLB Park Japan / サカイ（@MLB_Park_Japan）",
    channelUrl: "https://www.youtube.com/@MLB_Park_Japan",
    comment: "センザテーラ投手の替え歌。",
    verified: "2026-10-03"
  }
];
