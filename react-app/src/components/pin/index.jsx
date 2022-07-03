import { Link, useNavigate } from "react-router-dom"
import { MdDownloadForOffline } from 'react-icons/md'
import { AiTwotoneDelete } from 'react-icons/ai'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import React, { useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { savePost, unSavePost } from "../../state-management/reducers/home-reducer"
import animalImg from '../../assets/images/animals/1.jpg'

const Pin= ({ pin: {id, url, postedBy: {name, email, picture}, postSaved, savedCount}})=> {
    const navigate= useNavigate()
    const dispatch= useDispatch()
    const user= useSelector(state=> state.logon.user)

    // used local state as there is no need to pass around this piece of data between compoenents.
    const [ postHovered, setPostHovered ]= useState(false)

    const savePin= ()=> {
        dispatch(savePost([id, user?.email]))
    }

    const unSavePin= ()=> {
        
    }

    return (
        <div className="m-1 mb-2">
            <div className="relative cursor-zoom-in" 
                onMouseEnter={(e)=> setPostHovered(true)} 
                onMouseLeave={(e)=> setPostHovered(false)}
                onClick={(e)=> navigate(`/pin-detail/${id}`)}
            >
                <img src={url} alt="pin" className={`rounded-lg`}/>
                {( postHovered &&
                    <div className="absolute top-0 left-0 flex flex-col justify-between h-full w-full p-2">
                        <div className="flex justify-between items-center">
                            {/* <a href={`${url}?dl=`} onClick={(e)=> e.stopPropagation()} */}
                            <a href={animalImg} onClick={(e)=> e.stopPropagation()}
                                download 
                                className="bg-white rounded-full p-1 cursor-pointer opacity-75 hover:opacity-100"
                            >
                                <MdDownloadForOffline />
                            </a>
                            { postSaved? (
                                    <button type="button" className="bg-red-500 px-2 pb-1 rounded-3xl shadow-lg font-bold text-sm text-black cursor-pointer opacity-75 hover:opacity-100"
                                        onClick={(e)=> {e.stopPropagation(); unSavePin()}}
                                    >
                                        {savedCount} Saved
                                    </button>
                                ):(
                                    <button type="button" className="bg-red-500 px-2 pb-1 rounded-3xl shadow-lg font-bold text-sm text-black cursor-pointer opacity-75 hover:opacity-100"
                                        onClick={(e)=> {e.stopPropagation(); savePin()}}
                                    >
                                        Save
                                    </button>
                                )
                            }
                        </div>
                        <div className="flex justify-between items-center">
                            <a href={url} onClick={(e)=> e.stopPropagation()} className="w-30 bg-white rounded-lg text-sm pl-1 cursor-pointer opacity-75 hover:opacity-100 flex justify-between items-center gap-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsFillArrowUpRightCircleFill />
                                {url?.substring(0, 20)}
                            </a>
                            
                            {/* Delete option should be visible only to author of post */}
                            <AiTwotoneDelete fontSize={22} className="bg-white rounded-full p-1 cursor-pointer opacity-75 hover:opacity-100" />
                        </div>
                    </div>
                )}
            </div>
            
            {/* Change email to id */}
            <Link to={`/user-profile/${email}`} className='flex items-center gap-2 text-sm'>
                <img src={picture} alt="user-profile" className="rounded-full w-7" />
                {name}
            </Link>
        </div>
    )
}

export default Pin