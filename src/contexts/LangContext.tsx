import { createContext, useContext } from 'react'
import type { Lang } from '../data/homepageContent'

const LangContext = createContext<Lang>('en')

export const useLang = () => useContext(LangContext)

export default LangContext
