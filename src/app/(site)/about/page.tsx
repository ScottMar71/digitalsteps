import type { Metadata } from "next";
import { Cta, PageHead, Section, Steps } from "@/components/sections";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Digital Steps",
  description:
    "Digital Steps is run by a teacher. Our story, our teaching background and our practical, patient, jargon-free approach to technology in Norfolk.",
  alternates: { canonical: "/about" },
};

const principles = [
  { title: "Plain English, always", body: "If we cannot explain it simply, we have not understood it well enough. No acronyms without a translation." },
  { title: "Your pace, not ours", body: "Confidence comes from doing something yourself, more than once, without being hurried. We build that time in." },
  { title: "Nothing left unexplained", body: "Whatever we set up or build, you leave knowing what it is, why it is there, and what to do if it misbehaves." },
  { title: "Honest advice", body: "We do not sell hardware or take commission. If the cheapest option is the right one, we will say so." },
];

export default function AboutPage() {
  return (
    <>
      <PageHead
        kicker="About Digital Steps"
        title={
          <>
            A teacher first, <em>a technologist second.</em>
          </>
        }
        lede="Digital Steps exists because technology is usually explained badly, by people in a hurry, to people who have stopped asking questions."
      />

      <Section id="story" narrow>
        <div className="prose">
          <p className="lead">
            Hello, I&apos;m {site.founderFirstName}. I have spent my working life teaching, and I kept noticing the same
            thing: the problem was rarely the technology. It was that nobody had taken the time to explain it properly.
          </p>
          <p>
            People were handed a laptop, a login or a new system and expected to get on with it. The confident ones
            muddled through. Everyone else quietly stopped asking, and a lot of capable people decided technology was
            &ldquo;not for them&rdquo;.
          </p>
          <p>
            Digital Steps is my answer to that. It brings together two things I care about: teaching people patiently,
            and building digital things that are simple enough to be understood. Sometimes that means sitting at a kitchen
            table showing someone how to video-call their family. Sometimes it means training a team to use the tools they
            already pay for. Sometimes it means building a website or an app, and then teaching the owner how it works.
          </p>
          <p>
            The thread through all of it is the same. I don&apos;t just build technology. I help people understand it, use
            it with confidence, and get real value from it. That is the difference a teaching background makes, and it is
            why the word <strong>steps</strong> is in the name: everyone can take the next one.
          </p>
        </div>
      </Section>

      <Section id="how" title="How we work">
        <Steps items={principles} />
      </Section>

      <Section id="where" title="Where and who" narrow>
        <div className="prose">
          <p>
            <strong>Where.</strong> {site.areaDetail} In-person sessions happen at your home, your workplace or a quiet
            venue we arrange.
          </p>
          <p>
            <strong>Who.</strong> Complete beginners of any age, people returning to work, small businesses, charities and
            community groups, and anyone who would like technology explained without being talked down to.
          </p>
          <p>
            <strong>Accessibility.</strong> Tell us about anything that would make learning easier for you, such as larger
            text, more time, a family member present or a particular room. We will plan around it.
          </p>
        </div>
      </Section>

      <Cta title="Shall we have a conversation?" body="No obligation, no sales pitch. Tell us what you would like to be able to do and we will suggest a sensible first step." />
    </>
  );
}
