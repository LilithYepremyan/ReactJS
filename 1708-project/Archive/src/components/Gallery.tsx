
import { IPost } from '../helpers/types';
import { BASE } from '../helpers/default'

interface Props {
    posts: IPost[]
}

export function Gallery({ posts }: Props) {
    return (
        <div className='list'>
            {
                posts.map(post => {
                    return <div key={post.id}>
                        <img
                            src={BASE + post.picture}
                        />
                        <p>{post.title} <small>({post.likes.length} likes</small>)</p>
                    </div>

                })
            }
        </div>
    )
}