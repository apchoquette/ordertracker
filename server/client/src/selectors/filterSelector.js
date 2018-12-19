export default (results=[],filter) => {
    return results.filter(((result)=> {
        const match = result.LOCATION ? result.LOCATION.includes(filter) : result.WarehouseCode.includes(filter)
        return match
    }))

}