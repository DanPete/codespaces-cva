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

type IntroSectionItemType = {
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
  items: IntroSectionItemType[]
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
      {showHeader && (
        <IntroSectionHeader heading={heading} body={body} className="mb-8" />
      )}
      <div>
        {items.map((item, index) => (
          <IntroSectionItem
            key={index}
            item={item}
            itemLayout={itemLayout}
            contentLayout={contentLayout}
            twoRowCarousel={twoRowCarousel}
          />
        ))}
      </div>
    </div>
  )
}

type IntroSectionHeaderProps = {
  heading: string
  body: string
  className?: string
}

const IntroSectionHeader = ({
  heading,
  body,
  className = '',
}: IntroSectionHeaderProps) => {
  return (
    <div className={className}>
      <h2>{heading}</h2>
      <p>{body}</p>
    </div>
  )
}

function IntroSectionItem({
  item,
  itemLayout,
  contentLayout,
  twoRowCarousel,
}: {
  item: IntroSectionItemType
  itemLayout: ItemLayout
  contentLayout: ContentLayout
  twoRowCarousel: boolean
}) {
  return (
    <div>
      <a href={item.link}>
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
      </a>
    </div>
  )
}
