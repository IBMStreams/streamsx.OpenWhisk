# OpenWhisk Toolkit
A toolkit for integrating OpenWhisk actions in IBM Streams flow.

The OpenWhisk Action operator uses streamsx.inet HTTPPost Operator to call OpenWhisk API to invoke actions.

To create OpenWhisk actions in Bluemix use: [https://console.bluemix.net/openwhisk](https://console.bluemix.net/openwhisk)

### Two simple BlueMix usage examples provided:
1. Integrating strings manipulation action [StringToCaps.js](action_examples/StringToCaps.js) in Streams flow demonstrating sync and async OpenWhisk action invocations.
2. 	Push Notification, use the following instructions to create push notification action: 
[https://console.bluemix.net/docs/openwhisk/openwhisk_pushnotifications.html#openwhisk_catalog_pushnotifications](https://console.bluemix.net/docs/openwhisk/openwhisk_pushnotifications.html#openwhisk_catalog_pushnotifications)

	###### Binding for the Streams push notification example using wsk CLI:

		wsk package bind /whisk.system/pushnotifications myPush1 -p appId <APP_ID> -p appSecret <APP_SECRET>

### Developing and running examples:

1.	Clone the repository.
2.	Use Streams Studio - Import as existing project. 
3.	Select com.ibm.streamsx.OpenWhisk to import.
4.	Choose an example, create a Build Config and add the mandatory ow-auth-key submission time value for the service, for example:

		Authorization: Basic ABCDE...
 