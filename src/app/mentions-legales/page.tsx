import MentionsFR from "./Mentions.fr"
import MentionsEN from "./Mentions.en"

export default function Page({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = (searchParams?.lang || "fr").toLowerCase() === "en" ? "en" : "fr"
  return lang === "en" ? <MentionsEN /> : <MentionsFR />
}
