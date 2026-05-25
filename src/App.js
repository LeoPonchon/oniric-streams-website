import "./App.css";
import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { getInitialLang, t as translate } from "./i18n";

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [lang, setLang] = useState(getInitialLang);
  const t = (key) => translate(lang, key);

  const stars = useMemo(() => {
    const count = 50;
    const minRadiusPct = 3.2; // minimum spacing, in viewport %
    const maxAttempts = count * 50;

    const out = [];
    const minR2 = minRadiusPct * minRadiusPct;

    let attempts = 0;
    while (out.length < count && attempts < maxAttempts) {
      attempts += 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      let ok = true;
      for (let i = 0; i < out.length; i += 1) {
        const dx = out[i].x - x;
        const dy = out[i].y - y;
        if (dx * dx + dy * dy < minR2) {
          ok = false;
          break;
        }
      }
      if (!ok) continue;

      const idx = out.length;
      const size = 2.6 + Math.random() * 6.2;
      const twinkle = 2.6 + Math.random() * 3.8;
      const delay = Math.random() * 3.5;
      const alpha = 0.72 + Math.random() * 0.22;
      out.push({ id: `s${idx}`, x, y, size, twinkle, delay, alpha });
    }

    return out;
  }, []);

  const nav = [
    { href: "#top", label: t("nav.home") },
    { href: "#media", label: t("nav.media") },
    { href: "#credits", label: t("nav.credits") },
  ];

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setNavOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {}
    document.documentElement.lang = lang;
    document.title = translate(lang, "pageTitle");
  }, [lang]);

  return (
    <div className={`Site ${navOpen ? "SiteNavOpen" : ""}`} aria-label={t("a11y.site")}>
      <div className="Stars" aria-hidden="true">
        {stars.map((s) => (
          <span
            key={s.id}
            className="Star"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              opacity: s.alpha,
              animationDuration: `${s.twinkle}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <a className="SkipLink" href="#content">
        {t("skipToContent")}
      </a>

      <header className="Topbar" aria-label={t("a11y.mainNav")}>
        <div className="Container TopbarInner">
          <Link className="Brand" to="/" aria-label={t("brandAria")} onClick={() => setNavOpen(false)}>
            <span className="BrandMark" aria-hidden="true" />
            <span className="BrandText">
              <span className="BrandName">Oniric Streams</span>
              <span className="BrandMeta">{t("tagline")}</span>
            </span>
          </Link>

          <button
            type="button"
            className="NavToggle"
            aria-label={navOpen ? t("a11y.closeMenu") : t("a11y.openMenu")}
            aria-expanded={navOpen ? "true" : "false"}
            onClick={() => setNavOpen((v) => !v)}
          >
            <span className="NavToggleLines" aria-hidden="true" />
          </button>

          <nav className="TopNav" aria-label={t("a11y.pages")}>
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setNavOpen(false)} className="TopNavLink">
                {item.label}
              </a>
            ))}
            <button
              type="button"
              className="TopNavLink TopNavButton"
              aria-label={t("langLabel")}
              onClick={() => setLang((v) => (v === "en" ? "fr" : "en"))}
            >
              {t("langSwitch")}
            </button>
          </nav>
        </div>

        <div className="TopbarMobilePanel" aria-hidden={navOpen ? "false" : "true"}>
          <div className="Container TopbarMobilePanelInner">
            <button
              type="button"
              className="TopNavLink TopNavLinkMobile TopNavButton"
              aria-label={t("langLabel")}
              onClick={() => {
                setLang((v) => (v === "en" ? "fr" : "en"));
                setNavOpen(false);
              }}
            >
              {t("langSwitch")}
            </button>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setNavOpen(false)}
                className="TopNavLink TopNavLinkMobile"
              >
                {item.label}
              </a>
            ))}
            <div className="TopbarLinks" aria-label={t("a11y.externalLinks")}>
              <a className="MiniLink" href="#instagram" onClick={() => setNavOpen(false)}>
                Instagram
              </a>
              <a className="MiniLink" href="#tiktok" onClick={() => setNavOpen(false)}>
                TikTok
              </a>
              <a className="MiniLink" href="#presskit" onClick={() => setNavOpen(false)}>
                Press kit
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="Backdrop" aria-hidden="true" onClick={() => setNavOpen(false)} />

      <main id="content" className="Content" aria-label={t("a11y.mainContent")}>
        <Routes>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <footer className="Footer" aria-label={t("a11y.footer")}>
          <div className="Container FooterInner">
            <span className="FooterText">© {new Date().getFullYear()} Oniric Streams</span>
            <span className="FooterText FooterTextSoft">{t("footerRights")}</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
