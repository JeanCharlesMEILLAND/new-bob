import ConfidentialiteFR from "./Confidentialite.fr"
import ConfidentialiteEN from "./Confidentialite.en"

export default function Page({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = (searchParams?.lang || "fr").toLowerCase() === "en" ? "en" : "fr"
  return lang === "en" ? <ConfidentialiteEN /> : <ConfidentialiteFR />
}
