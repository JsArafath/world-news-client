const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = ` ${title} - world News`
    }, [title])
}
export default useTitle