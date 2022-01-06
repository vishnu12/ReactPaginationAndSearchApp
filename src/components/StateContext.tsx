import {createContext,useState,useEffect} from 'react'
import {data} from '../data'

interface Data{
    name:string,
    age:number
}


interface ContextType{
    searchItem:string,
    setSearchItem:React.Dispatch<React.SetStateAction<string>>,
    info:Data[],
    getData:(arg:string)=>void,
    pages:number,
    page:number,
    setPage:React.Dispatch<React.SetStateAction<number>>,
    limit:number,
   
    
}


export const Context=createContext({} as ContextType)

type Props={
    children:React.ReactNode
}

export const StateProvider:React.FC<Props>=({children})=>{
    const [searchItem, setSearchItem] = useState<string>('')
    const [info, setInfo] = useState([] as Data[])
    const [page, setPage] = useState<number>(1)
    let limit:number=6
    const pages:number=Math.floor(data.length/limit)

    const getData=():void=>{
        let lt:number=(page-1)*limit
        let ut:number=page*limit
        if(searchItem){  
         const tempData=data.slice(lt,ut)
         const finalData=tempData.filter(itm=>itm.name.toLowerCase().includes(searchItem.toLowerCase()))
         setInfo(finalData)
        }else{
            const finalData=data.slice(lt,ut)
            setInfo(finalData)
        }
    }

    useEffect(()=>{
     getData()
    },[searchItem,page])



    return (
    <Context.Provider value={{
        searchItem,
        setSearchItem,
        info,
        getData,
        pages,
        page,
        setPage,
        limit,
    }}>
      {children}
    </Context.Provider>
        
        
        )

}