export default async (req, context) => {
  var secret = Netlify.env.get("SECRET_KEY");
  var token_api = "https://www.google.com/recaptcha/api/siteverify";

  if (req.method !== "POST") {
    var msg = `Method ${req.method} not allowed`;
    console.error(msg);
    return new Response(msg, { status: 405 });
  }

  try {
    var { token } = await req.json();
    if (!token) throw { message: "Parsing token error" }
  }
  catch({message}) {
    var msg = message;
    console.error(msg);
    return new Response(msg, { status: 401 });
  }

  try {
    var res = await fetch(
      `${token_api}?secret=${secret}&response=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    var parsed = await res.json();
  }
  catch({message}) { console.log("Request score error:", message); };

  return new Response(
    JSON.stringify(parsed),
    { header: { "Content-Type": "application/json" } }
  );
};
