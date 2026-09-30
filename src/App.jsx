import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import SelectList from './Phase 2 Core React Concepts/Week-2/Day-5 Lists & Keys/15_SelectDropdownList'
import RadioButtonList from './Phase 2 Core React Concepts/Week-2/Day-5 Lists & Keys/17_RadioButtonGroupList'
import CheckBoxList from './Phase 2 Core React Concepts/Week-2/Day-5 Lists & Keys/16_CheckboxList'
import SliderRange from './Phase 2 Core React Concepts/Week-2/Day-5 Lists & Keys/18_SliderRangeList'
import CompanyDetailsSelect from './Phase 2 Core React Concepts/Week-2/Day-5 Lists & Keys/20_DynamicBinding'
import InlineStyling from './Phase 2 Core React Concepts/Week-2/Day-2 Styling React/04_InlineStyling'
import CSSModules from './Phase 2 Core React Concepts/Week-2/Day-2 Styling React/06_CSSModules'
import CSSStylesheet from './Phase 2 Core React Concepts/Week-2/Day-2 Styling React/05_CSSStylesheet'
import PassProp from './Phase 2 Core React Concepts/Week-2/Day-3 React Props/PassProp'


function App() {
  return (
    <>
     <SelectList/>
     <CheckBoxList/>
     <RadioButtonList/>
     <SliderRange/>
     <CompanyDetailsSelect/>
     <InlineStyling/>
     <CSSStylesheet/>
     <CSSModules/>
     <PassProp message="Farhan Ahmed" />
    </>
  )
}

export default App
