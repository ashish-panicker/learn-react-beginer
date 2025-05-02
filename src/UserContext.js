// UserContext is going to store some information needed by multiple components
// in the application.

import { createContext } from 'react'

const userData = { name: 'Ganesh' }
export const UserContext = createContext(userData)
