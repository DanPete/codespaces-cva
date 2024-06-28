import Button from './components/Button'

function App() {
  return (
    <div className="w-screen h-screen">
      <div className='grid place-items-center h-full p-4'>
        <div className="flex gap-4 flex-wrap">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="destructive">Tertiary Button</Button>
          <Button size="sm">Small Primary Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
      </div>
    </div>
  )
}

export default App
