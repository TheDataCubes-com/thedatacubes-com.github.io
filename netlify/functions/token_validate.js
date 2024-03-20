export default async (req, context) => {
  // var { token } = req.json();
  // if (!token) {
  //   console.error("no token provided");
  //   return;
  // }

  // console.log("processing:", token);
  // fetch
  //   .post()
  //   .then(response => Promise.resolve(response.json()))
	const x = Netlify.env.get("KEY");
	console.log(0, x)
  try {
    req.json().then(e => console.log(1, e));
  }
  catch(e) {
	  console.log(3, e)
  }

  return new Response("Hello, world!");
};
