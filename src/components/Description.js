import video from "../data/video";

function Description() {
    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.creatredAt}</p>
        </div>
    )
}
export default Description;