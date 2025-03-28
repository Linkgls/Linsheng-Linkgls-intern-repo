# Deep Linking and Routing in React Native

## Original Version

### Benefits of Deep Linking in Mobile Apps

- **Improved User Experience:**  
  Deep linking allows users to open specific screens or content directly from
  external sources (e.g., emails, notifications, or web links), reducing
  friction in navigation. And by sending parameters, the link could make the
  next page get the information like the username or where it come from.

- **Enhanced Engagement:**  
  By providing a direct route to desired content, deep linking can boost user
  engagement and retention.

- **Better Integration:**  
  It facilitates smoother integration with other services and platforms,
  allowing seamless transitions between apps, or even from external websites
  like 'www.google.com'

- **Personalization:**  
  Deep links can be tailored to individual users or contexts, leading to more
  personalized user experiences.

### How React Navigation Handles Deep Linking

- **Configuration with a Linking Prop:**  
  React Navigation supports deep linking by configuring a linking prop that maps
  URL patterns to specific screens in the navigation stack. I have tried to set
  the scheme in app.json to make sure the scheme is valid. And then set the
  Linking and config them in App.tsx to make all screens to support the default
  Linking from expo-linking. Then the web app could openURL by the link like
  'home' or 'profile/@user'.

- **Handling App States:**  
  React Navigation manages deep links whether the app is in the foreground,
  background, or completely closed. It properly initializes the navigation state
  based on the incoming URL.

- **Custom URL Schemes and Universal Links:**  
  The library allows you to define custom URL schemes and handle universal
  links, ensuring compatibility with both iOS and Android platforms.

### Challenges When Implementing Deep Linking

- **Complex URL Parsing:**  
  Properly mapping and parsing URLs to match the navigation structure can be
  challenging, especially with nested navigators.

- **Platform Differences:**  
  There can be differences between iOS, Android or even web develop regarding
  how deep links are handled (e.g., universal links vs. custom URL schemes),
  which might complicate implementation. When I try to test them on IOS
  simulator, the whole project just crash, and I can't find the error...

## New Reflection

### After I failed to use it on IOS simulator

I first try to fix that by myself. However, I have stuck by it for a long time.
Then I ask my teammate Mia, and I know that the previous test I have made need
to register the app to app store or something else. So I checked the Expo
document and found that the Expo recommend me to use expo-router to achieve the
DeepLinking.

So, I write some new reflection about how expo-router achieve the DeepLinking.

### How Expo Router Handles Deep Linking

First, declare the scheme of the app in the app.json file.

```json
"expo": {
  // ...
  "scheme": "test-app",
  // ...
  }
```

Then inside the app, the expo will form the route automatically according to the
file structure. The index.tsx file, which directly inside app folder will be
considered as '/' root route. And the rest fill will be set as the format
'/(folder)/(filename)'.

PS: The index.tsx file inside each folder will also be consider as '/(folder)/'
Also to test the deep linking, the command like "npx uri-scheme open
test-app://i18ntest --ios" could be used to test the deep linking.
