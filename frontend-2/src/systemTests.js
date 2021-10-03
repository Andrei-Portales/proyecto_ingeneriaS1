const { Builder, By, Key, util } = require("selenium-webdriver");

(async function example(){
    
    let driver = await new Builder().forBrowser("chrome").build();

    try{
        await driver.get("http://localhost:3000/grados");

        await driver.findElement(By.name("cuarto")).click();
        
        // await driver.wait(driver, 5);
        // await driver.findElement(By.name("matematicas")).click();

    } finally{
        await driver.quit();
    }
})();
