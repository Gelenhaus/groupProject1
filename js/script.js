var options = {
  method: "POST",
  url: "https://nexmo-nexmo-messaging-v1.p.rapidapi.com/send-sms",
  params: {
    to: "13854245740",
    from: "14357282960",
    type: "text",
    text: 'Amber + "is in danger due to a domestic violence situation at "+ 123 Main Street + 84120 + ". They are requesting " + police + " be sent immediately. This message was sent from a cloaked website service, please send assistance and do not respond as it may endanger the victim."',
  },
  headers: {
    "x-rapidapi-host": "nexmo-nexmo-messaging-v1.p.rapidapi.com",
    "x-rapidapi-key": "a5ffd8ae0emsh365f450f3f566b0p14fb6ajsn93fa9a3425df",
  },
};

var submitCallBack = function (event) {
  //   event.preventDefault();
  //   fetch(options.url, options)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
};
fetch(
  "https://nexmo-nexmo-messaging-v1.p.rapidapi.com/send-sms?to=%2B13854245740&from=%E2%80%AA%2B14357282960%E2%80%AC&text=Amber%20is%20in%20danger%20due%20to%20a%20domestic%20violence%20situation%20at%20123%20Main%20St.%20They%20are%20requesting%20%20police%20%20be%20sent%20immediately.%20This%20message%20was%20sent%20from%20a%20cloaked%20website%20service%2C%20please%20send%20assistance%20and%20do%20not%20respond%20as%20it%20may%20endanger%20the%20victim.",
  {
    method: "POST",
    headers: {
      "x-rapidapi-host": "nexmo-nexmo-messaging-v1.p.rapidapi.com",
      "x-rapidapi-key": "ece5fcf093msh9c130fa63287253p1c1b9cjsn7a82847db4f1",
    },
  }
)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });

submitCallBack();

test;
