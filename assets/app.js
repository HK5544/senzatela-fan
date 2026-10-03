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
        '<h1 class="site-title"><a href="index.html">センザテラ極東応援団<span class="num"> ★</span>' +
        "<small>アントニオ・センザテラ投手 非公式ファンサイト</small></a></h1>" +
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

    document.body.insertBefore(header, document.querySelector("main"));
    document.body.appendChild(footer);
  }

  // ---------- トップ ----------
  function renderHome() {
    var p = D.profile, s = D.season;
    if (!p || !s) return;

    $("hero").innerHTML =
      '<h2>' + esc(p.nameJa) + "</h2>" +
      '<div class="en">' + esc(p.nameEn) + "</div>" +
      "<p>" + esc(p.team) + "／" + esc(p.position) + "</p>";

    var ph = p.photo;
    var photo = ph ?
      '<figure class="profile-photo">' +
        '<img src="' + esc(ph.src) + '" alt="' + esc(ph.alt) + '" width="320" height="400" loading="lazy" decoding="async">' +
        "<figcaption>" + esc(ph.caption) +
          '<span class="credit">Photo: ' + ext(ph.sourceUrl, ph.author) + " / " + ext(ph.licenseUrl, ph.license) +
          "（" + ext(ph.sourceUrl, "Wikimedia Commons") + "）</span>" +
        "</figcaption></figure>"
      : "";

    $("profile").innerHTML =
      '<div class="profile-top">' + photo +
      '<dl class="profile-list">' +
        "<dt>名前</dt><dd>" + esc(p.nameJa) + "（" + esc(p.nameEn) + "）<br><span class=\"note\">" + esc(p.nameAltJa) + "</span></dd>" +
        "<dt>所属</dt><dd>" + esc(p.team) + "</dd>" +
        "<dt>ポジション</dt><dd>" + esc(p.position) + "</dd>" +
        "<dt>生年月日</dt><dd>" + esc(p.born) + "</dd>" +
        "<dt>出身</dt><dd>" + esc(p.birthplace) + "</dd>" +
      "</dl></div>" +
      '<ul class="facts">' + p.facts.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
      sourceList(p.sources);

    var t = s.total;
    var tiles = [
      ["登板", t.G], ["勝-敗", t.W + "-" + t.L], ["セーブ", t.SV],
      ["防御率", t.ERA], ["投球回", t.IP], ["奪三振", t.SO], ["WHIP", t.WHIP]
    ];
    $("season-title").textContent = s.year + "年シーズン成績";
    $("tiles").innerHTML = tiles.map(function (x) {
      return '<div class="tile"><div class="k">' + esc(x[0]) + '</div><div class="v">' + val(x[1]) + "</div></div>";
    }).join("");

    var cols = ["G", "GS", "W", "L", "SV", "IP", "SO", "BB", "HR", "ERA", "WHIP"];
    var head = ["", "登板", "先発", "勝", "敗", "S", "投球回", "奪三振", "四球", "被本", "防御率", "WHIP"];
    function row(r, cls) {
      return "<tr" + (cls ? ' class="' + cls + '"' : "") + "><td>" + esc(r.label) + "</td>" +
        cols.map(function (c) { return "<td>" + val(r[c]) + "</td>"; }).join("") + "</tr>";
    }
    $("season-table").innerHTML =
      "<table><thead><tr>" + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr></thead><tbody>" +
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
    var cols = ["IP", "H", "R", "ER", "BB", "SO"];
    var head = ["日付", "所属", "相手", "スコア", "責任", "投球回", "安打", "失点", "自責", "四球", "三振", "メモ・出典"];

    function decisionBadge(d) {
      if (!d) return "—";
      var cls = d === "W" ? "w" : d === "L" ? "l" : d === "SV" ? "sv" : "";
      var label = { W: "勝", L: "敗", SV: "S", HLD: "H", BS: "BS" }[d] || d;
      return '<span class="badge ' + cls + '">' + esc(label) + "</span>";
    }

    $("games-count").textContent = games.length;
    $("games-table").innerHTML = games.length
      ? "<table><thead><tr>" + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr></thead><tbody>" +
        games.map(function (g) {
          var where = g.home === true ? "vs " : g.home === false ? "@ " : "";
          return "<tr>" +
            "<td>" + formatDate(g.date) + "</td>" +
            '<td><span class="badge team-' + esc(String(g.team).toLowerCase()) + '">' + esc(g.team) + "</span></td>" +
            "<td>" + esc(where + g.opponent) + "</td>" +
            "<td>" + (g.score ? esc(g.result || "") + " " + esc(g.score) : "—") + "</td>" +
            "<td>" + decisionBadge(g.decision) + "</td>" +
            cols.map(function (c) { return "<td>" + val(g[c]) + "</td>"; }).join("") +
            '<td class="wrap-cell">' + esc(g.memo || "") +
              (g.source ? '<br><span class="note">出典：' + [].concat(g.source).map(function (x) { return ext(x.url, x.label); }).join("、") + "</span>" : "") +
            "</td></tr>";
        }).join("") + "</tbody></table>"
      : '<p style="padding:16px">まだ登板記録がありません。</p>';

    $("gamelog-links").innerHTML = sourceList(D.gameLogLinks, "全試合の記録はこちら");
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
