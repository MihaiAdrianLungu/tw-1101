const getGitHubProfile = async (username) => {
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
}

const fetchData = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// getGitHubProfile('MihaiAdrianLungu')
fetchData('MihaiAdrianLungu')