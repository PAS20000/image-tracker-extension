import * as React from 'react'
import { RiFolderDownloadFill } from 'react-icons/ri'
import { FaSearch, FaTools } from 'react-icons/fa'
import { useTheme } from 'styled-components'
import usePortalCTX from '../../../../Contexts/PortalContext/usePortalCTX'
import useJSZIP from '../../../../Hooks/useJSZIP'
import Modal from '../../../Modal'
import Search from '../../../Search'
import Button from '../../../Button'
import TitleModal from '../../../Modal/TitleModal'
import { Header, ExtensionContainer, Card, Subtitle } from './index.styles'
import Flex from '../../../Layout/Flex'
import Grid from '../../../Layout/Grid'
import { RiFolderZipFill } from 'react-icons/ri'
import CountImages from './CountImages'
import InputRange from './Input'
import { MdHideImage } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'
import { ImSpinner10 } from 'react-icons/im'
import useFakeJquery from '../../../../Hooks/useFakeJquery'
import { db } from '../../../../Tools/Server'
import useLiveStorageCTX from '../../../../Contexts/LiveStorageContext/useLiveStorageCTX'
import { IStorage } from '../../../../Extension/content'

const ToolModal = () => {
    const { IsFallBack, setCurrentFilters, Images } = useLiveStorageCTX()
    const { setIsOpen, isOpen } = usePortalCTX()
    const { color } = useTheme()
    const { $ } = useFakeJquery()
    const { isFallback, Download, setExtesion } = useJSZIP()
    const [zipStorage, setZipStorage] = React.useState<IStorage[]>(Images)
    const [deleteStorage, setDeleteStorage] = React.useState<IStorage[]>(Images)

    const CalcRange = React.useCallback((value : string) => {
        const items = Math.ceil(parseInt(value) / 100 * Images.length)
        const Storage = Images.slice(0, items > 0 ? items : 1)

        return Storage
    }, [Images])

    const RangeZip = (value : string) => {
        const Storage = CalcRange(value)
        setZipStorage(Storage)
    }

    const RangeDelete = (value : string) => {
        const Storage = CalcRange(value)
        setDeleteStorage(Storage)
    }

    const ClickDelete = async () => {
        if (!deleteStorage.length) return
        const input = $('#InputRangeDelete') as HTMLInputElement
        const This = $('#Btn-Delete') as HTMLButtonElement
        const deleteIds = deleteStorage.map(({ id }) => id)
        await db.Images.bulkDelete(deleteIds)
        if (input.value === '100') {
            setCurrentFilters([])
            localStorage.removeItem('CurrentFilters')
        }
        input.value = '100'
        !IsFallBack.Delete ? 
            This.setAttribute('disabled', 'true')
            :
            This.removeAttribute('disabled')
    }

    React.useEffect(() => {
        RangeZip('100')
        RangeDelete('100')
    }, [Images])

    return(
        <Modal>
            <Grid>
                <TitleModal onClose={() => setIsOpen({...isOpen, tools : false})}>
                    <FaTools /> Tools
                </TitleModal>
                <Header>
                    <Subtitle>
                        <FaSearch /> Search by
                    </Subtitle>
                    <Grid columns='1fr'>
                        <Search 
                            origin
                        />
                    </Grid>
                </Header>
                <Card>
                    <Subtitle>
                        <RiFolderZipFill /> Download Zip
                    </Subtitle>
                    <Grid>
                        <InputRange onChange={(e : React.ChangeEvent<HTMLInputElement>) => RangeZip(e.target.value)} defaultValue='100'/>
                        <Flex justContent='center'>
                            <Button 
                                id='Btn-Download'
                                title='Download Images' 
                                color={color.cyan} 
                                onClick={() => {
                                    const This = $('#Btn-Download') as HTMLButtonElement
                                    Download(zipStorage)
                                    isFallback ? 
                                        This.setAttribute('disabled', 'true')
                                        :
                                        This.removeAttribute('disabled')
                                }}
                            >
                                {isFallback ?  
                                    <ImSpinner10 className='rotate'/> 
                                    : 
                                    <RiFolderDownloadFill />
                                }
                            </Button>
                            <CountImages Storage={zipStorage} />
                            <ExtensionContainer>
                                <select onChange={(e) => setExtesion(e.target.value)}>
                                    <option value=''>Convert</option>
                                    <option value='jpg'>jpg</option>
                                    <option value='png'>png</option>
                                    <option value='webp'>webp</option>
                                </select>
                            </ExtensionContainer>
                        </Flex>
                    </Grid>
                </Card>
                <Card>
                    <Grid>
                        <Subtitle>
                            <MdHideImage /> Delete Images
                        </Subtitle>
                        <InputRange id='InputRangeDelete' onChange={(e : React.ChangeEvent<HTMLInputElement>) => RangeDelete(e.target.value)} defaultValue='100'/>
                        <Flex justContent='center'>
                            <Button id='Btn-Delete'
                                onClick={ClickDelete}
                            >
                                {IsFallBack?.Delete ? 
                                    <ImSpinner10 className='rotate'/> 
                                    : 
                                    <IoMdTrash />
                                }
                            </Button>
                            <CountImages Storage={deleteStorage}/>
                        </Flex>
                    </Grid>
                </Card>
            </Grid>
        </Modal>
    )
}

export default ToolModal