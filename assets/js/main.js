

function updateProfileInfo(profileData){
    const name = document.getElementById('profile.name')
    const photo = document.getElementById('profile.photo')
    const location = document.getElementById('profile.location')
    const number = document.getElementById('profile.number')
    name.textContent = profileData.name
    photo.src = profileData.photo
    location.textContent = profileData.location
    number.textContent = profileData.phone
}

(async () =>{

    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)

})()
















