# センザテラ応援団（非公式ファンサイト）

ミルウォーキー・ブルワーズのアントニオ・センザテラ投手を応援する、日本語の**非公式**ファンサイトです。
**球団・MLB・選手本人とは一切関係ありません。** 選手写真や球団ロゴは使わず、色づかいだけブルワーズ風（ネイビー×ゴールド）にしています。

公開URL（GitHub Pages）: https://hk5544.github.io/senzatela-fan/

## ページ構成

| ファイル | 内容 |
| --- | --- |
| `index.html` | トップ（プロフィール・今季成績） |
| `games.html` | 試合ごとの登板記録 |
| `news.html` | ニュース・記事一覧 |
| `videos.html` | おすすめ動画（日本のYouTuberの紹介動画） |

ビルド作業は不要です。HTML/CSS/JavaScript だけで動きます。

## 更新のしかた

ふだんの更新は `data/` フォルダのファイルを書き換えるだけです。HTML や `assets/` を触る必要はありません。
GitHub 上でファイルを開き、鉛筆アイコン（Edit）から直接編集して保存（Commit）すれば、数分でサイトに反映されます。

| 更新したいもの | 編集するファイル |
| --- | --- |
| プロフィール、今季成績 | `data/stats.js` |
| 登板記録 | `data/games.js` |
| ニュース | `data/news.js` |
| おすすめ動画 | `data/videos.js` |

### 成績を更新する（`data/stats.js`）

1. `season.total` の数字（登板 `G`、勝 `W`、敗 `L`、セーブ `SV`、投球回 `IP`、奪三振 `SO`、防御率 `ERA` など）を書き換える
2. 必要なら `splits`（チーム別）も書き換える
3. `asOf` を確認した日付に変える
4. `sources` に参照したページを書く

分からない数字は `null` にすると「—」と表示されます。
数字の確認先の例: [MLB.com 選手ページ](https://www.mlb.com/player/antonio-senzatela-622608)

### 登板を追加する（`data/games.js`）

`window.SITE_DATA.games = [ ... ]` の中に、次のかたまりをコピーして足します（並び順は自動で日付の新しい順になります）。

```js
{
  date: "2026-09-10",
  team: "MIL",
  opponent: "シンシナティ・レッズ",
  home: true,
  score: "5-3",
  result: "勝",
  decision: "HLD",
  IP: "1.0", H: 0, R: 0, ER: 0, BB: 1, SO: 2,
  memo: "ひとこと",
  source: { label: "MLB.com", url: "https://..." }
},
```

### ニュース・動画を追加する

`data/news.js` / `data/videos.js` の先頭にあるコメントに書き方があります。
動画は**実在を確認できたものだけ**を、YouTube の動画ID で登録してください（「ここで再生」を押したときだけ YouTube 公式の埋め込みプレーヤーを読み込みます）。

## 手元で確認する

```sh
python3 -m http.server 8000
# ブラウザで http://localhost:8000/ を開く
```

## GitHub Pages での公開

リポジトリの **Settings → Pages** で、Source を「Deploy from a branch」、Branch を `main` / `/ (root)` にして保存します。
`.nojekyll` を置いているので、ファイルはそのまま配信されます。

## 注意

- 成績・記事・動画の権利はそれぞれの出典元に帰属します。
- 成績は手作業でまとめたものです。正確な数字は公式の記録をご確認ください。
