document.addEventListener('DOMContentLoaded', function() {
    const a = window.location.hash.substring(1);
    console.log('urlParams:', a);
    const city = decodeURIComponent(a);

    if (city) {
        // 发送 POST 请求到后端
        fetch('https://run.mocky.io/v3/117ded0f-6ea6-477b-aeb9-05f0801c99ac', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city: city })
        })
        .then(response => response.json())
        .then(data => {
            if (data.data) {
                // 使用获取到的数据更新页面
                displayCityDetails(data.data);
            } else {
                console.error('Failed to fetch city details:', data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});

function displayCityDetails(cityDetails) {
    document.getElementById('cityName').textContent = cityDetails.city;
    document.getElementById('latitude').textContent = cityDetails.latitude;
    document.getElementById('longitude').textContent = cityDetails.longitude;
    document.getElementById('generalCargo').textContent = cityDetails.generalCargo;
    document.getElementById('specialCargo').textContent = cityDetails.specialCargo;
}