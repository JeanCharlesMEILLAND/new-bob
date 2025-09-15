'use client'

import {useEffect, useState} from 'react'
import Image from 'next/image'
import {fetchDownloadLinks} from "@/utils/link.utils";
import {CheckIcon, ClipboardIcon} from '@heroicons/react/24/outline'

export default function Home() {
  const [referrer, setReferrer] = useState<string | null>(null)
  const [downloadLinks, setDownloadLinks] = useState({
    ios: "https://apps.apple.com/app/id6743935044",
    android: "https://play.google.com/store/apps/details?id=com.bobapp"
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isCopied, setIsCopied] = useState<boolean>(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('invitor')
    setReferrer(ref)

    const startTime = Date.now();

    Promise.all([
      fetchDownloadLinks(),
      new Promise(resolve => setTimeout(resolve, 2000)) // 2 second delay
    ]).then(([links]) => {
      console.log("====>", links)
      setDownloadLinks(links)
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(2000 - elapsedTime, 0);
      setTimeout(() => {
        setIsLoading(false)
      }, remainingTime);
    })
  }, [])

  const handleCopy = () => {
    if (referrer) {
      navigator.clipboard.writeText(referrer);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    }
  }

  if (isLoading) {
    return (
        <div
            className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary via-brand-100 to-brand-200">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
              Bob
            </h1>
            <div className="flex justify-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-brand-500 rounded-full opacity-75"></div>
              <div className="w-3 h-3 bg-brand-500 rounded-full opacity-50"></div>
              <div className="w-3 h-3 bg-brand-500 rounded-full opacity-25"></div>
            </div>
            <p className="text-lg text-accent font-medium">Préparation de votre invitation...</p>
          </div>
        </div>
    )
  }

  return (
      <main
          className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary via-brand-50 to-brand-100 p-4 text-center relative">
        {/* Success message - positioned relative to page content */}
        {isCopied && (
            <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg shadow-md">
              <div className="flex items-center gap-3">
                <CheckIcon className="h-5 w-5"/>
                <div>
                  <p className="font-semibold">Code copié !</p>
                  <p className="text-sm">Vous pouvez maintenant le partager</p>
                </div>
              </div>
            </div>
        )}

        {/* Header */}
        <div className="mb-12">
          <div className="text-6xl mb-6">👋</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent via-brand-700 to-brand-800 bg-clip-text text-transparent">
            Bienvenue sur Bob
          </h1>
          <p className="text-lg text-accent/80 max-w-2xl mx-auto">
            {referrer ?
                "Vous avez été invité(e) à rejoindre notre communauté !" :
                "Découvrez l'application qui révolutionne le partage entre voisins"
            }
          </p>
        </div>

        {/* Invitation Card or Welcome Card */}
        {referrer ? (
            <div className="mb-12 w-full max-w-md">
              <p className="text-lg mb-6 text-accent font-medium">
                Votre code d&#39;invitation :
              </p>

              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="bg-brand-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-600">Code d&#39;invitation</span>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-6 border">
                  <span className="text-2xl font-bold text-gray-800 tracking-wider font-mono">{referrer}</span>
                </div>

                <button
                    onClick={handleCopy}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                        isCopied
                            ? 'bg-green-100 border border-green-300 text-green-700'
                            : 'bg-brand-500 text-white hover:bg-brand-600'
                    }`}
                    disabled={isCopied}
                >
                  {isCopied ? (
                      <>
                        <CheckIcon className="h-5 w-5"/>
                        <span>Copié !</span>
                      </>
                  ) : (
                      <>
                        <ClipboardIcon className="h-5 w-5"/>
                        <span>Copier le code</span>
                      </>
                  )}
                </button>
              </div>
            </div>
        ) : (
            <div className="mb-12">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg max-w-lg mx-auto">
                <div className="text-5xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold text-accent mb-4">
                  Rejoignez la communauté Bob
                </h2>
                <p className="text-gray-600">
                  Découvrez l&#39;application qui transforme votre quartier en communauté solidaire
                </p>
              </div>
            </div>
        )}

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <a
              href={downloadLinks.android}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
          >
            <Image
                src="/app-badges/playstore.svg"
                alt="Disponible sur Google Play"
                width={190}
                height={54}
                loading="lazy"
                className="shadow-md rounded-lg"
            />
          </a>

          <a
              href={downloadLinks.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
          >
            <Image
                src="/app-badges/appstore.svg"
                alt="Disponible sur l'App Store"
                width={190}
                height={54}
                priority
                className="shadow-md rounded-lg"
            />
          </a>
        </div>

        {/* Footer */}
        <p className="text-sm text-accent/60 max-w-md mx-auto">
          Rejoignez des milliers d&#39;utilisateurs qui partagent déjà avec Bob
        </p>
      </main>
  )
}