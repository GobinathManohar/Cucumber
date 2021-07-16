package org.runner;

import org.genmethods.GenericMethods;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvmreport.JVMReportGeneration;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src\\main\\resources\\"},tags= {"@adactin1,@adactin,@gobi"},glue= {"org.stepdef"},dryRun=false,monochrome=true,plugin= {"pretty","html:C:\\Users\\DELL\\eclipse-workspace\\selenium\\PracticeCucumber\\target\\adactin.html","json:C:\\Users\\DELL\\eclipse-workspace\\selenium\\PracticeCucumber\\target\\adactin.json","junit:C:\\Users\\DELL\\eclipse-workspace\\selenium\\PracticeCucumber\\target\\adactin.xml"})
public class TestRunner  {

	@AfterClass
	public static void finalStep() {
		GenericMethods.closebrowser();
		JVMReportGeneration.jvmReport("C:\\Users\\DELL\\eclipse-workspace\\selenium\\PracticeCucumber\\target\\adactin.json");
				
	}
}
