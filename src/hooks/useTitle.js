import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - UrbanFlip`;
    }, [title])
};

export default useTitle;