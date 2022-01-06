import { Pagination } from "react-bootstrap"
import { useContext, useState } from 'react'
import { Context } from "./StateContext";


export const PaginateComp = () => {

    const {pages,page,setPage}=useContext(Context)
   
    return (
        <Pagination size="lg">
           {
               [...Array(pages)].map((_,ind)=>(
                <Pagination.Item key={ind} onClick={()=>setPage(ind+1)} active={page===ind+1}>
                {ind+1}
               </Pagination.Item>
               ))
           }
        </Pagination>
    )
}
