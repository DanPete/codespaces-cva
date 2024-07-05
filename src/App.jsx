import Button from './components/Button'
import {
  ContentLayout,
  IntroSection,
  ItemLayout,
} from './components/IntroSection'
import { items, moreItems } from './data'

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="grid place-items-center h-full p-4">
        <div className="flex gap-4 flex-wrap my-5">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="destructive">Tertiary Button</Button>
          <Button size="sm">Small Primary Button</Button>
          <Button variant="link">Link Button</Button>
        </div>

        <div className="my-5">
          <IntroSection
            showHeader={true}
            heading="Grid Layout"
            body="This is a grid layout."
            contentLayout={ContentLayout.GRID}
            itemLayout={ItemLayout.TOP_IMAGE}
            items={items}
          />
        </div>

        <div className="my-5">
          <IntroSection
            showHeader={false}
            heading="No Header"
            body="This is a layout without the header info."
            contentLayout={ContentLayout.GRID}
            itemLayout={ItemLayout.TOP_IMAGE}
            items={items}
          />
        </div>

        <div className="my-5">
          <IntroSection
            showHeader={true}
            heading="Carousel Layout"
            body="This is a Carousel layout."
            contentLayout={ContentLayout.CAROUSEL}
            itemLayout={ItemLayout.TOP_IMAGE}
            items={moreItems}
          />
        </div>

        <div className="my-5">
          <IntroSection
            showHeader={true}
            heading="Left Image Layout"
            body="This is a layout without the header info."
            contentLayout={ContentLayout.GRID}
            itemLayout={ItemLayout.LEFT_IMAGE}
            items={items}
          />
        </div>
      </div>
    </div>
  )
}

export default App
