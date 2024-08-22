import { useEffect, useRef, useState } from "react"
import { getAllPosts, handlePostUpload } from "../../../helpers/api"
import { IPost } from "../../../helpers/types"
import { Gallery } from "../../../components/Gallery"

export const Photos = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    const photo = useRef<HTMLInputElement | null>(null)
    const [text, setText] = useState<string>("")
    const handlePost = () => {
        const file = photo.current?.files?.[0]
        if (file) {
            const form = new FormData()
            form.append('photo', file)
            form.append('content', text)

            handlePostUpload(form)
                .then(response => { 
                    setPosts([...posts, response.payload as IPost])
                })
        }
    }

    useEffect(() => {
        getAllPosts()
            .then(response => {
                setPosts(response.payload as IPost[])
            })

    }, [])

    return <div className="container">
        <h1>Posts</h1>
        <input
            className="form-control"
            placeholder="what's on your mind?"
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <input
            type="file"
            ref={photo}
        />
        <br />
        <button onClick={handlePost} className="btn btn-outline-dark my-3">upload</button>

        <Gallery 
            posts={posts}
        />
    
       
    </div>
}