import type { Metadata } from "next";
import { Cta, PageHead, Section, Steps } from "@/components/sections";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Digital Steps",
  description:
    "Digital Steps is run by Scott Maryan, a qualified teacher with 15+ years helping people and organisations learn technology. Patient, jargon-free tuition, training and digital work across Norfolk and Suffolk.",
  alternates: { canonical: "/about" },
};

const principles = [
  { title: "Plain English, always", body: "If we cannot explain it simply, we have not understood it well enough. No acronyms without a translation." },
  { title: "Your pace, not ours", body: "Confidence comes from doing something yourself, more than once, without being hurried. We build that time in." },
  { title: "Nothing left unexplained", body: "Whatever we set up or build, you leave knowing what it is, why it is there, and what to do if it misbehaves." },
  { title: "Honest advice", body: "We do not sell hardware or take commission. If the cheapest option is the right one, we will say so." },
];

const background = [
  "Qualified teacher: CertEd, Institute of Education, University of London (2004).",
  "Fifteen-plus years leading learning and development for software companies, in AI, customer-contact and collaboration tools.",
  "Trained more than 3,000 people a year across 80-plus organisations, and designed hundreds of online courses and training videos.",
  "Helped teams from small firms to HSBC, Vodafone and Deloitte adopt new systems, most recently AI.",
  "PRINCE2 Practitioner, ITIL and APMG Change Management certified.",
  "Runner and padel player, which explains the running apps in Our work.",
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
            Hello, I&apos;m {site.founderFirstName}. I qualified as a teacher in 2004 and have spent the twenty years since
            helping people learn technology, most recently leading learning and development for software companies, where
            my job was to make complicated systems make sense to the people who had to use them every day.
          </p>
          <p>
            Over those years I have trained thousands of people, from complete beginners to senior managers, and the lesson
            was always the same. The problem was rarely the technology. It was that nobody had taken the time to explain
            it properly. People were handed a laptop, a login or a new system and expected to get on with it. The
            confident ones muddled through. Everyone else quietly stopped asking, and a lot of capable people decided
            technology was &ldquo;not for them&rdquo;.
          </p>
          <p>
            Digital Steps is my answer to that, closer to home. It brings together two things I care about: teaching
            people patiently, and building digital things that are simple enough to be understood. Sometimes that means
            sitting at a kitchen table showing someone how to video-call their family. Sometimes it means training a team
            to use the tools they already pay for. Sometimes it means building a website or an app, and then teaching
            the owner how it works.
          </p>
          <p>
            The thread through all of it is the same. I don&apos;t just build technology. I help people understand it,
            use it with confidence, and get real value from it. That is the difference a teaching background makes, and
            it is why the word <strong>steps</strong> is in the name: everyone can take the next one.
          </p>
        </div>
      </Section>

      <Section id="background" title="Background, briefly" narrow>
        <ul className="plain-list">
          {background.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="hint" style={{ marginTop: "1.25rem" }}>
          The longer version is on{" "}
          <a href={site.linkedin} rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
          .
        </p>
      </Section>

      <Section id="how" title="How we work">
        <Steps items={principles} />
      </Section>

      <Section id="where" title="Where and who" narrow>
        <div className="prose">
          <p>
            <strong>Where.</strong> {site.areaDetail} In-person sessions happen at your home, at your workplace, or at a
            quiet venue we arrange.
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
