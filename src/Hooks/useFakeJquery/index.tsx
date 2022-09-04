import * as React from 'react'

const useFakeJquery = () => {

    const $ = (selector : string) => {
        return document.querySelector(selector) as HTMLElement
    }

    return {
        $
    }
}

export default useFakeJquery