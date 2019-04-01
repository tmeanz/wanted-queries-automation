var wantedCommands = {

    clickWanted: function (wantedValue, wantedInput) {
        wantedCommands
        .setValue('@header', '1234567890')
        .setValue('@mke', 'abc@')
        .setValue('@oai', 'asdf56789')
        .setValue('@name', 'taylor')
        .setValue('@sex', 'M')
        .setValue('@race', 'W')
        .setValue('@height', '601')
        .setValue('@weight', '190')
        .setValue('@hair', 'brown')
        .setValue('@offense', 'murder')
        .setValue('@driversLicense', 'asdf1234')
        .setValue('@dlState', 'ut')
        .setValue('@dlDate', '10/24/2020')
        .setValue('@licensePlate', 'asfd1235')
        .setValue('@licenseState', 'ut')
        .setValue('@licenseExp', '10/24/2020')
        .click('@submitButton')


    }
}


module.exports = {
    url: 'http://localhost:3000/#/enter',
    commands: [wantedValue],
    elements: {
        header: 'input[name="hdrInput"]',
        mke: 'input[name="mkeInput"]',
        oai: 'input[name="oriInput"]',
        name: 'input[name="namInput"]',
        sex: 'input[name="sexInput"]',
        race: 'input[name="racInput"]',
        height: 'input[name="hgtInput"]',
        weight: 'input[name="wgtInput"]',
        hair: 'input[name="haiInput"]',
        offense: 'input[name="offInput"]',
        driversLicense: 'input[name="olnInput"]',
        dlState: 'input[name="olsInput"]',
        dlDate: 'input[name="oldInput"]',
        licensePlate: 'input[name="licInput"]',
        licenseState: 'input[name="lisInput"]',
        licenseExp: 'input[name="lidInput"]',
        submitButton: '#saveBtn',
        clearButton: '#clearBtn'
        

    }
}