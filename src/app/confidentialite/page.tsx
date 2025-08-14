import { redirect } from "next/navigation"
import ConfidentialiteFR from "./Confidentialite.fr"
import ConfidentialiteEN from "./Confidentialite.en"

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>
}) {
  const params = await searchParams

  // 🔹 Redirection si pas de `lang`
  if (!params?.lang) {
    redirect("/confidentialite?lang=fr")
  }

  const lang = params.lang.toLowerCase() === "en" ? "en" : "fr"
  return lang === "en" ? <ConfidentialiteEN /> : <ConfidentialiteFR />
}
