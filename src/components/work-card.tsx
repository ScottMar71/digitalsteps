import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { Device } from "@/components/device";
import type { WorkItem } from "@/content/work";

export function WorkCard({
  item,
  frame = "browser",
  preload = false,
  large = false,
}: {
  item: WorkItem;
  frame?: "browser" | "laptop" | "phone";
  preload?: boolean;
  large?: boolean;
}) {
  return (
    <article className={`work-card${large ? " is-large" : ""}`}>
      <Link href={`/work/${item.slug}`}>
        <ViewTransition name={`work-${item.slug}`} share="morph" default="none">
          <div className={`work-frame panel-${item.panel}`}>
            {item.presentation === "photo" && item.image ? (
              <div className="work-photo">
                <Image src={item.image.src} alt="" fill sizes={large ? "(max-width: 800px) 100vw, 70vw" : "(max-width: 800px) 100vw, 40vw"} style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            ) : (
              <Device
                kind={frame}
                src={item.image?.src}
                alt=""
                concept={item.concept}
                preload={preload}
                sizes={large ? "(max-width: 800px) 100vw, 70vw" : "(max-width: 800px) 100vw, 40vw"}
              />
            )}
          </div>
        </ViewTransition>
        <div className="work-copy">
          <p className="meta-row">
            <span className={`status status-${item.status}`}>{item.statusLabel}</span>
            <span>{item.industry}</span>
          </p>
          <h3>{item.name}</h3>
          <p>{item.summary}</p>
        </div>
      </Link>
    </article>
  );
}
