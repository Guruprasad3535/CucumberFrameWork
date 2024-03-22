package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = ".//Feature/Login.feature",
		glue = "StepDefinitions",
		dryRun = false,
		monochrome=true,
		plugin = {"pretty","html:test-output"}
		)
public class Test {

}
