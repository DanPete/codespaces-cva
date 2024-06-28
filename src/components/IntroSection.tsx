import React from 'react'

export enum ItemLayout {
  TOP_IMAGE = 'top_image',
  LEFT_IMAGE = 'left_image',
  NO_IMAGE = 'no_image',
}

export enum ContentLayout {
  GRID = 'grid',
  CAROUSEL = 'carousel',
}

type IntroSectionItem = {
  link: string
  title: string
  image: string
}

type IntroSectionProps = {
  showHeader: boolean
  heading: string
  body: string
  itemLayout: ItemLayout
  contentLayout: ContentLayout
  twoRowCarousel: boolean
  items: IntroSectionItem[]
}

export function IntroSection({
  showHeader,
  heading,
  body,
  itemLayout,
  contentLayout,
  twoRowCarousel,
  items,
}: IntroSectionProps) {
  return (
    <div>
      <h1>Hi!!</h1>
    </div>
  )
}
