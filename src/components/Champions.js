import Champion from './Champion'

const Champions = ( { champions } ) => {
    return (
        <>
            {
                Object.entries(champions).map((champion) => (
                    <Champion className="champion" key={champion[1].key} name={champion[0]} stats={champion[1]}/>
                ))
            }
        </>
    )
}

export default Champions