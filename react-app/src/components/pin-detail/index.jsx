import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"
import { getPinDetail } from "../../state-management/reducers/home-reducer"
import { Spinner } from "../../components"

const PinDetail= ()=> {
    const { pinId }= useParams()
    const loading= useSelector(state=> state.home.pinDetailLoading)
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getPinDetail(pinId))
    }, [pinId])
    const pin= useSelector(state=> state.home.pinDetail)
    return (
        loading ? (
            <Spinner></Spinner>
        ): (
            <div className="w-full h-full flex flex-col items-center p-10 gap-10">
                <div>
                    <img src={`/file/download?fileName=${pin?.imageUrl}`} alt="" 
                    className="rounded-lg"/>
                </div>
                <div className="flex flex-col items-center gap-10 w-full px-10">
                    <div className="flex gap-10 w-full">
                        <label className="flex text-lg font-semibold w-2/5 justify-end"><span>About</span></label>
                        <label className="text-lg text-gray-500">{pin?.about}</label>
                    </div>
                    <div className="flex gap-10 w-full">
                        <label className="flex text-lg font-semibold w-2/5 justify-end"><span>Site</span></label>
                        <a target="_blank" className="text-lg text-gray-500" href={pin?.siteUrl}>{pin?.siteUrl}</a>
                    </div>
                    <div className="flex gap-10 w-full">
                        <label className="flex text-lg font-semibold w-2/5 justify-end"><span>Author</span></label>
                        <Link to={`/user-profile/${pin?.author.id}`} className="text-lg text-gray-500">{pin?.author.name}</Link>
                    </div>
                </div>
            </div>
        )
    )
}

export default PinDetail