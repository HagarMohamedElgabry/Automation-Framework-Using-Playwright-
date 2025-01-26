								
Feature Supported					Framework Skeleton			
Feature		Comment			Root	Sub Folder 1	Sub Folder 2	Sub Folder 3
Installation Guide	TRUE				Framework			
Running Commands	TRUE				       |- - - - - - - - - - - - - - ->	allure-results		
Page Object Model (POM)	TRUE				       |- - - - - - - - - - - - - - ->	DataFiles		
Data Driven	TRUE				       |- - - - - - - - - - - - - - ->	logs		
Database Integration	TRUE				       |- - - - - - - - - - - - - - ->	pages		
Logger for all steps	TRUE				       |	       |- - - - - - - - - - - - - - ->	CommonPages	
Comman Pages	TRUE				       |	       |	       |- - - - - - - - - - - - - - ->	LoginPage.js
Web element Actions	TRUE				       |	       |	       |- - - - - - - - - - - - - - ->	NotificationPage.js
Validations on Elements	TRUE				       |	       |	       |- - - - - - - - - - - - - - ->	PaymentPage.js
Integration with Allure report	TRUE				       |	       |- - - - - - - - - - - - - - ->	Project Pages	
Data Generation	TRUE				       |	       |	       |- - - - - - - - - - - - - - ->	page1.js
API	FALSE				       |- - - - - - - - - - - - - - ->	Screenshots		
					       |- - - - - - - - - - - - - - ->	tests		
					       |	       |- - - - - - - - - - - - - - ->	Samples	
					       |	       |	       |- - - - - - - - - - - - - - ->	SampleDataDrivenUsingCSV.spec.js
					       |	       |	       |- - - - - - - - - - - - - - ->	SampleDataDrivenUsingExcel.spec.js
					       |	       |	       |- - - - - - - - - - - - - - ->	SampleDataDrivenUsingJSON.spec.js
					       |	       |	       |- - - - - - - - - - - - - - ->	SampleOfAddingInfoToAllureReport.spec.js
					       |	       |	       |- - - - - - - - - - - - - - ->	SampleOfDBConnection.spec.js
							       |- - - - - - - - - - - - - - ->	SampleOfPassingCookiesBetweenTests.spec.js
					       |	       |- - - - - - - - - - - - - - ->	Project tests	
					       |	       |	       |- - - - - - - - - - - - - - ->	test1.spec.js
					       |- - - - - - - - - - - - - - ->	utilities		
						       |- - - - - - - - - - - - - - ->	Database	
						       |	       |- - - - - - - - - - - - - - ->	db-mssql.js
						       |- - - - - - - - - - - - - - ->	DataDriven	
						       |	       |- - - - - - - - - - - - - - ->	DataGeneratorHelper.js
							       |- - - - - - - - - - - - - - ->	ReadWriteData.js
						       |- - - - - - - - - - - - - - ->	Logger	
						       |	       |- - - - - - - - - - - - - - ->	logger.js
						       |- - - - - - - - - - - - - - ->	Validation	
						       |	       |- - - - - - - - - - - - - - ->	ValidationHelper.js
						       |- - - - - - - - - - - - - - ->	WebElementActions	
							       |- - - - - - - - - - - - - - ->	ActionHelper.js
							       |- - - - - - - - - - - - - - ->	AlertHelper.js
							       |- - - - - - - - - - - - - - ->	ButtonHelper.js
							       |- - - - - - - - - - - - - - ->	CheckboxHelper.js
							       |- - - - - - - - - - - - - - ->	CookieHelper.js
							       |- - - - - - - - - - - - - - ->	DropDownHelper.js
							       |- - - - - - - - - - - - - - ->	FrameHelper.js
							       |- - - - - - - - - - - - - - ->	HighlightHelper.js
							       |- - - - - - - - - - - - - - ->	PageScrollHelper.js
							       |- - - - - - - - - - - - - - ->	TextHelper.js
							       |- - - - - - - - - - - - - - ->	WebElementHelper.js
							       |- - - - - - - - - - - - - - ->	WebElementWaitHelper.js
							       |- - - - - - - - - - - - - - ->	WindowHelper.js
