import ConditionsFR from "./Conditions.fr"
import ConditionsEN from "./Conditions.en"

export default function Page({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = (searchParams?.lang || "fr").toLowerCase() === "en" ? "en" : "fr"
  return lang === "en" ? <ConditionsEN /> : <ConditionsFR />
}
