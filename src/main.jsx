import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const pages = [
  { id: "home", label: "Home" },
  { id: "story", label: "Story" },
  { id: "wishes", label: "Wishes" },
  { id: "gallery", label: "Photos" },
];

const WISH_EMAIL = "mugishaalbert999@gmail.com";
const WISH_ENDPOINT = `https://formsubmit.co/ajax/${WISH_EMAIL}`;
// 8238e54acc4cea2ba249f1ac7e3cad33

const wishes = [
  {
    from: "With love",
    title: "Birthday joy",
    body: "Teta, may this birthday bring you bright smiles, gentle surprises, and happiness that stays close to your heart.",
    color: "rose",
  },
  {
    from: "For Teta",
    title: "A beautiful year",
    body: "Happy birthday, RURANGIRWA Teta. May this year bring confidence, peace, laughter, and many reasons to feel loved.",
    color: "green",
  },
  {
    from: "Warm wishes",
    title: "Sweet moments",
    body: "May your day be filled with soft laughter, kind words, and little moments that make your heart feel light.",
    color: "blue",
  },
];

const galleryItems = [
  { title: "Heart", className: "gif-heart" },
  { title: "Candle", className: "gif-candle" },
  { title: "Sparkle", className: "gif-sparkles" },
  { title: "Ribbon", className: "gif-ribbon" },
];

function App() {
  const [page, setPage] = useState("home");
  const [customWish, setCustomWish] = useState("");
  const [posted, setPosted] = useState([]);
  const [wishStatus, setWishStatus] = useState("");
  const [showSurprise, setShowSurprise] = useState(false);

  const age = useMemo(() => {
    const birth = new Date("2005-05-30T00:00:00");
    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    const birthdayThisYear = new Date(today.getFullYear(), 4, 30);
    if (today < birthdayThisYear) years -= 1;
    return years;
  }, []);

  async function submitWish(event) {
    event.preventDefault();
    const cleanWish = customWish.trim();
    if (!cleanWish) return;
    setPosted([{ from: "You", title: "Your wish", body: cleanWish, color: "green" }, ...posted]);
    setCustomWish("");
    setWishStatus("Sending...");

    try {
      if (WISH_EMAIL === "your-email@example.com") {
        throw new Error("Set WISH_EMAIL before publishing.");
      }

      const response = await fetch(WISH_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New birthday wish for Teta",
          _captcha: "false",
          name: "Birthday wish page",
          message: cleanWish,
        }),
      });

      if (!response.ok) {
        throw new Error("Wish email failed.");
      }

      setWishStatus("Sent.");
    } catch (error) {
      console.error(error);
      setWishStatus("Added.");
    }
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
          Surprise
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
            wishStatus={wishStatus}
          />
        )}
        {page === "gallery" && <Gallery />}
      </main>

      {showSurprise && <BabySurprise onClose={() => setShowSurprise(false)} />}

      <footer>
        Happy Birthday, RURANGIRWA Teta.
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
          Today is wrapped in color, warmth, sweet memories, and every little reason to smile.
        </p>
        <div className="hero-actions">
          <button className="primary" onClick={() => setPage("wishes")}>
            Write a Wish
          </button>
          <button className="secondary" onClick={() => setPage("gallery")}>
            See Photos
          </button>
          <button className="surprise-button" onClick={openSurprise}>
            Open Surprise
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
        <span>Joy</span>
        <strong>Bright and warm</strong>
      </article>
      <article>
        <span>Love</span>
        <strong>Close to heart</strong>
      </article>
      <article>
        <span>Peace</span>
        <strong>Soft and beautiful</strong>
      </article>
    </section>
    </>
  );
}

function Story({ age }) {
  return (
    <section className="page story">
      <div>
        <p className="eyebrow">Her Day</p>
        <h2>A beautiful celebration for Teta</h2>
        <p>
          RURANGIRWA Teta, may your birthday feel gentle, joyful, and full of love from the
          people who are grateful for you.
        </p>
        <div className="design-reference">
          <img src="/assets/designsystem.png" alt="Birthday colors" />
          <div>
            <strong>Birthday glow</strong>
            <span>Warm color, soft light, and a cheerful moment made just for today.</span>
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

function Wishes({ posted, customWish, setCustomWish, submitWish, wishStatus }) {
  const allWishes = [...posted, ...wishes];

  return (
    <section className="page wishes">
      <div className="section-heading">
        <p className="eyebrow">Kind Words</p>
        <h2>Birthday wishes for Teta</h2>
      </div>
      <form className="wish-form" onSubmit={submitWish}>
        <label htmlFor="wish">Your message</label>
        <textarea
          id="wish"
          value={customWish}
          onChange={(event) => setCustomWish(event.target.value)}
          placeholder="Write a sweet birthday wish..."
          maxLength="220"
        />
        <div className="form-row">
          <button className="primary" type="submit">
            Send Wish
          </button>
          {wishStatus && <span className="wish-status">{wishStatus}</span>}
        </div>
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
        <p className="eyebrow">Photos</p>
        <h2>Beautiful memories</h2>
      </div>
      <div className="photo-showcase">
        <img src="/assets/teta-collage.png" alt="A collage of Teta birthday and life moments" />
        <div>
          <p className="eyebrow">Memories</p>
          <h3>Teta in beautiful moments</h3>
          <p>
            A bright collection of smiles, warmth, and memories worth keeping close.
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
    <div className="surprise-overlay" role="dialog" aria-modal="true" aria-label="Birthday surprise">
      <div className="surprise-panel">
        <button className="close" onClick={onClose} aria-label="Close surprise">
          Close
        </button>
        <p className="eyebrow">Surprise</p>
        <h2>A little birthday laugh</h2>
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
          Cake, smiles, and one more happy moment for Teta.
        </p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
