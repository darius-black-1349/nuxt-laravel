import { defineStore } from "pinia";
// import axios from "axios";

export const useMainStore = defineStore("main", {
  state: () => ({
    // ...

    clients: [
      {
        id: 19,
        avatar: "https://avatars.dicebear.com/v2/gridy/Howell-Hand.svg",
        login: "percy64",
        name: "Howell Hand",
        company: "Kiehn-Green",
        city: "Emelyside",
        progress: 70,
        created: "Mar 3, 2021",
      },
      {
        id: 11,
        avatar: "https://avatars.dicebear.com/v2/gridy/Hope-Howe.svg",
        login: "dare.concepcion",
        name: "Hope Howe",
        company: "Nolan Inc",
        city: "Paristown",
        progress: 68,
        created: "Dec 1, 2021",
      },
      {
        id: 32,
        avatar: "https://avatars.dicebear.com/v2/gridy/Nelson-Jerde.svg",
        login: "geovanni.kessler",
        name: "Nelson Jerde",
        company: "Nitzsche LLC",
        city: "Jailynbury",
        progress: 49,
        created: "May 18, 2021",
      },
      {
        id: 22,
        avatar: "https://avatars.dicebear.com/v2/gridy/Kim-Weimann.svg",
        login: "macejkovic.dashawn",
        name: "Kim Weimann",
        company: "Brown-Lueilwitz",
        city: "New Emie",
        progress: 38,
        created: "May 4, 2021",
      },
    ],
    history: [
      {
        amount: 375.53,
        name: "Home Loan Account",
        date: "3 days ago",
        type: "deposit",
        business: "Turcotte",
      },
      {
        amount: 470.26,
        name: "Savings Account",
        date: "3 days ago",
        type: "payment",
        business: "Murazik - Graham",
      },
      {
        amount: 971.34,
        name: "Checking Account",
        date: "5 days ago",
        type: "invoice",
        business: "Fahey - Keebler",
      },
      {
        amount: 374.63,
        name: "Auto Loan Account",
        date: "7 days ago",
        type: "withdrawal",
        business: "Collier - Hintz",
      },
    ],
  }),
  actions: {
    // ...

    fetch(sampleDataKey) {
      // axios
      //   .get(`data-sources/${sampleDataKey}.json`)
      //   .then(r => {
      //     if (r.data && r.data.data) {
      //       this[sampleDataKey] = r.data.data
      //     }
      //   })
      //   .catch(error => {
      //     alert(error.message)
      //   })
    },
  },
});
