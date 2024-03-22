package StepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Step {
	
	public WebDriver driver;
	
	@Given("User launch the browser")
	public void lauchBrowser() {
		//WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
	}
	
	@When("User opens URL {string}" )
	public void navigateToamazon(String url) {
		driver.get(url);
	}
	
	@Then("User should be no amazon website")
	public void homePage() {
		System.out.println(driver.getTitle());
	}
	
	@And("close the site")
	public void close() {
		driver.quit();
	}

}
