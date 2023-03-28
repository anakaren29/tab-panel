import { createContext, useState } from 'react'
import {TabPanel } from './components/Tabs';

export const TabContext = createContext();
const {Provider} = TabContext;


function App() {

  const[activeIndex, setActiveIndex] = useState(0);

  return (
    <Provider value={{activeIndex, setActiveIndex}} >
        <main > 
          <TabPanel/>
        </main>
    </Provider>
  )
}

export default App
