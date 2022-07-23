import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getUserProfile, setUserProfile, setUserProfileLoading } from "../../state-management/reducers/home-reducer"
import Spinner from "../spinner"

const UserProfile= ()=> {
    const { userId }= useParams()
    const loading= useSelector(state=> state.home.userProfileLoading)
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getUserProfile(userId))
    }, [userId])
    const user= useSelector(state=> state.home.userProfile)
    return (
        loading ? (
            <Spinner />
        ): (  (
            <div className="w-full h-full bg-white flex flex-col items-center gap-20">
                <div className="py-5 bg-gray-50 w-full flex justify-center items-center shadow-md">
                    <img src={`/file/download?fileName=${user?.profilePicUrl}`} alt="user-profile" 
                        className="w-1/4 rounded-full shadow-lg" />
                </div>
                <div className="flex flex-col items-center gap-10 w-full px-10">
                    <div className="flex gap-10 w-full">
                        <label className="flex text-lg font-semibold w-2/5 justify-end"><span>Name</span></label>
                        <label className="text-lg text-gray-500">{user?.name}</label>
                    </div>
                    <div className="flex gap-10 w-full">
                        <label className="flex text-lg font-semibold w-2/5 justify-end"><span>Email</span></label>
                        <label className="text-lg text-gray-500">{user?.email}</label>
                    </div>
                </div>
            </div>
        )
        )
    )
}

export default UserProfile