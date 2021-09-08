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
  fetch(
    "https://nexmo-nexmo-messaging-v1.p.rapidapi.com/send-sms?to=%3CREQUIRED%3E&from=%3CREQUIRED%3E",
    {
      method: "POST",
      headers: {
        "x-rapidapi-host": "nexmo-nexmo-messaging-v1.p.rapidapi.com",
        "x-rapidapi-key": "a5ffd8ae0emsh365f450f3f566b0p14fb6ajsn93fa9a3425df",
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
};

submitCallBack();
