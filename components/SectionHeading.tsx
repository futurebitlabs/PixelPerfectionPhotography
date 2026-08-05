type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  italic?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  italic,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#a98652] md:mb-5 md:text-xs md:tracking-[0.24em]">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl leading-[1.08] text-[#1a1a1a] xs:text-4xl sm:text-5xl lg:text-[4rem]">
        {title}
        {italic ? (
          <>
            {" "}
            <em className="font-normal italic text-[#c9a876]">{italic}</em>
          </>
        ) : null}
      </h2>
    </div>
  );
}
