/*
 * 共通レイアウト（ヘッダー・フッター）と各ページの表示処理。
 * データは data/*.js に入っているので、ふだんの更新でこのファイルを触る必要はありません。
 */
(function () {
  "use strict";

  var D = window.SITE_DATA || {};
  var page = document.body.getAttribute("data-page");

  var NAV = [
    { id: "home", href: "index.html", label: "トップ" },
    { id: "bio", href: "biography.html", label: "経歴" },
    { id: "pitching", href: "pitching.html", label: "投球スタイル" },
    { id: "stats", href: "stats.html", label: "年度別成績" },
    { id: "games", href: "games.html", label: "登板記録" },
    { id: "news", href: "news.html", label: "ニュース" },
    { id: "videos", href: "videos.html", label: "おすすめ動画" }
  ];

  var DISCLAIMER = "非公式ファンサイト（球団・MLB・選手本人とは無関係）";

  // ---------- 小さなヘルパー ----------
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function val(v) { return v == null || v === "" ? "—" : esc(v); }
  function ext(url, label) {
    return '<a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + esc(label) + "</a>";
  }
  function $(id) { return document.getElementById(id); }
  function sourceList(sources, title) {
    if (!sources || !sources.length) return "";
    return '<div class="source">' + esc(title || "出典") + "：<ul>" +
      sources.map(function (s) { return "<li>" + ext(s.url, s.label) + "</li>"; }).join("") +
      "</ul></div>";
  }
  function formatDate(d) {
    // "2026-08-05" → "2026年8月5日" / "2026-08" → "2026年8月" / "2026" → "2026年"
    var p = String(d).split("-");
    var out = p[0] + "年";
    if (p[1]) out += Number(p[1]) + "月";
    if (p[2]) out += Number(p[2]) + "日";
    return out;
  }
  function byDateDesc(a, b) { return String(b.date).localeCompare(String(a.date)); }

  // ---------- 共通レイアウト ----------
  function renderLayout() {
    var header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML =
      '<div class="wrap">' +
        '<h1 class="site-title">' +
          '<a class="brand" href="index.html" aria-label="センザテーラ極東応援団（非公式ファンサイト）トップページへ">' +
            // オリジナルのエンブレム（白の横長バッジに赤の「SENZA」）
            '<svg class="brand-emblem" viewBox="0 0 96 40" aria-hidden="true" focusable="false">' +
              '<rect x="0.5" y="0.5" width="95" height="39" rx="7" fill="#fff"/>' +
              '<text x="48" y="30" text-anchor="middle" fill="#bf0d3e" font-family="Oswald, \'Barlow Condensed\', \'Arial Narrow\', sans-serif" ' +
                'font-weight="700" font-size="26" textLength="74" lengthAdjust="spacingAndGlyphs">SENZA</text>' +
            "</svg>" +
            '<span class="brand-name">センザテーラ極東応援団</span>' +
            '<span class="brand-tag">UNOFFICIAL FAN SITE / JAPAN</span>' +
          "</a></h1>" +
        '<nav aria-label="メインメニュー"><ul class="nav">' +
          NAV.map(function (n) {
            return '<li><a href="' + n.href + '"' + (n.id === page ? ' aria-current="page"' : "") + ">" + n.label + "</a></li>";
          }).join("") +
        "</ul></nav>" +
      "</div>";

    var footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="wrap">' +
        "<p>球団名・選手名は説明のために使用しています。球団ロゴは掲載していません。" +
        "成績・記事・動画・写真の権利はそれぞれの出典元・撮影者に帰属します。</p>" +
        "<p>成績は各ページに記載した出典をもとに手作業でまとめています。最新・正確な数字は" +
        ext("https://www.mlb.com/player/antonio-senzatela-622608", "MLB.com の選手ページ") + "でご確認ください。</p>" +
        '<p class="disclaimer">' + DISCLAIMER + "</p>" +
      "</div>";

    document.body.insertBefore(header, document.body.firstChild);
    document.body.appendChild(footer);
  }

  // ---------- トップ ----------
  function renderHome() {
    var p = D.profile, s = D.season;
    if (!p || !s) return;

    var t = s.total;
    var ph = p.photo;
    var photo = ph ?
      '<figure class="player-photo">' +
        '<img src="' + esc(ph.src) + '" alt="' + esc(ph.alt) + '" width="400" height="500" decoding="async">' +
        "<figcaption>" + esc(ph.caption) +
          '<span class="credit">Photo: ' + ext(ph.sourceUrl, ph.author) + " / " + ext(ph.licenseUrl, ph.license) +
          "（" + ext(ph.sourceUrl, "Wikimedia Commons") + "）</span>" +
        "</figcaption></figure>"
      : "";
    var bar = [
      ["防御率", "ERA", t.ERA], ["登板", "G", t.G], ["勝敗", "W-L", t.W + "-" + t.L],
      ["セーブ", "SV", t.SV], ["奪三振", "SO", t.SO]
    ];

    $("hero").innerHTML =
      '<div class="wrap player-hero-inner">' +
        '<div class="player-id">' +
          '<p class="player-team">' + esc(p.team) + "</p>" +
          '<h2 class="player-name"><span class="en">' + esc(p.nameEn) + '</span><span class="ja">' + esc(p.nameJa) + "</span></h2>" +
          '<p class="player-meta">' + esc(p.position) + "</p>" +
        "</div>" + photo +
      "</div>" +
      '<div class="statbar"><div class="wrap">' +
        '<p class="statbar-title">' + esc(s.year) + " シーズン成績</p>" +
        '<dl class="statbar-list">' + bar.map(function (x) {
          return '<div class="stat"><dt>' + esc(x[0]) + '<span>' + esc(x[1]) + "</span></dt><dd>" + val(x[2]) + "</dd></div>";
        }).join("") + "</dl>" +
      "</div></div>";

    // 選手名鑑風の顔写真（トリミングの位置・拡大率は style.css の .headshot-frame img で調整）
    var hs = p.headshot, headshot = "";
    if (hs) {
      headshot =
        '<figure class="headshot">' +
          '<div class="headshot-frame"><img src="' + esc(hs.src) + '" alt="' + esc(hs.alt) + '" decoding="async"></div>' +
          '<figcaption><span class="credit">Photo: ' + ext(hs.sourceUrl, hs.author) + " / " + ext(hs.licenseUrl, hs.license) +
            "（トリミングして使用）（" + ext(hs.sourceUrl, "Wikimedia Commons") + "）</span></figcaption>" +
        "</figure>";
    }

    $("profile").innerHTML =
      '<div class="profile-top">' + headshot +
      '<dl class="profile-list">' +
        (p.details || []).map(function (d) {
          return "<dt>" + esc(d[0]) + "</dt><dd>" + esc(d[1]) + (d[2] ? '<span class="dd-note">' + esc(d[2]) + "</span>" : "") + "</dd>";
        }).join("") +
      "</dl></div>" +
      '<div class="profile-intro">' + (p.intro || []).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + "</div>" +
      '<p class="profile-more"><a href="biography.html">詳しい経歴はこちら →</a>' +
        '<span class="note">プロフィールの出典は経歴ページの「出典」にまとめています。</span></p>';

    $("season-title").textContent = s.year + "年シーズン成績";

    var cols = ["G", "GS", "W", "L", "SV", "IP", "SO", "BB", "HR", "ERA", "WHIP"];
    var head = ["", "登板", "先発", "勝", "敗", "S", "投球回", "奪三振", "四球", "被本", "防御率", "WHIP"];
    function row(r, cls) {
      return "<tr" + (cls ? ' class="' + cls + '"' : "") + "><td>" + esc(r.label) + "</td>" +
        cols.map(function (c) { return "<td>" + val(r[c]) + "</td>"; }).join("") + "</tr>";
    }
    $("season-table").innerHTML =
      '<table class="stats-table"><thead><tr>' + head.map(function (h) { return '<th scope="col">' + h + "</th>"; }).join("") + "</tr></thead><tbody>" +
      s.splits.map(function (r) { return row(r); }).join("") + row(t, "total") +
      "</tbody></table>";

    var notes = s.splits.filter(function (r) { return r.note; })
      .map(function (r) { return "<li>" + esc(r.label) + "：" + esc(r.note) + "</li>"; }).join("");
    $("season-notes").innerHTML =
      '<p class="note">' + esc(s.note) + "（" + formatDate(s.asOf) + " 確認）「—」は出典で確認できなかった項目です。</p>" +
      (notes ? '<ul class="note">' + notes + "</ul>" : "") +
      sourceList(s.sources);
  }

  // ---------- 登板記録 ----------
  function renderGames() {
    var games = (D.games || []).slice().sort(byDateDesc);
    var cols = ["IP", "H", "R", "ER", "HR", "BB", "SO", "pitches", "ERA"];
    var head = ["日付", "相手", "結果", "勝敗等", "投球回", "被安打", "失点", "自責点", "被本塁打", "与四球", "奪三振", "球数", "防御率"];

    function shortDate(d) {
      var p = String(d).split("-");
      return Number(p[1]) + "/" + Number(p[2]);
    }
    function resultCell(r) {
      var cls = /^○/.test(r) ? "res-w" : /^●/.test(r) ? "res-l" : "";
      return '<span class="' + cls + '">' + esc(r) + "</span>";
    }
    function decisionBadge(d) {
      if (!d) return "—";
      var cls = /^勝/.test(d) ? "w" : /^敗/.test(d) ? "l" : /^セーブ\(/.test(d) ? "sv" : /^ホールド/.test(d) ? "hld" : "";
      return '<span class="badge ' + cls + '">' + esc(d) + "</span>";
    }

    $("games-count").textContent = games.length;
    $("games-table").innerHTML = games.length
      ? '<table class="stats-table games-table sticky1"><thead><tr>' + head.map(function (h) { return '<th scope="col">' + h + "</th>"; }).join("") + "</tr></thead><tbody>" +
        games.map(function (g) {
          return "<tr>" +
            '<th scope="row">' + shortDate(g.date) + "</th>" +
            "<td>" + (g.home === false ? "@" : "") + esc(g.opponent) + "</td>" +
            "<td>" + resultCell(g.result) + "</td>" +
            "<td>" + decisionBadge(g.decision) + "</td>" +
            cols.map(function (c) { return "<td>" + val(g[c]) + "</td>"; }).join("") +
            "</tr>";
        }).join("") + "</tbody></table>"
      : '<p style="padding:16px">まだ登板記録がありません。</p>';

    var src = D.gameLogSource;
    $("gamelog-links").innerHTML =
      (src ? '<p class="note" style="margin-top:0">出典：' + ext(src.url, src.label) + "</p>" : "") +
      sourceList(D.gameLogLinks, "全試合の記録はこちら");
  }

  // ---------- ニュース ----------
  function renderNews() {
    var items = (D.news || []).slice().sort(byDateDesc);
    var current = "all";

    function draw() {
      var list = items.filter(function (n) { return current === "all" || n.lang === current; });
      $("news-list").innerHTML = list.map(function (n) {
        return '<li class="news-item">' +
          '<div class="news-meta"><time>' + formatDate(n.date) + "</time>" +
            "<span>" + esc(n.source) + "</span>" +
            '<span class="badge">' + (n.lang === "ja" ? "日本語" : "英語") + "</span></div>" +
          "<h3>" + ext(n.url, n.title) + "</h3>" +
          "<p>" + esc(n.summary) + "</p></li>";
      }).join("");
    }

    var buttons = document.querySelectorAll("#news-filters button");
    Array.prototype.forEach.call(buttons, function (b) {
      b.addEventListener("click", function () {
        current = b.getAttribute("data-lang");
        Array.prototype.forEach.call(buttons, function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        draw();
      });
    });
    draw();
  }

  // ---------- 動画 ----------
  function renderVideos() {
    $("channels").innerHTML = (D.videoChannels || []).map(function (c) {
      var initial = '<span class="channel-initial" aria-hidden="true">' + esc(c.initial || String(c.name).charAt(0)) + "</span>";
      var icon = c.icon
        ? '<img class="channel-icon" src="' + esc(c.icon) + '" alt="" width="48" height="48" loading="lazy" referrerpolicy="no-referrer">'
        : "";
      return '<div class="card channel-card"><span class="channel-avatar">' + initial + icon + "</span>" +
        '<div class="channel-text"><strong>' + ext(c.url, c.name) + "</strong>" +
        '<p style="margin:4px 0 0">' + esc(c.description) + "</p></div></div>";
    }).join("");
    // アイコンが読み込めなかったら頭文字の丸アイコンだけを残す
    Array.prototype.forEach.call(document.querySelectorAll("#channels .channel-icon"), function (img) {
      img.addEventListener("error", function () { img.remove(); });
    });

    $("video-grid").innerHTML = (D.videos || []).map(function (v) {
      var watch = "https://www.youtube.com/watch?v=" + encodeURIComponent(v.id);
      return '<article class="video-card">' +
        '<div class="video-frame">' +
          '<a class="video-thumb" href="' + esc(watch) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(v.title) + '（YouTube で開く）">' +
            '<img src="https://i.ytimg.com/vi/' + encodeURIComponent(v.id) + '/hqdefault.jpg" alt="" width="480" height="360" loading="lazy" decoding="async">' +
            '<span class="icon" aria-hidden="true">▶</span>' +
          "</a></div>" +
        '<div class="video-body">' +
          "<h3>" + esc(v.title) + "</h3>" +
          '<p class="note">チャンネル：' + (v.channel ? (v.channelUrl ? ext(v.channelUrl, v.channel) : esc(v.channel)) : "YouTube の動画ページでご確認ください") + "</p>" +
          "<p>" + esc(v.comment) + "</p>" +
          '<div class="links">' + ext(watch, "YouTube で見る ↗") +
            '<button type="button" class="video-play" data-id="' + esc(v.id) + '" data-title="' + esc(v.title) + '">ここで再生</button>' +
            '<span class="note">' + formatDate(v.verified) + " 実在確認</span></div>" +
        "</div></article>";
    }).join("");

    // 再生ボタンを押したときだけ埋め込みプレーヤーを読み込む
    $("video-grid").addEventListener("click", function (e) {
      var btn = e.target.closest(".video-play");
      if (!btn) return;
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(btn.getAttribute("data-id")) + "?autoplay=1";
      iframe.title = btn.getAttribute("data-title");
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;
      var frame = btn.closest(".video-card").querySelector(".video-frame");
      frame.innerHTML = "";
      frame.appendChild(iframe);
      btn.remove();
    });
  }

  // 本文中の外部リンクは新しいタブで開く
  function externalLinksInNewTab() {
    Array.prototype.forEach.call(document.querySelectorAll('main a[href^="http"]'), function (a) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    });
  }

  renderLayout();
  if (page === "bio" || page === "pitching" || page === "stats") externalLinksInNewTab();
  if (page === "home") renderHome();
  if (page === "games") renderGames();
  if (page === "news") renderNews();
  if (page === "videos") renderVideos();
})();
