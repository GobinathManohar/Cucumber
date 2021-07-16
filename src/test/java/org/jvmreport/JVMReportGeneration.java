package org.jvmreport;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReportGeneration {
 public static void jvmReport(String JsonFile)
 {
	 File file=new File("C:\\Users\\DELL\\eclipse-workspace\\selenium\\PracticeCucumber\\target");
	 Configuration config=new Configuration(file, "adactin");
	 List<String> li=new LinkedList<String>();
	 li.add(JsonFile);
	 ReportBuilder rp=new ReportBuilder(li, config);
	 rp.generateReports();
	 
 }
}
