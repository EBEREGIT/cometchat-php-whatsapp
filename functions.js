var chat_section = $("#chat_section");
var auth_section = $("#auth_section");

// login
const login = (phone) => {
  window.addEventListener(
    "DOMContentLoaded",
    (event) => {
      CometChatWidget.login({
        uid: phone,
      }).then(
        (response) => {
          chat_section.css("display", "");
          auth_section.css("display", "none");

          CometChatWidget.launch({
            widgetID: "7b5195af-468d-47ca-9474-85532d1aeadb",
            target: "#cometchat",
            roundedCorners: "true",
            height: "600px",
            width: "800px",
          });
        },
        (error) => {
          console.log("User login failed with error:", error);
          //Check the reason for error and take appropriate action.
        }
      );
    }
  );
};

// logout
const logout = () => {
  CometChat.logout().then(
    () => {
      //Logout completed successfully
      console.log("Logout completed successfully");
      chat_section.css("display", "none");
      auth_section.css("display", "");
      window.location.replace("index.php");
    },
    (error) => {
      //Logout failed with exception
      console.log("Logout failed with exception:", { error });
    }
  );
};
