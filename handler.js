const rawdata = require("./rawdata");

const addRawData = (request, h) => {
    const {merk, km} = request.payload;

    const newRawData = {
        merk,km, //memasukkan input dari frontend berupa merk kendaraan, km/liter, dan result google maps api
    };

    rawdata.push(newRawData); // push newRawData ke dalam array rawdata
};

//handler pemrosesan rawdata oleh ML algorithm ???
const processingData = () => {

}

const getProcessedData = () => ({
    status: 'success',
    data: {
        //variable yang menampung hasil proses oleh ML algorithm
    },
});

module.exports = {addRawData, getProcessedData};