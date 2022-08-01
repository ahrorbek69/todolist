import { useState } from "react"


export const useFetching = (callback) => {
    const [loading,setLoading] = useState(false)
    const [err,setErr] = useState('')

    const fetching = async () => {
        try{
            setLoading(true)
            await callback()
        }catch(e){
            setErr(e.message)
        }finally{
            setLoading(false)
        }
    }
    return [fetching,loading,err]
}