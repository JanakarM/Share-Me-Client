import Masonry from 'react-masonry-css'
import { Pin } from '../'

const MasonryLayout= ({ feeds })=> {
    const breakPointObj= {
        default: 4,
        3000: 6,
        2000: 5,
        1200: 3,
        1000: 2,
        500: 1
    }
    return (
        <div>
            <Masonry className='flex animate-slide-fwd' breakpointCols={breakPointObj}>
                { feeds.map(feed=> (
                    <Pin key={feed.id} pin={feed} />
                )) }
            </Masonry>
        </div>
    )
}

export default MasonryLayout