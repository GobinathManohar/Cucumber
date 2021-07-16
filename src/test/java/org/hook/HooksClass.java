package org.hook;

import org.genmethods.GenericMethods;

import cucumber.api.java.After;

public class HooksClass extends GenericMethods{
@After
public void afterScenario() {
	GenericMethods.closebrowser();

}

}
