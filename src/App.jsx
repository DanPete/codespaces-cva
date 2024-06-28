import Button from './components/Button'
import { ContentLayout, IntroSection, ItemLayout } from './components/IntroSection'
import { items } from './data'

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
            heading="Next.js with Tailwind CSS"
            body="This is a simple Next.js app with Tailwind CSS."
            contentLayout={ContentLayout.GRID}
            itemLayout={ItemLayout.TOP_IMAGE}
            twoRowCarousel={false}
            items={items}
          />
        </div>
      </div>
    </div>
  )
}

export default App
