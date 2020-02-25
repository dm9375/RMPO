const { Builder, By, Key, until } = require('selenium-webdriver');

let driver = new Builder().forBrowser('chrome').build();
driver.get("https://www.ratemyprofessors.com/");
driver.findElement(By.name("findSchoolOption")).click();
driver.wait(check_title, 1000);

function check_title() {
    var promise = driver.getTitle().then(function(title) {
        if (title == "wiki - Google Search") {
            console.log("success")
            return true;
        } else {
            console.log("fail - " + title);
        }
    });
    return promise;
}