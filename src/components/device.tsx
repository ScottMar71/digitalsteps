import Image from "next/image";
import type { ConceptVariant } from "@/content/work";
import { ConceptSite } from "@/components/concept-site";

export function Device({
  kind = "browser",
  src,
  alt,
  concept,
  preload = false,
  sizes = "(max-width: 800px) 92vw, 640px",
}: {
  kind?: "laptop" | "phone" | "browser";
  src?: string;
  alt: string;
  concept?: ConceptVariant;
  preload?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`device device-${kind}`}>
      {kind === "browser" ? (
        <div className="browser-chrome" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      ) : null}
      <div className={kind === "laptop" ? "device-bezel" : undefined}>
        <div className="device-screen">
          {src ? (
            <Image src={src} alt={alt} fill sizes={sizes} preload={preload} style={{ objectFit: "cover", objectPosition: "top center" }} />
          ) : concept ? (
            <ConceptSite variant={concept} />
          ) : null}
        </div>
      </div>
      {kind === "laptop" ? <div className="device-base" aria-hidden="true" /> : null}
      {kind === "phone" ? <span className="device-island" aria-hidden="true" /> : null}
    </div>
  );
}
