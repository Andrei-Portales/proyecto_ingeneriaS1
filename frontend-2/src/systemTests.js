const { Builder, By, Key, util } = require("selenium-webdriver");

(async function Test_VisualizarTema(){
    
    let driver = await new Builder().forBrowser("chrome").build();

    try{
        await driver.get("https://educa-facil.herokuapp.com/");
        await driver.findElement(By.linkText("Grados")).click();

        // await driver.wait(driver, 30);
        await driver.findElement(By.css("img[name='cuarto']")).click();
        
        // await driver.wait(driver, 30);
        await driver.findElement(By.css("img[name='cuarto']")).click();
    }
    
    catch(e) {
        console.log('Catch an error: ', e)
    }
    
    finally{
        await driver.quit();
    } 
})();



// (async function Test_VisualizarPerfil(){
    
//     let driver = await new Builder().forBrowser("chrome").build();

//     try{
//         await driver.get("https://educa-facil.herokuapp.com/");
//         await driver.findElement(By.xpath("//div[@class='pointsPanel']")).click();

//         await driver.findElement(By.css("input")).sendKeys("Estudiante 19202");
        
//         await driver.findElement(By.css("button")).click();

//         await driver.findElement(By.xpath("//div[@class='exitPanel']")).click();
//     }
    
//     catch(e) {
//         console.log('Catch an error: ', e)
//     }
    
//     finally{
//         await driver.quit();
//     } 
// })();



// (async function Test_ModoOscuro(){
    
//     let driver = await new Builder().forBrowser("chrome").build();

//     try{
//         await driver.get("https://educa-facil.herokuapp.com/");
//         await driver.findElement(By.css("svg")).click();

//         await driver.findElement(By.css("svg")).click();
//     }
    
//     catch(e) {
//         console.log('Catch an error: ', e)
//     }
    
//     finally{
//         await driver.quit();
//     } 
// })();
