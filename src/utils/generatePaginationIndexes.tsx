export default (requestPage: number, itemsCount: number, itemsCountOnAPage: number) => {
    const totalPages = Math.floor(itemsCount / itemsCountOnAPage)
    if (requestPage > totalPages || requestPage <= 0)
        /*
            generate pagination indexes according to page index, 
            total items count and max items count on a single page

            ex:
                requestPage = 2
                itemsCount = 20
                itemsCountOnAPage = 5
                
                total pages = 4

                indexes = generate(2, 20, 5) returns [5, 10, 5]

                pageİtemsAsArray = dataArray.slice[indexes[0], indexes[1]]
        */
        return [0, itemsCountOnAPage, totalPages]

    const lastIndex = requestPage * itemsCountOnAPage
    const firstIndex = lastIndex - itemsCountOnAPage
    return [firstIndex, lastIndex, totalPages]
}