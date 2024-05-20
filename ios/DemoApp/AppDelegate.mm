#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>// Import SplashScreen

#import <React/RCTBridge.h>
#import <React/RCTRootView.h>
#import "RNSplashScreen.h"
#ifdef FB_SONGKICK_CODES
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#endif

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
 // [SplashScreen show]; // Show the splash screen

  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"DemoApp" initialProperties:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
  self.window.rootViewController = [UIViewController new];
  [self.window.rootViewController setView:rootView];
  [self.window makeKeyAndVisible];

 // [SplashScreen hide]; // Optionally hide the splash screen after a delay

  #ifdef FB_SONGKICK_CODES
    [[FBSDKApplicationDelegate sharedInstance] application:application
      didFinishLaunchingWithOptions:launchOptions];
  #endif
  [RNSplashScreen show];  // here
     // or
     //[RNSplashScreen showSplash:@"LaunchScreen" inRootView:rootView];
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
