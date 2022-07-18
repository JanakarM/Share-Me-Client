import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { MasonryLayout, Spinner } from ".."
import { TbMoodEmpty } from 'react-icons/tb'
import { useState } from "react"
import { useDispatch } from "react-redux";
import { updateFeeds } from "../../state-management/reducers/home-reducer";

const Feed= ()=> {
    const { categoryId }= useParams()
    const [loading, setLoading] = useState(false)
    const dispatch= useDispatch()
    useEffect(()=> {
        setLoading(true)
        dispatch(updateFeeds())
        setLoading(false)
    }, [])
    
    let feeds= useSelector(state=> state.home.feeds)
    if(categoryId !== undefined){
        feeds= feeds.filter(feed=> feed.category.id === parseInt(categoryId))
    }
    
    if(loading) return <Spinner message='We are loading new ideas to your feed!'/>
    if(feeds.length === 0) return (
        <div className="flex flex-col items-center justify-end w-full h-full py-10 my-10 gap-4">
            <TbMoodEmpty fontSize={40}/>
            <p>Your feed is empty right now. Try again after some time!</p>
        </div>
    )
    return (
        <div>
            {feeds && <MasonryLayout feeds={feeds}/>}
        </div>
    )
}

export default Feed