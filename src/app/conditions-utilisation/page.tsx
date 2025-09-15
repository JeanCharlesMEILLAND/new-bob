import { redirect } from "next/navigation"
import ConditionsFR from "./Conditions.fr"
import ConditionsEN from "./Conditions.en"

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>
}) {
  const params = await searchParams

  // 🔹 Redirection si pas de `lang`
  if (!params?.lang) {
    redirect("/conditions-utilisation?lang=fr")
  }

  const lang = params.lang.toLowerCase() === "en" ? "en" : "fr"
  return lang === "en" ? <ConditionsEN /> : <ConditionsFR />
}
