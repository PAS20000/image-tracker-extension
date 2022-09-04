import * as React from 'react'
import { LiveStorageContext } from "../indext"

const useLiveStorageCTX = () => {

    const {
        CurrentFilters,
        FilterOptions,
        Images,
        IsFallBack,
        left,
        right,
        setCurrentFilters,
        setFilterOptions,
        CarouselRef,
        PaginationImages
    } = React.useContext(LiveStorageContext)

    return {
        CurrentFilters,
        FilterOptions,
        Images,
        IsFallBack,
        left,
        right,
        setCurrentFilters,
        setFilterOptions,
        CarouselRef,
        PaginationImages
    }
}

export default useLiveStorageCTX