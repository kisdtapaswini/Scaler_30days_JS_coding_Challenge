async function getData(){
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data1 => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${data1[0].id}`)
        })
        .then(response => response.json())
        .then((data2) => {
            console.log(data2);
        })
}

getData();
