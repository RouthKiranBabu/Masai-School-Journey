package NewPackage;

import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Class_05 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.bigbasket.com/");
		List<WebElement> eleist = driver.findElements(By.xpath("(//div[@class='w-full lg:pt-6 xl:pt-8'])"));
		for(int i = 0; i < eleist.size(); i ++) {
			String txt = eleist.get(i).getText();
			System.out.println(txt);
		}
	}

}
/*54% OFF
fresho!
Beetroot (Loose)
1 kg
₹48
₹105.48
Har Din Sasta!
Add
55% OFF
fresho!
Capsicum - Green (Loose)
1 kg
₹38
₹83.56
Add
20% OFF
fresho!
Coriander Leaves
1 kg
₹66.85
₹83.56
Add
51% OFF
fresho!
Ladies' Fingers (Loose)
1 kg
₹36
₹73.97
Har Din Sasta!
Add
23% OFF
fresho!
Onion
5 kg - Multipack
₹410
₹534.25
Add
48% OFF
fresho!
Tomato - Hybrid
2 x 1 kg - Multipack
₹74
₹142.46
Add
20% OFF
fresho!
Palak - Cleaned, without roots
1 kg
₹55.89
₹69.86
Add
29% OFF
fresho!
Pomegranate - Regular
1 kg - (5-6 pcs per kg)
₹153
₹216.44
Get @₹148.39!
Add
My Smart Basket
View All

Top Offers
Fruits and Vegetables
Your Daily Staples
Beverages
Snacks Store
Cleaning & Household
Beauty and Hygiene
Home and Kitchen

bigbasket – online grocery store
Did you ever imagine that the freshest of fruits and vegetables, top-quality pulses and food grains, dairy products, and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? In today's fast-paced world, bigbasket.com, India's pioneering online grocery store, continues to bring a staggering array of over 40,000 products from more than 1,000 brands to the doorsteps of over 10 million satisfied customers. From essential household cleaning products to the latest beauty and makeup trends, bigbasket remains your one-stop shop for daily needs.

In these times, we've eliminated the stress associated with shopping for daily essentials. You can now effortlessly order all your household products and groceries online. Plus, the added convenience of finding all your requirements at a single source, coupled with substantial savings, demonstrates that bigbasket, India's largest online supermarket, has transformed the way we shop for groceries. Online grocery shopping has become second nature. And when it comes to freshness, whether it's fruits and vegetables or dairy and meat, we've got you covered! Easily obtain fresh eggs, meat, fish, and more with just a few clicks.

We now serve 300+ cities and towns across India and ensure swift delivery times, guaranteeing that all your groceries, snacks and branded foods reach you on time.

Slotted Delivery: Choose the most convenient delivery slot to receive your groceries, ranging from early morning delivery for early birds to late-night delivery for those on the night shift. bigbasket caters to every schedule.

Instant delivery from bbnow: In response to the ever-increasing demand for convenience, bbnow by bigbasket offers lightning-fast grocery delivery, ensuring that your essentials are at your doorstep within 15-30 minutes. Our quick delivery service has revolutionized the way you shop for groceries. Choose from 5000+ grocery essentials. bbnow is available only in select cities.

Whether it's a last-minute dinner party or you simply need something urgently, we've got you covered. This service exemplifies our commitment to providing you with not just the widest range of products but also the fastest and most efficient shopping experience, making bigbasket.com the go-to destination for all your immediate grocery needs.
*/
