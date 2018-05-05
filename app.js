const http = new GalaxyX_HTTP

// GET users
const users = http.get('https://jsonplaceholder.typicode.com/users')
                .then(data => console.log(data))
                .catch(err => console.log(err))


// GET single user                
const user = http.get('https://jsonplaceholder.typicode.com/users/1')
                .then(data => console.log(data))
                .catch(err => console.log(err))

// POST single user
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

const newUser = http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err))

// PUT (update) user
const updateUser = http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err))

// DELETE user
const deleteUser = http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err))