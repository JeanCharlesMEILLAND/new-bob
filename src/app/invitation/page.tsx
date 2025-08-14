'use client'

import {useEffect, useState} from 'react'
import Image from 'next/image'
import {fetchAndroidLink} from "@/utils/link.utils";
import {ClipboardIcon} from '@heroicons/react/24/outline'


export default function Home() {
  const [referrer, setReferrer] = useState<string | null>(null)
  const [androidUrl, setAndroidUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('invitor')
    setReferrer(ref)

    const startTime = Date.now();

    Promise.all([
      fetchAndroidLink(),
      new Promise(resolve => setTimeout(resolve, 2000)) // 2 second delay
    ]).then(([url]) => {
      console.log("====>", url)
      if (url) {
        setAndroidUrl(url)
      }
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(2000 - elapsedTime, 0);
      setTimeout(() => {
        setIsLoading(false)
      }, remainingTime);
    })
  }, [])

  if (isLoading) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-primary text-white">
          <div className="animate-fade-in text-center">
            <h1 className="text-5xl font-bold mb-8 text-accent">Bob</h1>
            <div className="flex justify-center items-center mb-8">
              <div className="w-16 h-16 border-t-4 border-accent border-solid rounded-full animate-spin"></div>
            </div>
            <p className="text-lg text-accent">Chargement en cours...</p>
          </div>
        </div>
    )
  }

  return (
      <main
          className="flex flex-col items-center justify-center min-h-screen bg-primary p-4 text-center text-white animate-fade-in">
        <h1 className="text-4xl font-bold mb-4 text-accent">Bienvenue sur Bob 👋</h1>
        <p className="text-lg mb-6 text-accent">
          {referrer
              ? (
                  <>
                    Votre code d&#39;invitation est :
                    <span className="font-bold"> {referrer}</span>
                    <button
                        onClick={() => {
                          navigator.clipboard.writeText(referrer);
                        }}
                        className="ml-2 text-accent transition-colors cursor-pointer"
                        title="Copier le code"
                    >
                      <ClipboardIcon className="h-5 w-5 inline"/>
                    </button>
                  </>
              )
              : 'Découvrez notre application dès maintenant !'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
              href={androidUrl || ""}
              className="inline-flex"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                src="/app-badges/playstore.svg"
                alt="Disponible sur Google Play"
                width={190}
                height={54}
                loading="lazy"
                fetchPriority="low"
                decoding="async"
            />
          </a>
          <a
              href={process.env.NEXT_PUBLICio_TEST_FLIGTH}
              className="inline-flex"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                src="/app-badges/appstore.svg"
                alt="Disponible sur l'App Store"
                width={190}
                height={54}
                priority
                fetchPriority="high"
            />
          </a>
        </div>
      </main>
  )
}