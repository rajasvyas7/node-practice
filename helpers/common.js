const axios = require("axios");

const getPinDetails = async (pincode) => {
    let details = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
        .then(function(response) {
            // console.log('pincode resp', response);
            if (response && response.data && response.data[0] && response.data[0].Status === 'Success' && response.data[0].PostOffice.length > 1) {
                let target = {};
                let postOffice = response.data[0].PostOffice[0];
                Object.assign(target, {tehsil: postOffice.Block, district: postOffice.District, state: postOffice.State});
                console.log('target', target);
                return target
            } else {
                return false;
            }
        });
    return details
}

exports.getPinDetails = getPinDetails;