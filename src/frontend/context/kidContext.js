import React, { useContext, useState, useEffect } from 'react'

export const KidContext = React.createContext()

const KidProvider = ({ children }) => {
    const [kid_id, setKid_id] = useState();
    const [kid_name, setKid_name] = useState();

    console.log("kid ", kid_id);

    useEffect(() => {
        const savedKid = window.sessionStorage.getItem('kid');
        if(savedKid) {
            const {id, name} = JSON.parse(savedKid);
            console.log('id: ', id, name);
            setKid_id(id);
            setKid_name(name);
        }
    }, [])

    function saveId(id) {
        const savedKid = window.sessionStorage.getItem('kid');
        const savedKidJSON = JSON.parse(savedKid) || {}
        
        window.sessionStorage.setItem('kid', JSON.stringify({...savedKidJSON, id}));
        setKid_id(id);
    } 

    function saveName(name) {
        const savedKid = window.sessionStorage.getItem('kid');
        const savedKidJSON = JSON.parse(savedKid) || {}
        window.sessionStorage.setItem('kid', JSON.stringify({...savedKidJSON, name}));
        setKid_name(name);
    } 

    return (
        <KidContext.Provider
            value={{
                kid_id,
                saveId,

                kid_name,
                saveName
            }}
        >
            {children}
        </KidContext.Provider>
    )
}

export default KidProvider

export function useKidContext() {
    const context = useContext(KidContext)

    if (!context) {
        throw new Error('useKidContext must be used within a KidContext.Provider.')
    }

    return context
}