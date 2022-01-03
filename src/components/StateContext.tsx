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
    getData:(arg:string)=>void
}


export const Context=createContext({} as ContextType)

type Props={
    children:React.ReactNode
}

export const StateProvider:React.FC<Props>=({children})=>{
    const [searchItem, setSearchItem] = useState<string>('')
    const [info, setInfo] = useState(data as Data[])

    const getData=(param:string|undefined):void=>{
       if(param){
        setInfo(data.filter(itm=>itm.name.toLowerCase().includes(param.toLowerCase())))
       }else{
        setInfo(data)
       }
    }

    useEffect(()=>{
     getData(searchItem)
    },[searchItem])

    return (
    <Context.Provider value={{
        searchItem,
        setSearchItem,
        info,
        getData
    }}>
      {children}
    </Context.Provider>
        
        
        )

}