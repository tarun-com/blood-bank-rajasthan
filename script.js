function findDonor() {
    let dist = document.getElementById('searchDistrict').value;
    let blood = document.getElementById('searchBlood').value;
    let res = document.getElementById('results');

    if(dist === "Select District" || blood === "Blood Group") {
        alert("Please select both options");
        return;
    }

    res.innerHTML = `<div style="padding:15px; border:1px solid #d32f2f; border-radius:5px; background:#fff;">
        <h4>Available Donors in ${dist}:</h4>
        <p>• Ram Singh (${blood}) - 98290XXXXX</p>
        <p>• Vijay Kumar (${blood}) - 94140XXXXX</p>
    </div>`;
}

function registerDonor(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    alert("Dhanyawad " + name + "! Aapka registration Blood Bank Rajasthan mein safaltapoorvak ho gaya hai.");
    document.getElementById('regForm').reset();
}
