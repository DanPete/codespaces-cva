import { cva } from 'class-variance-authority'
import React from 'react'
import { cn } from '../helpers/cn'

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
  items: IntroSectionItemType[]
}

const containerVariants = cva(
  ['grid', 'grid-cols-1', 'w-full', 'gap-3xl', 'xl:gap-x-6xl'],
  {
    variants: {
      layout: {
        [ContentLayout.GRID]: [],
        [ContentLayout.CAROUSEL]: ['w-full-break-out'],
      },
      showHeader: {
        true: [],
      },
    },
    compoundVariants: [
      {
        layout: ContentLayout.GRID,
        showHeader: true,
        className: ['lg:grid-cols-2'],
      },
    ],
  }
)

const contentVariants = cva(['grid', 'grid-cols-1', 'gap-5'], {
  variants: {
    layout: {
      [ContentLayout.GRID]: ['grid'],
      [ContentLayout.CAROUSEL]: [
        'flex',
        'overflow-x-auto',
        'no-scrollbar',
        'px-4',
      ],
    },
    items: {
      [ItemLayout.NO_IMAGE]: ['gap-y-4', 'lg:gap-y-7', 'gap-x-12'],
      [ItemLayout.LEFT_IMAGE]: ['gap-6', 'lg:gap-y-12'],
      [ItemLayout.TOP_IMAGE]: ['grid-cols-2'],
    },
    showHeader: {
      true: [],
    },
  },
  compoundVariants: [
    {
      layout: ContentLayout.GRID,
      items: ItemLayout.TOP_IMAGE,
      className: ['gap-x-md', 'sm:gap-x-xl', 'gap-y-xl'],
    },
    {
      layout: ContentLayout.CAROUSEL,
      items: ItemLayout.TOP_IMAGE,
      className: ['gap-md'],
    },
    {
      layout: ContentLayout.GRID,
      items: ItemLayout.TOP_IMAGE,
      showHeader: false,
      className: ['lg:grid-cols-4'],
    },
    {
      layout: ContentLayout.GRID,
      items: [ItemLayout.NO_IMAGE, ItemLayout.LEFT_IMAGE],
      className: ['flex', 'flex-col', 'lg:flex-row', 'flex-wrap'],
    },
    {
      layout: ContentLayout.CAROUSEL,
      items: [ItemLayout.NO_IMAGE, ItemLayout.LEFT_IMAGE],
      className: ['gap-md lg:gap-3xl'],
    },
    {
      layout: ContentLayout.GRID,
      items: ItemLayout.LEFT_IMAGE,
      showHeader: true,
      className: [
        'lg:flex-col',
        'xl:grid grid-cols-2',
        'lg:gap-y-xl',
        'xl:gap-x-xl',
        'xl:gap-y-md',
      ],
    },
  ],
})

const itemVariants = cva([], {
  variants: {
    layout: {
      [ContentLayout.GRID]: [],
      [ContentLayout.CAROUSEL]: ['shrink-0'],
    },
    items: {
      [ItemLayout.NO_IMAGE]: [],
      [ItemLayout.LEFT_IMAGE]: [
        'grid',
        'grid-cols-2',
        'gap-sm',
        'items-center',
      ],
      [ItemLayout.TOP_IMAGE]: [],
    },
  },
  compoundVariants: [
    {
      layout: ContentLayout.CAROUSEL,
      items: ItemLayout.TOP_IMAGE,
      className: ['w-[calc((100%-20px)/2)]', 'lg:w-[calc((100%-25px)/4)]'],
    },
  ],
})

export function IntroSection({
  showHeader,
  heading,
  body,
  itemLayout,
  contentLayout,
  items,
}: IntroSectionProps) {
  return (
    <div
      className={cn(
        containerVariants({
          layout: contentLayout,
          showHeader,
        })
      )}
    >
      {showHeader && (
        <IntroSectionHeader
          heading={heading}
          body={body}
          className={cn(contentLayout === ContentLayout.CAROUSEL && 'px-4')}
        />
      )}
      <div
        className={cn(
          contentVariants({
            layout: contentLayout,
            items: itemLayout,
            showHeader,
          })
        )}
      >
        {items.map((item, index) => (
          <IntroSectionItem
            key={index}
            item={item}
            itemLayout={itemLayout}
            className={cn(
              itemVariants({ layout: contentLayout, items: itemLayout })
            )}
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
    <div className={cn('flex flex-col gap-2', className)}>
      <h2 className="font-serif text-3xl font-bold">{heading}</h2>
      <p>{body}</p>
    </div>
  )
}

function IntroSectionItem({
  item,
  itemLayout,
  className = '',
}: {
  item: IntroSectionItemType
  itemLayout: ItemLayout
  className?: string
}) {
  return (
    <div className={cn('', className)}>
      {itemLayout !== ItemLayout.NO_IMAGE && (
        <img src={item.image} alt={item.title} />
      )}
      <a href={item.link}>
        <h3>{item.title}</h3>
      </a>
    </div>
  )
}
