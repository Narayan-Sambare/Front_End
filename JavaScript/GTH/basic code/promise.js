function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;

            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Error fetching data");
            }
        }, 2000);
    });
}
fetchData()
    .then(result => console.log(result))
    .catch(err => console.log(err));