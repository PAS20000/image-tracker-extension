import * as React from 'react'
import useLiveStorageCTX from '../../Contexts/LiveStorageContext/useLiveStorageCTX'
import Grid from '../Layout/Grid'
import { Select } from './index.styles'

type Props = {
    origin?:boolean
}

const Search = ({
    origin,
} : Props) => {
    const { setCurrentFilters, setFilterOptions, FilterOptions, CurrentFilters } = useLiveStorageCTX()
    
    const Search = ({ target : { value }} : React.ChangeEvent<{ value : string }>) => {
      if (value !== 'default') {
            setFilterOptions(current =>
                !current.includes(value) ? 
                    [...current, value]
                    :
                    current
            )
            setCurrentFilters(current => {
                const newCF = [...current, value]
                localStorage.setItem('CurrentFilters', JSON.stringify(newCF ?? []))
                return newCF
            })
        }
    }

    const FilterRemover = ({ target : { value }} : React.ChangeEvent<{ value : string }>) => {
       if (value === 'clear') {
            setCurrentFilters([])
            localStorage.removeItem('CurrentFilters')
            return
       }
       if (value !== 'default') {
            setFilterOptions(current => 
                !current.includes(value) ? [...current, value] : current
            )
            setCurrentFilters(current => {
                const newCF = current.filter(cf => cf !== value)
                localStorage.setItem('CurrentFilters', JSON.stringify(newCF ?? []))
                return newCF
            })
        }
    }

    return(
       <Grid columns='1fr 1fr'>
            <Select onChange={(e) => Search(e)}>
                <option value='default'>
                    Websites : {
                        FilterOptions.length - CurrentFilters.length
                    }
                </option>
                {origin && FilterOptions
                    .map((origin, index) => {
                        return (
                            <option value={origin} key={index}>
                                {origin}
                            </option>
                        )
                    })
                    .filter(opt => !CurrentFilters.includes(opt.props.value) && opt.props.value !== 'clear')
                }
            </Select>
            <Select onChange={(e) => FilterRemover(e)}>
                <option value='default'>
                    Current Filters : {CurrentFilters.length}
                </option>
                {CurrentFilters.length &&
                    <option value='clear'>
                      ❌ Remove all filters ❌
                    </option>
                }
                {CurrentFilters.map(opt =>
                    <option value={opt} key={opt}>
                        {opt} ❌
                    </option>             
                )}
            </Select>
       </Grid>
    )
}

export default Search