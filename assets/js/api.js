
async function fetchProfileData(){
    url = 'https://raw.githubusercontent.com/keillon/porfolio-js/refs/heads/main/assets/js/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}
































