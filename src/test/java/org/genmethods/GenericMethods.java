package org.genmethods;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;
import io.github.bonigarcia.wdm.config.DriverManagerType;

public class GenericMethods {
	public static	WebDriver driver;
	public static String browser= "chrome"; 

	static WebDriverWait wait= new WebDriverWait(getdriver(), 60);

  public static WebDriver getdriver(){
	 if (browser.equalsIgnoreCase("chrome")) {
		 WebDriverManager.getInstance(DriverManagerType.CHROME).arch64().setup();
		  driver=new ChromeDriver();
	}else if (browser.equalsIgnoreCase("firefox")) {
		WebDriverManager.getInstance(DriverManagerType.FIREFOX).arch64().setup();
		  driver= new FirefoxDriver();
	}
	 driver.manage().window().maximize();
	  //System.setProperty("webdriver.chrome.driver", "C:\\Users\\DELL\\eclipse-workspace\\selenium\\SeleniumChromeLaunch\\Driver\\chromedriver.exe");
	return driver;
}
	
	//URL Launch
	public static void getUrl(String url) {
		driver.get(url);
	}
	
	//Click element
	public static void click(WebElement element) {
		waitUntilElementIsVisible(element);
		element.click();
	}
	
	//WebElement - findElement by id
	public static WebElement findElementById(String idloc) {
		WebElement findElementId = driver.findElement(By.id(idloc));
		return findElementId;
	}
	
	//WebElwmwnt - findElement by TagName
	public static WebElement findElementByTagName(String tagNameLoc) {
		WebElement findElementTagName = driver.findElement(By.tagName(tagNameLoc));
		return findElementTagName;
	}
	
	//WebElement - findElement by Class
	public static WebElement findElementByClass(String classLoc) {
		WebElement findElementClass = driver.findElement(By.className(classLoc));
		return findElementClass;
	}
	
	//WebElement - findElement by Name
	public static WebElement name(String nameLoc) {
		WebElement findElementName = driver.findElement(By.name(nameLoc));
		return findElementName;
	}
	
	//WebElement - findElement by xPath
	public static WebElement xpath(String xpath) {
		WebElement findElementXpath = driver.findElement(By.xpath(xpath));
		return findElementXpath;
	}
	
	//WebElements - findElements by Xpath
	public static List<WebElement> xpathIndex(String xpath) {
		List<WebElement> findElementsXpath = driver.findElements(By.xpath(xpath));
		return findElementsXpath;
	}
	
	//Clear text
	public static void clear(WebElement element) {
		waitUntilElementIsVisible(element);
		element.clear();
	}
	
	//sendkeys
	public static void sendKey(WebElement element,String string) {
		waitUntilElementIsVisible(element);
		element.sendKeys(string);
	}
	
	public static void enterText(WebElement ele, String st) {
		waitUntilElementIsVisible(ele);
		System.out.println(st);
		//System.out.println(ele);
		ele.sendKeys(st);
		//System.out.println("sent");

	}
	
	//getText
	public static String getAttribute(WebElement element,String string) {
		waitUntilElementIsVisible(element);
		String attribute = element.getAttribute(string);
		return attribute;
	}
	
	//Sleep
	public static void sleep(int millis) throws InterruptedException {
		Thread.sleep(millis);

	}
	
	//getDriver
	public static WebDriver getDriver() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\DELL\\eclipse-workspace\\selenium\\SeleniumChromeLaunch\\Driver\\chromedriver.exe");
	//	getChromedriver();
		driver.manage().window().maximize();
		return driver;
	}
	
	//create excel and return sheet
	public static Sheet excelCreate(String path,String sheetName,int wbnum) throws IOException {
		File file=new File(path);
		FileInputStream ipStream=new FileInputStream(file);
		Workbook wb=new XSSFWorkbook(ipStream);
		Sheet createSheet=wb.createSheet(sheetName);
		return createSheet;
	}
	
	//excel get data from sheet
	public static String getDataFromExcel(Sheet sheet,int rowNo,int cellNo) {
		String value = null;
		Row row = sheet.getRow(rowNo);
		Cell cell = row.getCell(cellNo);
		int cellType = cell.getCellType();
		if(cellType==1) {
			value = cell.getStringCellValue();
		}
		else if(DateUtil.isCellDateFormatted(cell)) {
			Date dateCellValue = cell.getDateCellValue();
			SimpleDateFormat dateFormat=new SimpleDateFormat("dd-MMM-YYYY");
			value = dateFormat.format(dateCellValue);
		}
		else {
			
			double numericCellValue = cell.getNumericCellValue();
			long l=(long) numericCellValue;
			value = String.valueOf(l);
		}
		return value;
	}
	
	//string to Map
	public static Map<String, String> stringMap(Sheet sheet) {
		String st1,st2=null;
		Map<String, String> mp=new HashMap<String, String>();
		for(int i=0;i<sheet.getPhysicalNumberOfRows();i++) {
			st1=getDataFromExcel(sheet, i, 0);
			st2=getDataFromExcel(sheet, i, 1);
			mp.put(st1.toLowerCase(), st2);
			System.out.println(mp);
		}		
		return mp;
	}
	//create excel and return sheet
		public static Sheet excelGetSheet(String path,String sheetName) throws IOException {
			File file=new File(path);
			FileInputStream ipStream=new FileInputStream(file);
			Workbook wb=new XSSFWorkbook(ipStream);
			Sheet getSheet=wb.getSheet(sheetName);
			return getSheet;
		}
	
	//Read Sheet and grab data
	public static Sheet excelReadSendValue(String path,String sheetName,int wbnum) throws IOException {
		File file=new File(path);
		FileInputStream ipStream=new FileInputStream(file);
		Workbook wb=new XSSFWorkbook(ipStream);
		Sheet createSheet=wb.createSheet(sheetName);
		return createSheet;
	}
	
	//Actions create
	public static Actions actions() {
		Actions act=new Actions(driver);
		return act;
	}
	//Actions Double click
	public static void doubleClick(WebElement element) {
		
		Actions ac=actions();
		ac.doubleClick(element).perform();
	}
	
	//Actions drag and drop
	public static void dragAndDrop(WebElement source,WebElement dest) {
	Actions ac=actions();
	ac.dragAndDrop(source, dest).perform();
	}
	
	//Actions mouse hover
	public static void mouseHover(WebElement element) {
		Actions ac=actions();
		ac.moveToElement(element).perform();
	}
	
	//Actions right click
	public static void rightClick(WebElement element) {
		Actions ac=actions();
		ac.contextClick(element).perform();
	}
	
	//Actions Click and Hold
	public static void clickAndHold(WebElement element) {
		Actions ac=actions();
		ac.clickAndHold(element).perform();
	}
	
	//Robot class
	public static Robot robo() throws AWTException {
		Robot robo=new Robot();
		return robo;
	}
	
	//Robot Class key down
	public static void keyDownRobo(int count) throws AWTException {
		Robot rb=robo();
		for (int i = 0; i < count; i++) {
			rb.keyPress(KeyEvent.VK_DOWN);
			rb.keyRelease(KeyEvent.VK_DOWN);
		}
	}
	
	//Robot Class key Up
	public static void keyUPRobo(int count) throws AWTException {
		Robot rb=robo();
		for (int i = 0; i < count; i++) {
			rb.keyPress(KeyEvent.VK_UP);
			rb.keyRelease(KeyEvent.VK_UP);
			}
		}
		
	//Robot Class Key Enter
	public static void keyEnterRobo(int count) throws AWTException {
		Robot rb=robo();
		for (int i = 0; i < count; i++) {
			rb.keyPress(KeyEvent.VK_ENTER);
			rb.keyRelease(KeyEvent.VK_ENTER);
			}
		}
	
	//Alert accept
	public static void alertAccept() {
		Alert alert=driver.switchTo().alert();
		alert.accept();
	}
	
	//Alert Dismiss
	public static void alertDismiss() {
		Alert alert=driver.switchTo().alert();
		alert.dismiss();
	}
		
	//ALert sendkeys
	public static void alertSendKeys(String string) {
		Alert alert=driver.switchTo().alert();
		alert.sendKeys(string);
		alert.accept();
	}
	
	//Frame Switch by frame number
	public static void switchFrameByNum(int framenum) {
		driver.switchTo().frame(framenum);
	}
	
	//Frame Switch by frame name
	public static void switchFrameByName(String framename) {
		driver.switchTo().frame(framename);
	}
		
	//Frame Switch by element reference
	public static void switchFrameByRef(WebElement frameElement) {
		driver.switchTo().frame(frameElement);
	}
	
	//exit frame to default
	public static void defaultFrame() {
		driver.switchTo().defaultContent();
	}
	
	//switch to parent frame
	private static void switchParFrame() {
		driver.switchTo().parentFrame();
	}
	
	//take screenshot and store in a dest path
	public static void takeScreenshot(String path) throws IOException {
		TakesScreenshot ts=(TakesScreenshot)driver;
		File screenshotAs = ts.getScreenshotAs(OutputType.FILE);
		System.out.println(screenshotAs.getPath());
		
		File file=new File(path);
		try {
			FileUtils.copyFile(screenshotAs, file);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw e;
		}
		//org.openqa.selenium.io.FileHandler.copy(screenshotAs, file);
	}
	
	public static void waitUntilElementIsVisible(WebElement element) {
		wait.until(ExpectedConditions.visibilityOf(element));

	}
	
	//select drop down by Value
	public static void dropDownByVal(WebElement elem,String string) {
		waitUntilElementIsVisible(elem);
		Select sel=new Select(elem);
		sel.selectByValue(string);
	}
	
	//select drop down by index integer
		public static void dropDownByIndex(WebElement elem,int index) {
			waitUntilElementIsVisible(elem);
			Select sel=new Select(elem);
			sel.selectByIndex(index);
		}
	//select drop down by Visible text
	public static void dropDownByVisibleTxt(WebElement elem,String string) {
		waitUntilElementIsVisible(elem);
		Select sel=new Select(elem);
		sel.selectByVisibleText(string);
	}	
	
	public static void closebrowser(){
		driver.close();

	}
	
	public static String getProperty(String key) {
		FileReader reader = null;
		try {
			reader = new FileReader("C:\\Users\\DELL\\eclipse-workspace\\selenium\\PracticeCucumber\\src\\test\\java\\org\\genmethods\\config.properties");
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		Properties prop = new Properties();
		try {
			prop.load(reader);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return String.valueOf( prop.get(key));
	}
}
