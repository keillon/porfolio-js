function updateProfileInfo (profileData) {
  setTimeout(() => {
    const name = document.getElementById('profile.name')
    const photo = document.getElementById('profile.photo')
    const location = document.getElementById('profile.location')
    const number = document.getElementById('profile.number')
    const email = document.getElementById('profile.email')
    name.textContent = profileData.name
    photo.src = profileData.photo
    location.textContent = profileData.location
    number.textContent = profileData.phone
    email.textContent = profileData.email
  }, 1500)
}

function updatePortfolio (profileData) {
  const portfolio = document.getElementById('profile.portfolio')

  portfolio.innerHTML = profileData.portfolio
    .map(project => {
      return `
        <li class="li--bottom">         
            <img src="assets/img/github.svg" alt="">
            <a href="${project.url}" target="_blank"><span id="profile.tittle">${project.name}</span></a>
            <li>
              <a href="${project.url}" target="_blank"><span id="profile.github">${project.url}</span></a>
            </li>
          </li>
        `
    })
    .join('')
}

function updateLanguages (profileData) {
  const languages = document.getElementById('profile.languages')

  languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.soft.skills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('') 
}

(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
  updatePortfolio(profileData)
  updateLanguages(profileData)
  updateSoftSkills(profileData)
})()
