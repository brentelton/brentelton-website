export default function Home() {
  return (
    <>
      <div className="page">
        <header className="topbar">
          <div className="wrap topbarInner">
            <div>
              <div className="brand">Brent Elton</div>
              <div className="subbrand">Somatic Experiencing Practitioner</div>
            </div>
            <a
              className="button buttonPrimary"
              href="mailto:brentelton.sep@gmail.com?subject=I'd%20Like%20Some%20Support"
            >
              I’d Like Some Support
            </a>
          </div>
        </header>

        <main>
          <section className="hero wrap">
            <div className="heroText">
              <div className="eyebrow">
                Trauma • Anxiety • PTSD • Somatic Experiencing
              </div>
              <h1>Heal your trauma so you can enjoy your life.</h1>
              <p className="lead">
                I help people feel safer in their body, repair their relationship
                with their nervous system, and move beyond anxiety, trauma, PTSD,
                and the sense that they have to work so hard just to survive.
              </p>
              <p>
                Mental health isn’t just in your head. When the nervous system
                gets stuck in survival mode, it burns a lot of energy. My work is
                about helping you come back to a sense of safety within yourself —
                so you can feel more relaxed, more resilient, and more able to
                enjoy your life.
              </p>
              <div className="buttonRow">
                <a
                  className="button buttonPrimary"
                  href="mailto:brentelton.sep@gmail.com?subject=I'd%20Like%20Some%20Support"
                >
                  I’d Like Some Support
                </a>
                <a className="button buttonSecondary" href="#learn-more">
                  Learn More
                </a>
              </div>
            </div>

            <div className="heroImageCard">
              <img
                src="/sunrise-event.jpg"
                alt="Brent Elton at sunrise"
                className="heroImage"
              />
            </div>
          </section>

          <section id="learn-more" className="section wrap">
            <div className="card">
              <p className="sectionLabel">
                A body-based approach to healing trauma, anxiety, and stress.
              </p>
              <h2>A body-based approach to mental health</h2>
              <p>
                I’m a Somatic Experiencing Practitioner (SEP), and I help people
                heal from trauma, anxiety, PTSD, and chronic overwhelm by working
                with the nervous system.
              </p>
              <p>
                Rather than only talking about what happened, we gently help your
                body process any lingering stress, tension, or survival responses
                that may still be stuck.
              </p>
              <p>
                As your nervous system becomes more regulated, life begins to feel
                different.
              </p>

              <ul className="benefits">
                <li>Less anxiety and overwhelm</li>
                <li>More energy</li>
                <li>Feeling calmer and more present</li>
                <li>Less time stuck in your head</li>
                <li>More confidence and connection</li>
                <li>More enjoyment of life</li>
              </ul>
            </div>
          </section>

          <section className="section wrap twoCol">
            <div className="card">
              <h2>You may be here because...</h2>
              <ul className="benefits">
                <li>You’ve tried talk therapy, but still don’t feel different in your body.</li>
                <li>You feel anxious, overwhelmed, shut down, or constantly on edge.</li>
                <li>You overthink, people-please, or work hard just to feel okay.</li>
                <li>You’ve experienced trauma, difficult relationships, burnout, or long-term stress.</li>
                <li>You know something needs to change, but don’t know where to start.</li>
              </ul>
              <p>
                Instead of more willpower or meaning making, maybe your nervous
                system simply needs the right kind of support.
              </p>
            </div>

            <div className="card">
              <h2>About Brent</h2>
              <p>
                Brent Elton is a Somatic Experiencing Practitioner who helps
                people heal from trauma, anxiety, and PTSD through a body-based
                approach to mental health.
              </p>
              <p>
                He combines somatic therapy, movement, and meditation to help
                people feel safer, more connected, and more able to enjoy their
                lives.
              </p>
              <p>
                Brent also runs workshops, events, and presentations for
                organisations, schools, health professionals, and workplaces.
              </p>
            </div>
          </section>

          <section className="section wrap">
            <div className="cta">
              <h2>Ready for support?</h2>
              <p>
                If this approach resonates with you, send me an email and we can
                explore what kind of support might be the best fit.
              </p>
              <a
                className="button buttonPrimary"
                href="mailto:brentelton.sep@gmail.com?subject=I'd%20Like%20Some%20Support"
              >
                Contact Brent
              </a>
            </div>
          </section>
        </main>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f5f1ea;
          color: #2f2a24;
          font-family: Georgia, "Times New Roman", serif;
        }

        .wrap {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(245, 241, 234, 0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #ddd3c5;
        }

        .topbarInner {
          min-height: 84px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .brand {
          font-size: 32px;
          line-height: 1.1;
          font-weight: 700;
        }

        .subbrand {
          font-size: 15px;
          color: #6d6257;
          margin-top: 6px;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
          padding-top: 56px;
          padding-bottom: 32px;
        }

        .eyebrow {
          font-size: 15px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #7a6d60;
          margin-bottom: 18px;
        }

        h1 {
          font-size: 62px;
          line-height: 1.02;
          margin: 0 0 20px;
          font-weight: 700;
        }

        h2 {
          font-size: 40px;
          line-height: 1.1;
          margin: 0 0 18px;
          font-weight: 700;
        }

        p {
          font-size: 21px;
          line-height: 1.65;
          margin: 0 0 18px;
        }

        .lead {
          font-size: 24px;
        }

        .buttonRow {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .button {
          display: inline-block;
          padding: 14px 20px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 700;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }

        .button:hover {
          transform: translateY(-1px);
          opacity: 0.95;
        }

        .buttonPrimary {
          background: #2f2a24;
          color: #fff;
        }

        .buttonSecondary {
          border: 1px solid #b8aa98;
          color: #2f2a24;
          background: transparent;
        }

        .heroImageCard,
        .card,
        .cta {
          background: #fffdfa;
          border: 1px solid #ddd3c5;
          border-radius: 28px;
          box-shadow: 0 10px 30px rgba(47, 42, 36, 0.06);
        }

        .heroImageCard {
          overflow: hidden;
          min-height: 520px;
        }

        .heroImage {
          width: 100%;
          height: 100%;
          min-height: 520px;
          object-fit: cover;
          display: block;
        }

        .section {
          padding: 20px 0 34px;
        }

        .card {
          padding: 36px;
        }

        .sectionLabel {
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #7a6d60;
          margin-bottom: 10px;
        }

        .benefits {
          margin: 22px 0;
          padding-left: 22px;
        }

        .benefits li {
          font-size: 21px;
          line-height: 1.65;
          margin-bottom: 8px;
        }

        .twoCol {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .cta {
          padding: 40px;
          text-align: center;
        }

        @media (max-width: 900px) {
          .hero,
          .twoCol {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 46px;
          }

          h2 {
            font-size: 34px;
          }

          p,
          .benefits li,
          .lead {
            font-size: 19px;
          }

          .topbarInner {
            align-items: flex-start;
            padding-top: 16px;
            padding-bottom: 16px;
            flex-direction: column;
          }

          .heroImageCard,
          .heroImage {
            min-height: 320px;
          }
        }
      `}</style>
    </>
  );
}
