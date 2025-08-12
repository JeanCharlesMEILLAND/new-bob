import Image from "next/image";
import Container from "@/components/ui/Container";
import {WhiteGradient} from "@/components/WhiteGradient";

export const FeaturesHighlight = () => {
  return (
      <Container
          className="mt-16 relative !z-50">
        {/*<WhiteGradient/>*/}
        <div
            className={"relative px-6 py-12 sm:px-10 sm:py-14 rounded-3xl bg-gradient-to-tr from-[#166DF6] to-[#05B1F5] "}>
          {/* Positioning wrapper */}
          <div className="relative z-10 h-fit">
            {/* Left: content (takes left half on md+) */}
            <div className="text-white space-y-6 md:w-2/3 md:pr-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Organisez vos événements privés
              </h2>

              <p className="text-white/95 leading-relaxed max-w-2xl">
                Avec BOB, créez <strong className={"font-bold"}>des événements</strong> privés pour vos proches et
                gérez
                tout
                ce qui est nécessaire en un seul endroit. Idéal pour un barbecue, un
                déménagement ou un projet entre amis.
              </p>

              <ul className="space-y-3 text-white/95">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"/>
                  <span>
                <strong>Créez une liste avec vos besoins et services</strong> &nbsp;: par exemple,
                “2 chaises pliantes”, “boissons fraîches”, “aide pour monter un meuble”
              </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"/>
                  <span>
                <strong>Chaque participant se positionne</strong> &nbsp;: chacun choisit un élément de la liste et
                s’engage à l’apporter ou à le réaliser
              </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"/>
                  <span><strong>Invitations ciblées</strong> &nbsp;: 5, 10 ou 20 contacts</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"/>
                  <span><strong>Chat collectif pour coordonner tout le monde</strong> </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white shrink-0"/>
                  <span>
                <strong>Positionnement en 1 clic</strong> &nbsp;: dès qu’un participant se positionne, l’échange
                individuel est créé automatiquement
              </span>
                </li>
              </ul>
            </div>

            {/* Right: image (absolute on md+, exactly right half) */}
            <div
                className="mt-8 md:mt-0 md:absolute md:inset-y-0 md:right-0 md:w-1/3 flex items-center justify-center">
              <Image
                  src="/7%202.png"
                  alt="Aperçu mobile d'un événement privé"
                  width={1200}
                  height={800}
                  className="w-full max-w-[520px] scale-125 h-auto object-contain drop-shadow-2xl"
                  priority
              />
            </div>
          </div>

          <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-2/3 bg-[url('/Frame%201597880136.svg')] bg-no-repeat bg-right bg-cover opacity-30"
          />
        </div>
        {/* Right 2/3 background decoration */}

        {/* Added image from public/Mask group.png and fixed invalid <Image> usage */}
        <Image
            src="/Mask%20group.png"
            alt="Décor graphique"
            width={600}
            height={600}
            className="mx-auto w-full max-w-6xl h-auto object-contain"
        />
      </Container>
  );
};