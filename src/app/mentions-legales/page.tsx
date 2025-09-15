import { redirect } from "next/navigation"
import MentionsFR from "./Mentions.fr"
import MentionsEN from "./Mentions.en"

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>
}) {
  const params = await searchParams

  // 🔹 Redirection si pas de `lang`
  if (!params?.lang) {
    redirect("/mentions-legales?lang=fr")
  }

  const lang = params.lang.toLowerCase() === "en" ? "en" : "fr"
  return lang === "en" ? <MentionsEN /> : <MentionsFR />
}
