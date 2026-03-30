export default function Home() {
  return (
    <div style={{
      fontFamily: "Georgia, serif",
      maxWidth: "900px",
      margin: "0 auto",
      padding: "60px 24px",
      lineHeight: 1.6,
      color: "#3d3d3d"
    }}>
      <h1 style={{ fontSize: "56px", marginBottom: "20px" }}>
        Brent Elton
      </h1>

      <p style={{ fontSize: "24px", marginBottom: "32px" }}>
        Somatic Experiencing Practitioner
      </p>

      <h2>Heal your trauma so you can enjoy your life.</h2>

      <p>
        I help people feel safer in their body, repair their relationship with
        their nervous system, and move beyond anxiety, trauma, PTSD, and the
        sense that they have to work so hard just to survive.
      </p>

      <p>
        Whether you’re interested in healing trauma, releasing stress, or
        experiencing more joy in your life… I’d be happy to support you.
      </p>

      <p style={{ marginTop: "40px" }}>
        <a
          href="mailto:brentelton.sep@gmail.com?subject=I'd%20Like%20Some%20Support"
          style={{
            display: "inline-block",
            background: "#c75b27",
            color: "white",
            padding: "14px 24px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          I’d Like Some Support
        </a>
      </p>
    </div>
  );
}
