const Fetch = {

    async get (url) {
        return fetch(url)
    },


    async post (url, body){
        return fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(body)
           
        })

    }
}
export default Fetch