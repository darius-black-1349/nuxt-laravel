export default function ({ $axios, redirect }) {

  $axios.onRequest((config) => {
    console.log("request to " + config.url);
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/400");
    }
    if (code === 500) {
      redirect("/sorry");
    }
  });
}
