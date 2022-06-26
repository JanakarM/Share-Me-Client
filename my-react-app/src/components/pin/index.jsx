import { Link, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'
import { MdDownloadForOffline } from 'react-icons/md'
import { AiTwotoneDelete } from 'react-icons/ai'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { useState } from "react"

const Pin= ({ pin: {id, url, postedBy: {name, email, picture}}})=> {
    const navigate= useNavigate()
    const [ postHovered, setPostHovered ]= useState(false)

    return (
        <div className="m-2">
            <div className="relative cursor-zoom-in" 
                onMouseEnter={(e)=> setPostHovered(true)} 
                onMouseLeave={(e)=> setPostHovered(false)}
                onClick={(e)=> navigate(`/pin-detail/${id}`)}
            >
                <img src={url} alt="pin" className={`rounded-lg`}/>
                {( postHovered &&
                    <div className="absolute top-0 left-0 flex flex-col justify-between h-full w-full p-2">
                        <div className="flex justify-between items-center">
                            <a onClick={(e)=> {e.stopPropagation(); navigate(`${url}?dl=`)}}
                                download 
                                className="bg-white rounded-full p-1 cursor-pointer opacity-75 hover:opacity-100"
                            >
                                <MdDownloadForOffline />
                            </a>
                            <button type="button" className="bg-red-500 px-2 pb-1 rounded-3xl shadow-lg font-bold text-sm text-black cursor-pointer opacity-75 hover:opacity-100">
                                Save
                            </button>
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="url" onClick={(e)=> e.stopPropagation()} className="w-30 bg-white rounded-lg text-sm pl-1 cursor-pointer opacity-75 hover:opacity-100">
                                {url?.substring(0, 15)}
                            </a>
                            <AiTwotoneDelete fontSize={22} className="bg-white rounded-full p-1 cursor-pointer opacity-75 hover:opacity-100" />
                        </div>
                    </div>
                )}
            </div>
            <Link to={`/user-profile/${email}`} className='flex items-center gap-2 text-sm'>
                <img src={picture} alt="user-profile" className="rounded-full w-7" />
                {name}
            </Link>
        </div>
    )
}

export default Pin