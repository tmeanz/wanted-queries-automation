var wanted = {}




module.exports = {
    beforeEach: browser => {
        wanted = browser.page.wantedQueriesPO()
        wanted.navigate()
    },
    after: browser => {
        browser.end()
    },
    
    'Correct Input Lowercase': browser => {
        wanted
        .click('@hamburger')
        wanted.clickWanted()
    }

    

    }
    