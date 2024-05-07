const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

//Positive Scenario (Meet the system requirements)
describe('Signup positive scenario', function() {
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
  it('Signup', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".hover-effect:nth-child(2)")).click()
    await driver.findElement(By.linkText("Signup")).click()
    await driver.findElement(By.name("name")).click()
    await driver.findElement(By.name("name")).sendKeys("Virat")
    await driver.findElement(By.name("name")).click()
    await driver.findElement(By.name("name")).sendKeys("Virat Kohli")
    await driver.findElement(By.name("email")).sendKeys("virat18@gmail.com")
    await driver.findElement(By.name("mobileNumber")).sendKeys("76433232")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("virat18")
    await driver.findElement(By.name("repeatPassword")).sendKeys("virat18")
    await driver.findElement(By.css(".sc-qZrbh")).click()
  })
})

//Negative Scenario (Using invalid password)
describe('Signup negative scenario', function() {
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
  it('signup_negative', async function() {
    await driver.get("http://localhost:3000/signup")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.name("name")).click()
    await driver.findElement(By.name("name")).sendKeys("Dhoni M")
    await driver.findElement(By.name("email")).sendKeys("dhoni.gmail.com")
    await driver.findElement(By.name("mobileNumber")).sendKeys("+941234567")
    await driver.findElement(By.name("password")).sendKeys("hiruna#")
    await driver.findElement(By.name("repeatPassword")).sendKeys("hiruna#")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("hiruna#123")
    await driver.findElement(By.name("repeatPassword")).click()
    await driver.findElement(By.name("repeatPassword")).sendKeys("hiruna#123")
    await driver.findElement(By.css(".sc-qZrbh")).click()
  })
})

