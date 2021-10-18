import { createContext } from 'react';
import * as kid from '../../backend/models/Kid';
import { signIn } from '../services/kid'

const KidContext = createContext({signed: true});

export const KidProvider = ({children}) => {
  async function signIn() {
    const response = await kid.signIn();

    console.log(response); 
  }

  return(
    <KidContext.Provider value={{signed: false}}>
      {children}
    </KidContext.Provider>
  )
}

export default KidContext;