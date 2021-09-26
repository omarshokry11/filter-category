export default function API(endpoint, method = "GET", data = {}) {

    // let body;
    //
    // if (method !== "GET" && method !== "DELETE") {
    //     body = new FormData();
    //
    //     for(let k in data) {
    //         body.append(k, data[k]);
    //     }
    // }

    return fetch("https://test-api.edfa3ly.io/product#" + endpoint, {
        method: "GET",
        // body: JSON.stringify(data),
        headers: {},
    }).then(r => r.json().then(data => ({data, status: r.status})))
}