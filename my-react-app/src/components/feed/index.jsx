import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { MasonryLayout, Spinner } from ".."
import { setLoading } from "../../state-management/reducers/home-reducer"
import { TbMoodEmpty } from 'react-icons/tb'

const Feed= ()=> {
    const { categoryId }= useParams()
    setLoading(true)
    let feeds= useSelector(state=> state.home.feeds)
    if(categoryId !== undefined){
        feeds= feeds.filter(feed=> feed.categoryName === categoryId)
    }
    setLoading(false)

    const loading= useSelector(state=> state.home.loading)
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