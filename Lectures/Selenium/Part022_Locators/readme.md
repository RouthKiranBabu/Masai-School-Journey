# Pre-requisites
<details>
  <summary>Creating Maven Project</summary>

  <img alt="Image" src="./imgvid/Prerequisites.gif"> </img>
</details>

# Code Section
## Code to Send Values to the Search Box
```javascript
package pack;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class class01_locatingByName {
	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		WebDriver driver = new ChromeDriver();
//		ctrl + shift + o -> imports module
		driver.get("https://demo.opencart.com");
		driver.manage().window().maximize();
//		Locating by Name
		driver.findElement(By.name("search")).sendKeys("Mac");
		Thread.sleep(3000);
		driver.quit();
	}
}
```
## Result
<details>
  <summary>Show</summary>

  <img alt="Image" src="./imgvid/sendvalue.gif"> </img>
</details>

## Code: Locating By ID
```javascript
package pack;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class class02_locatingById {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		WebDriver driver = new ChromeDriver();
		driver.get("https://demo.opencart.com");
		driver.manage().window().maximize();
		
		boolean logoDisplayStatus = driver.findElement(By.id("logo")).isDisplayed();
		System.out.println(logoDisplayStatus); // true
		Thread.sleep(3000);
		driver.quit();
	}
}
```

## Code: Locating By linked text and Partial Linked Text
```javascript
package pack;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class class03_linkTextAndPartialLinkText {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		WebDriver driver = new ChromeDriver();
		driver.get("https://demo.opencart.com");
		driver.manage().window().maximize();
		Thread.sleep(8000);
		
//		For exact text of link tag or a tag. Text must be exact.
		driver.findElement(By.linkText("Tablets")).click();
		Thread.sleep(8000);
//		Partial text of the link text. Where this may find duplicates.
		driver.findElement(By.partialLinkText("Table")).click();
		Thread.sleep(8000);
		driver.quit();
	}
}
```
## Result
<details>
  <summary>Show</summary>

  <img alt="Image" src="./imgvid/_Linktext Partiallinktext.gif"> </img>
</details>

## Code: Multi-element by tagName and className
```javascript
package pack;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class class04_findingMultipleElement {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		WebDriver driver = new ChromeDriver();
		driver.get("https://demo.opencart.com");
		driver.manage().window().maximize();
		
		List<WebElement> headerList = driver.findElements(By.className("list-inline-item"));
		System.out.println("Total Number Element[className = 'list-inline-item']: " + headerList.size()); // Total Number Element[className = 'list-inline-item']: 7
		
//		To find the number of a tag or links in the driver
		List<WebElement> linkList = driver.findElements(By.tagName("a"));
		System.out.println("Total Number Element[tagName = 'a']: " + linkList.size()); // Total Number Element[tagName = 'a']: 76
		
//		To find the number of images in the webpage
		List<WebElement> imgList = driver.findElements(By.tagName("img"));
		System.out.println("Total Number Element[tagName = 'img']: " + imgList.size()); // Total Number Element[tagName = 'img']: 18
		
		driver.quit();
	}
}
```
## Images
<details>
  <summary>Class Name</summary>

  <img alt="Image" src="./imgvid/className.png"> </img>
</details>
<details>
  <summary>Tag Name[a]</summary>

  <img alt="Image" src="./imgvid/tagName.png"> </img>
</details>
<details>
  <summary>Tag Name[img]</summary>

  <img alt="Image" src="./imgvid/imgTagName.png"> </img>
</details>
