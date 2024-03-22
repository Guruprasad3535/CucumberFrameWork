$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Searching the products in amazon",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Step.lauchBrowser()"
});
formatter.result({
  "error_message": "org.openqa.selenium.remote.NoSuchDriverException: Unable to obtain: Capabilities {browserName: chrome, goog:chromeOptions: {args: [--remote-allow-origins\u003d*], extensions: []}}\r\n\tat org.openqa.selenium.remote.service.DriverFinder.getPath(DriverFinder.java:29)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.generateExecutor(ChromeDriver.java:98)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:87)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:82)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:50)\r\n\tat StepDefinitions.Step.lauchBrowser(Step.java:16)\r\n\tat ✽.User launch the browser(file:Feature/Login.feature:5)\r\nCaused by: org.openqa.selenium.WebDriverException: Unsuccessful command executed: [C:\\Users\\GURUPR~1\\AppData\\Local\\Temp\\selenium-manager61729152773770014199655844923280877\\selenium-manager.exe, --browser, chrome, --output, json]\nThe chromedriver version cannot be discovered\nBuild info: version: \u00274.10.0\u0027, revision: \u0027c14d967899\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719.0.1\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.manager.SeleniumManager.runCommand(SeleniumManager.java:130)\r\n\tat org.openqa.selenium.manager.SeleniumManager.getDriverPath(SeleniumManager.java:251)\r\n\tat org.openqa.selenium.remote.service.DriverFinder.getPath(DriverFinder.java:27)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.generateExecutor(ChromeDriver.java:98)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:87)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:82)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:50)\r\n\tat StepDefinitions.Step.lauchBrowser(Step.java:16)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:126)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:66)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:156)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User opens URL \"https://www.amazon.in/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step.navigateToamazon(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be no amazon website",
  "keyword": "Then "
});
formatter.match({
  "location": "Step.homePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the site",
  "keyword": "And "
});
formatter.match({
  "location": "Step.close()"
});
formatter.result({
  "status": "skipped"
});
});