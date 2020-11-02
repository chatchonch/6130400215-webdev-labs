const fetch = require('node-fetch');

async function getUserAsync() {
    let response = await fetch(`https://api.github.com/users`);
    let data = await response.json();


    data.forEach(async (user) => {
        let rpName = await fetch(`https://api.github.com/users/${user.login}`);
        let alldata = await rpName.json();
        console.log({login: user.login, name: alldata.name });
    });
}

getUserAsync();