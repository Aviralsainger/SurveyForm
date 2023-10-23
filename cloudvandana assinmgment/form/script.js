function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderElements = document.getElementsByName('gender');
    const gender = Array.from(genderElements)
      .filter(element => element.checked)
      .map(element => element.value);
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;

    const popupContent = `
      <div class="popup-label">First Name: ${firstName}</div>
      <div class="popup-label">Last Name: ${lastName}</div>
      <div class="popup-label">Date of Birth: ${dob}</div>
      <div class="popup-label">Country: ${country}</div>
      <div class="popup-label">Gender: ${gender.join(', ')}</div>
      <div class="popup-label">Profession: ${profession}</div>
      <div class="popup-label">Email: ${email}</div>
      <div class="popup-label">Mobile Number: ${mobileNumber}</div>
    `;

    document.getElementById('popupContent').innerHTML = popupContent;
    document.getElementById('popup').style.display = 'block';
    document.getElementById('surveyForm').reset();
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }