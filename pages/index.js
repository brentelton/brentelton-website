export default function Home() {
  const section = "max-w-6xl mx-auto px-6 py-20";
  const card = "bg-white rounded-3xl shadow-sm border border-stone-200 p-8 md:p-12";

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <header className="sticky top-0 z-50 bg-stone-100/90 backdrop-blur border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <div className="text-2xl md:text-3xl font-serif">Brent Elton</div>
            <div className="text-sm text-stone-600">
              Somatic Experiencing Practitioner
            </div>
          </div>

          <a
            href="mailto:brentelton.sep@gmail.com?subject=I'd%20Like%20Some%20Support"
            className="rounded-full bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 font-medium transition"
          >
            I’d Like Some Support
          </a>
        </div>
      </header>

      <main>
        <section className={section}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-stone-500 mb-4">
                Trauma • Anxiety • PTSD • Somatic Experiencing
              </p>

              <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
                Heal your trauma so you can enjoy your life.
              </h1>

              <p className="text-xl leading-relaxed text-stone-700 mb-6">
                I help people feel safer in their body, repair their relationship
                with their nervous system, and move beyond anxiety, trauma,
                PTSD, and the sense that they have to work so hard just to
                survive.
              </p>

              <p className="text-lg leading-relaxed text-stone-700 mb-8">
                Mental health isn’t just in your head. When the nervous system
                gets stuck in survival mode, it burns a lot of energy. My work
                is about helping you come back to a sense of safety within
                yourself — so you can feel more relaxed, more resilient, and
                more able to enjoy your life.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:brentelton.sep@gmail.com?subject=I'd%20Like%20Some%20Support"
                  className="rounded-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-medium transition"
                >
                  I’d Like Some Support
                </a>

                <a
                  href="#body-based"
                  className="rounded-full border border-stone-300 px-6 py-3 font-medium hover:bg-white transition"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="rounded-3xl shadow-sm border border-stone-200 bg-gradient-to-br from-stone-200 via-stone-100 to-orange-100 min-h-[420px] flex items-center justify-center p-10">
              <div className="text-center">
                <div className="text-6xl mb-4">BE</div>
                <p className="text-lg text-stone-700 leading-relaxed max-w-sm">
                  A body-based approach to healing trauma, anxiety, and stress.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="body-based" className={section}>
          <div className={card}>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              A body-based approach to mental health
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                I’m a Somatic Experiencing Practitioner (SEP), and I help people
                heal from trauma, anxiety, PTSD, and chronic overwhelm by
                working with the nervous system.
              </p>

              <p>
                Rather than only talking about what happened, we gently help
                your body process any lingering stress, tension, or survival
                responses that may still be stuck.
              </p>

              <p>
                As your nervous system becomes more regulated, life begins to
                feel different.
              </p>

              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="bg-stone-50 rounded-2xl p-5">
                  Less anxiety and overwhelm
                </div>
                <div className="bg-stone-50 rounded-2xl p-5">
                  More energy
                </div>
                <div className="bg-stone-50 rounded-2xl p-5">
                  Feeling calmer and more present
                </div>
                <div className="bg-stone-50 rounded-2xl p-5">
                  Less time stuck in your head
                </div>
                <div className="bg-stone-50 rounded-2xl p-5">
                  More confidence and connection
                </div>
                <div className="bg-stone-50 rounded-2xl p-5">
                  More enjoyment of life
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={card}>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              You may be here because...
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-lg text-stone-700">
              <div className="bg-stone-50 rounded-2xl p-5">
                You’ve tried talk therapy, but still don’t feel different in
                your body.
              </div>

              <div className="bg-stone-50 rounded-2xl p-5">
                You feel anxious, overwhelmed, shut down, or constantly on edge.
              </div>

              <div className="bg-stone-50 rounded-2xl p-5">
                You overthink, people-please, or work hard just to feel okay.
              </div>

              <div className="bg-stone-50 rounded-2xl p-5">
                You’ve experienced trauma, difficult relationships, burnout, or
                long-term stress.
              </div>

              <div className="bg-stone-50 rounded-2xl p-5 md:col-span-2">
                You know something needs to change, but don’t know where to
                start.
              </div>
            </div>

            <p className="mt-8 text-lg text-stone-700">
              Instead of more willpower or meaning making, maybe your nervous
              system simply needs the right kind of support.
            </p>
          </div>
        </section>

        <section className={section}>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="rounded-3xl shadow-sm border border-stone-200 bg-white p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                About Brent
              </h2>

              <div className="space-y-5 text-lg leading-relaxed text-stone-700">
                <p>
                  I’m a movement and meditation teacher and Somatic Experiencing
                  Practitioner.
                </p>

                <p>
                  I was suffering anxiety and immobilising PTSD after some
                  traumatic experiences, and part of me wanted to heal so I
                  could get back to my boxing career.
                </p>

                <p>
                  This work helped my mental health improve so much, so fast,
                  that I quickly realised helping other people experience this
                  was a far more rewarding career choice than boxing could ever
                  be for me.
                </p>

                <p>
                  I discovered that mental health is biological as much as it is
                  psychological.
                </p>

                <p>
                  My work now brings together Somatic Experiencing, movement,
                  mindfulness, and nervous system education to help people feel
                  safer, calmer, more resilient, and more able to enjoy their
                  lives.
                </p>
              </div>
            </div>

            <div className="rounded-3xl shadow-sm border border-stone-200 bg-gradient-to-br from-orange-100 via-stone-100 to-stone-200 min-h-[420px] flex items-center justify-center p-10">
              <div className="text-center max-w-sm">
                <p className="text-2xl font-serif mb-4">
                  Mental health is biological as much as it is psychological.
                </p>
                <p className="text-stone-700 text-lg leading-relaxed">
                  When we befriend the nervous system, life becomes a whole lot
                  more comfortable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={card}>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              1:1 Sessions
            </h2>

            <p className="text-xl text-stone-700 mb-6">
              The main way to work with me is through 1:1 sessions.
            </p>

            <p className="text-lg text-stone-700 mb-8">
              Whether you’re interested in healing trauma, releasing stress, or
              experiencing more joy in your life… I’d be happy to support you.
            </p>

            <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200">
              <div className="inline-block rounded-full bg-orange-600 text-white px-5 py-2 font-medium mb-6">
                Let’s Talk
              </div>

              <div className="space-y-5 text-lg leading-relaxed text-stone-700">
                <p>
                  If you’d like to see if this work is a good fit for you, let’s
                  have a chat.
                </p>

                <p>
                  Although what I offer isn’t talk therapy, it is helpful for me
                  to know a little about what you’re hoping to get from this
                  work.
                </p>

                <p>
                  Together, we will be creating the conditions to help your
                  nervous system come back into a more relaxed and resilient
                  place. It’s more about learning how to be in your body now
                  than it is talking about what happened “back then”.
                </p>

                <p>
                  If you have any questions about what that looks like, I’d be
                  happy to answer them before our first session.
                </p>
              </div>

              <a
                href="mailto:brentelton.sep@gmail.com?subject=I'd%20Like%20Some%20Support"
                className="inline-block mt-8 rounded-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-medium transition"
              >
                I’d Like Some Support
              </a>
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={card}>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              Events and Workshops
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="bg-stone-50 rounded-2xl p-5">
                <h3 className="text-xl font-semibold mb-2">
                  Sun, Sound and Stillness
                </h3>
                <p className="text-stone-700">
                  Join me for free community events that combine movement,
                  mindfulness, and nervous system education.
                </p>
              </div>

              <div className="bg-stone-50 rounded-2xl p-5">
                <h3 className="text-xl font-semibold mb-2">
                  Joy That Lasts
                </h3>
                <p className="text-stone-700">
                  A small group offering sharing the 3 main principles of my
                  work.
                </p>
              </div>

              <div className="bg-stone-50 rounded-2xl p-5">
                <h3 className="text-xl font-semibold mb-2">
                  Corporate Workshops
                </h3>
                <p className="text-stone-700">
                  Workshops and presentations for organisations, schools, health
                  professionals and workplaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={section}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Reach out if you’d like support.
            </h2>

            <p className="text-xl text-stone-700 leading-relaxed mb-8">
              Whether you’re ready to begin, have a question, or simply want to
              see if this work is right for you — I’d love to hear from you.
            </p>

            <a
              href="mailto:brentelton.sep@gmail.com?subject=I'd%20Like%20Some%20Support"
              className="inline-block rounded-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 font-medium transition"
            >
              I’d Like Some Support
            </a>

            <p className="mt-6 text-stone-600">brentelton.sep@gmail.com</p>
          </div>
        </section>
      </main>
    </div>
  );
}
