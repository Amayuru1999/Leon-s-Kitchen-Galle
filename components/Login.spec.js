const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

// Positive Scenario (Using correct credintials)
describe('Login positive scenario', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('login_positive', async function() {
    await driver.get("http://localhost:3000/loginorreg")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.linkText("Login")).click()
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("desilvahiruna72@gmail.com")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("Rsm@1234")
    await driver.findElement(By.css(".sc-qZrbh")).click()
  })
})

// Negative Scenario (Enter wrong password)
describe('Negative Scenario for login', function() {
  this.timeout(90000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('login_negative2', async function() {
    await driver.get("http://localhost:3000/loginorreg")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.linkText("Login")).click()
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("desilvahiruna72@gmail.com")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("rsm@1234")
    await driver.findElement(By.css(".sc-qZrbh")).click()
    {
      const element = await driver.findElement(By.css(".sc-qZrbh"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
  })
})
