import ItemSwiper from "@/components/item-swiper/ItemSwiper";
import Container from "@/components/ui/Container";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: 'Sarah, présidente d’asso',
    text: 'On a évité l’achat de matériel en doublon. L’interface est simple et tout le monde s’y retrouve.',
  },
  {
    name: 'Karim, voisinage',
    text: 'On se prête outillage et jeux pour les enfants. Les rappels évitent les oublis.',
  },
  {
    name: 'Élodie, RH',
    text: 'Parfait pour animer un collectif interne sur plusieurs sites. Traçabilité légère mais suffisante.',
  },
  {
    name: 'Karim, voisinage',
    text: 'On se prête outillage et jeux pour les enfants. Les rappels évitent les oublis.',
  },
  {
    name: 'Élodie, RH',
    text: 'Parfait pour animer un collectif interne sur plusieurs sites. Traçabilité légère mais suffisante.',
  },
]

export default function Testimonials() {
  return (
      <section id="testimonials" className="">
        <Container>
          <h2 className="text-5xl text-accent text-center">Ils en parlent</h2>

          <ItemSwiper className="mt-8 ">
            {TESTIMONIALS.map((t, index) => (
                <div className={" cursor-grab bg-white p-8 rounded-2xl space-y-5 w-full"} key={index}>
                  <Image
                      src="/el_quote-alt.svg"
                      alt="Décor graphique"
                      width={40}
                      height={40}
                      className="ml-auto"
                  />
                  <p className="font-medium text-accent">{t.text}</p>
                  <p className="font-extrabold text-accent text-center"> - {t.name}</p>
                </div>
            ))}
          </ItemSwiper>
        </Container>
      </section>
  )
}