(function () {
  // cometchat initialization
  var appID = "345211642017616";
  var region = "us";
  var appSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(region)
    .build();
  CometChat.init(appID, appSetting).then(
    () => {
      console.log("Initialization completed successfully");
      // You can now call login function.
    },
    (error) => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
  );
})();

// cometchat widget initialization
window.addEventListener("DOMContentLoaded", (event) => {
  CometChatWidget.init({
    appID: "345211642017616",
    appRegion: "us",
    authKey: "a0a1f3197f1f5947149a4c4df140707682e53ffe",
  }).then(
    (response) => {
      console.log("Initialization (CometChatWidget) completed successfully");
    },
    (error) => {
      console.log("Initialization (CometChatWidget) failed with error:", error);
      //Check the reason for error and take appropriate action.
    }
  );
});
