async function recvest(url){
    const rez = await fetch(url)
    return rez.json()
    
}
export default recvest;