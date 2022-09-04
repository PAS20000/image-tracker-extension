import * as React from 'react'

const useQuery = () => {

    return {
        all(selector : string){
           return Array.from(document.querySelectorAll(selector))
        },
        one(selector : string){
            return document.querySelector(selector)
        }
    }
}

export default useQuery
