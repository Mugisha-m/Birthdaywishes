import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const pages = [
  { id: "home", label: "Home" },
  { id: "story", label: "Story" },
  { id: "wishes", label: "Wishes" },
  { id: "gallery", label: "Photos" },
];

const wishes = [
  {
    from: "Family",
    title: "Big birthday smile",
    body: "Teta, may this birthday feel colorful, playful, and full of the kind of happiness that stays in your heart.",
    color: "rose",
  },
  {
    from: "A Friend",
    title: "A bright new year",
    body: "Happy birthday, RURANGIRWA Teta. May 30 May always remind you how loved, special, and wonderfully made you are.",
    color: "gold",
  },
  {
    from: "Someone grateful",
    title: "Sweet little joys",
    body: "May you receive soft laughter, happy surprises, and many small moments that make you feel like a beloved birthday child.",
    color: "blue",
  },
];

const galleryItems = [
  { title: "Balloon Heart", className: "gif-heart" },
  { title: "Tiny Candle", className: "gif-candle" },
  { title: "Confetti Dots", className: "gif-sparkles" },
  { title: "Rainbow Ribbon", className: "gif-ribbon" },
];

function App() {
  const [page, setPage] = useState("home");
  const [customWish, setCustomWish] = useState("");
  const [posted, setPosted] = useState([]);
  const [showSurprise, setShowSurprise] = useState(false);

  const age = useMemo(() => {
    const birth = new Date("2005-05-30T00:00:00");
    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    const birthdayThisYear = new Date(today.getFullYear(), 4, 30);
    if (today < birthdayThisYear) years -= 1;
    return years;
  }, []);

  function submitWish(event) {
    event.preventDefault();
    const cleanWish = customWish.trim();
    if (!cleanWish) return;
    setPosted([{ from: "You", title: "A fresh wish", body: cleanWish, color: "blue" }, ...posted]);
    setCustomWish("");
  }

  return (
    <div className="app">
      <Decor />
      <header className="topbar">
        <button className="brand" onClick={() => setPage("home")} aria-label="Open home page">
          Teta Day<span>30 May</span>
        </button>
        <nav aria-label="Main pages">
          {pages.map((item) => (
            <button
              key={item.id}
              className={page === item.id ? "active" : ""}
              onClick={() => setPage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button className="surprise-nav" onClick={() => setShowSurprise(true)}>
          Surprise Baby
        </button>
      </header>

      <main>
        {page === "home" && <Home age={age} setPage={setPage} openSurprise={() => setShowSurprise(true)} />}
        {page === "story" && <Story age={age} />}
        {page === "wishes" && (
          <Wishes
            posted={posted}
            customWish={customWish}
            setCustomWish={setCustomWish}
            submitWish={submitWish}
          />
        )}
        {page === "gallery" && <Gallery />}
      </main>

      {showSurprise && <BabySurprise onClose={() => setShowSurprise(false)} />}

      <footer>
        A colorful, childlike birthday site for RURANGIRWA Teta. Clean safe visuals only.
      </footer>
    </div>
  );
}

function Decor() {
  return (
    <div className="decor" aria-hidden="true">
      <span className="float f1" />
      <span className="float f2" />
      <span className="float f3" />
      <span className="float f4" />
      <span className="spark s1" />
      <span className="spark s2" />
      <span className="spark s3" />
      <span className="confetti c1" />
      <span className="confetti c2" />
      <span className="confetti c3" />
      <span className="confetti c4" />
    </div>
  );
}

function Home({ age, setPage, openSurprise }) {
  return (
    <>
    <section className="hero page">
      <div className="hero-copy">
        <p className="eyebrow">Born 30 May 2005</p>
        <h1>Happy Birthday RURANGIRWA Teta</h1>
        <p className="lead">
          A big, bright, childlike birthday world made with photos, wishes, soft animations,
          balloons, cake colors, and a surprise that is silly enough to make her smile.
        </p>
        <div className="hero-actions">
          <button className="primary" onClick={() => setPage("wishes")}>
            Write a Wish
          </button>
          <button className="secondary" onClick={() => setPage("gallery")}>
            See Photos
          </button>
          <button className="surprise-button" onClick={openSurprise}>
            See Baby Surprise
          </button>
        </div>
      </div>
      <div className="hero-visual" aria-label={`Teta turns ${age}`}>
        <div className="portrait-frame">
          <img src="/assets/teta-portrait.png" alt="RURANGIRWA Teta portrait" />
          <span className="photo-badge">{age}</span>
        </div>
        <div className="birthday-card">
          <div className="cake">
            <span className="flame" />
            <span className="wick" />
            <span className="candle" />
            <span className="layer layer-top" />
            <span className="layer layer-mid" />
            <span className="layer layer-low" />
          </div>
          <strong>{age}</strong>
          <span>years of grace, courage, and light</span>
        </div>
      </div>
    </section>
    <section className="page playful-strip">
      <article>
        <span>Big color</span>
        <strong>Red, blue, yellow</strong>
      </article>
      <article>
        <span>Soft shapes</span>
        <strong>Rounded like balloons</strong>
      </article>
      <article>
        <span>Happy mood</span>
        <strong>Made to feel young</strong>
      </article>
    </section>
    </>
  );
}

function Story({ age }) {
  return (
    <section className="page story">
      <div>
        <p className="eyebrow">Her Story</p>
        <h2>A bright birthday page for Teta</h2>
        <p>
          RURANGIRWA Teta's birthday is a reason to make everything feel sweet, innocent, and
          joyful. The design follows the provided Festive Joy system: bold colors, big rounded
          modules, soft shadows, and a playful childlike rhythm.
        </p>
        <div className="design-reference">
          <img src="/assets/designsystem.png" alt="Provided colorful birthday design reference" />
          <div>
            <strong>Design mood</strong>
            <span>Balloon arch, cake colors, gift-box energy, and friendly rounded shapes.</span>
          </div>
        </div>
      </div>
      <div className="timeline">
        <Milestone year="2005" text="A special life begins on 30 May." />
        <Milestone year="Today" text={`Teta is celebrated with ${age} years of memories and love.`} />
        <Milestone year="Next" text="More confidence, laughter, gentle surprises, and open doors." />
      </div>
    </section>
  );
}

function Milestone({ year, text }) {
  return (
    <article className="milestone">
      <strong>{year}</strong>
      <p>{text}</p>
    </article>
  );
}

function Wishes({ posted, customWish, setCustomWish, submitWish }) {
  const allWishes = [...posted, ...wishes];

  return (
    <section className="page wishes">
      <div className="section-heading">
        <p className="eyebrow">Kind Words</p>
        <h2>Wish wall for Teta</h2>
      </div>
      <form className="wish-form" onSubmit={submitWish}>
        <label htmlFor="wish">Add your message</label>
        <textarea
          id="wish"
          value={customWish}
          onChange={(event) => setCustomWish(event.target.value)}
          placeholder="Write a sweet birthday wish..."
          maxLength="220"
        />
        <button className="primary" type="submit">
          Post Wish
        </button>
      </form>
      <div className="wish-grid">
        {allWishes.map((wish, index) => (
          <article className={`wish-card ${wish.color}`} key={`${wish.from}-${index}`}>
            <span>{wish.from}</span>
            <h3>{wish.title}</h3>
            <p>{wish.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="page gallery">
      <div className="section-heading">
        <p className="eyebrow">Photos and Motion</p>
        <h2>Colorful memories with playful GIF-style moments</h2>
      </div>
      <div className="photo-showcase">
        <img src="/assets/teta-collage.png" alt="A collage of Teta birthday and life moments" />
        <div>
          <p className="eyebrow">Provided Photos</p>
          <h3>Teta in many beautiful moments</h3>
          <p>
            These photos make the site feel personal while the animated cards keep it bright,
            innocent, and birthday-child cheerful.
          </p>
        </div>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article className="gif-card" key={item.title}>
            <div className={`gif-stage ${item.className}`}>
              <span />
              <span />
              <span />
            </div>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function BabySurprise({ onClose }) {
  return (
    <div className="surprise-overlay" role="dialog" aria-modal="true" aria-label="Surprise baby crying">
      <div className="surprise-panel">
        <button className="close" onClick={onClose} aria-label="Close surprise">
          Close
        </button>
        <p className="eyebrow">Tiny Surprise</p>
        <h2>The baby wants birthday cake</h2>
        <div className="baby-scene" aria-hidden="true">
          <span className="baby-hair hair-a" />
          <span className="baby-hair hair-b" />
          <span className="baby-head">
            <span className="baby-eye eye-left" />
            <span className="baby-eye eye-right" />
            <span className="tear tear-left" />
            <span className="tear tear-right" />
            <span className="baby-mouth" />
            <span className="baby-cheek cheek-left" />
            <span className="baby-cheek cheek-right" />
          </span>
          <span className="baby-body" />
          <span className="baby-arm arm-left" />
          <span className="baby-arm arm-right" />
          <span className="sound sound-one">waa</span>
          <span className="sound sound-two">cake</span>
        </div>
        <p className="surprise-copy">
          A silly crying baby animation, made only for a cute birthday laugh.
        </p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
