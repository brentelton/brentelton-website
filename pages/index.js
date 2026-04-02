export default function Home() {
  const section = "max-w-6xl mx-auto px-6 py-20";
  const card =
    "bg-white rounded-3xl shadow-sm border border-stone-200 p-8 md:p-12";

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

            <div className="overflow-hidden rounded-3xl shadow-sm border border-stone-200 bg-white">
              <img
                src="/hero.jpg"
                alt="Brent Elton at sunrise"
                className="w-full h-[520px] object-cover"
              />
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
                <div className="bg-stone-50 rounded-2xl p-5">More energy</div>
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
          </div>
        </section>

        <section className={section}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-3xl shadow-sm border border-stone-200 bg-white order-2 md:order-1">
              <img
                src="/teaching.jpg"
                alt="Brent teaching a group at sunrise"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
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
          </div>
        </section>

        <section className={section}>
          <div className={card}>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              1:1 Sessions
            </h2>

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
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif mb-6">
                  Events and Workshops
                </h2>

                <div className="space-y-5 text-stone-700 text-lg">
                  <div>
                    <h3 className="font-semibold text-xl mb-1">
                      Sun, Sound and Stillness
                    </h3>
                    <p>
                      Join me for free community events that combine movement,
                      mindfulness, and nervous system education.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl mb-1">Joy That Lasts</h3>
                    <p>
                      A small group offering sharing the 3 main principles of my
                      work.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl mb-1">
                      Corporate Workshops
                    </h3>
                    <p>
                      Workshops and presentations for organisations, schools,
                      health professionals and workplaces.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl shadow-sm border border-stone-200 bg-white">
                <img
                  src="/sunrise-event.jpg"
                  alt="Sunrise community event"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
