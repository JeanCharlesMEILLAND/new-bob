"use client"

import { ReactNode, useMemo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import clsx from "clsx"

interface ItemSwiperProps {
  children: ReactNode[]
  className?: string
}

export default function ItemSwiper({ children, className }: ItemSwiperProps) {
  // On détermine une seule fois si la pagination est utile
  const shouldShowPagination = useMemo(() => children.length > 3, [children.length])

  return (
    <div className="relative">
      {/* Dégradé gauche */}
      <div className="hidden md:block absolute top-0 left-0 h-full w-28 bg-gradient-to-r from-primary to-transparent z-20 pointer-events-none" />

      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        pagination={{
          clickable: true,
          enabled: shouldShowPagination,
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 32 },
          768: { slidesPerView: 2, spaceBetween: 36 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        modules={[Pagination]}
        className={clsx(
          "w-full !h-auto swiper-container",
          {
            "mt-10": !className?.includes("mt-"),
            "[&_.swiper-pagination]:!block": shouldShowPagination,
            "[&_.swiper-pagination]:!hidden": !shouldShowPagination,
          },
          className
        )}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <div className="h-full w-full">{child}</div>
          </SwiperSlide>
        ))}

        {/* Dégradé droit */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-28 bg-gradient-to-l from-primary to-transparent z-20 pointer-events-none" />
      </Swiper>
    </div>
  )
}
