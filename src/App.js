import { RainbowFirebaseApp } from '@rainbow-modules/app'
import { ImageGallery } from '@rainbow-modules/storage'
import { Card } from 'react-rainbow-components'
import './App.css'
import { app as firebaseApp } from './firebase'

function App() {
  return (
    <RainbowFirebaseApp app={firebaseApp}>
      <div className="App">
        <Card>
            <ImageGallery
              path="/gallery"
              allowUpload
              allowDelete
              onSelect={(imageRef) => {
                alert (imageRef.name)
              }}
              />
        </Card>
      </div>
    </RainbowFirebaseApp>
  )
}

export default App;
