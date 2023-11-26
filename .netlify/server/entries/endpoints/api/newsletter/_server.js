import { e as error } from "../../../../chunks/index.js";
import { c as config } from "../../../../chunks/config.js";
import { b as private_env } from "../../../../chunks/shared-server.js";
import base64 from "base-64";
async function registerEmail$6(email) {
  const BUTTONDOWN_API_KEY = private_env.BUTTONDOWN_API_KEY;
  const BUTTONDOWN_API_URL = private_env.BUTTONDOWN_API_URL;
  try {
    const API_ROUTE = `${BUTTONDOWN_API_URL}subscribers`;
    const response = await fetch(API_ROUTE, {
      body: JSON.stringify({ email }),
      headers: { Authorization: `Token ${BUTTONDOWN_API_KEY}`, "Content-Type": "application/json" },
      method: "POST"
    });
    if (response.status >= 400) {
      throw error(400, "couldn't add email to the newsletter");
    } else {
      return new Response(JSON.stringify({ message: "Email added to the newsletter" }), {
        status: 200
      });
    }
  } catch (err) {
    console.error(err);
    throw error(err.status, err.title);
  }
}
async function registerEmail$5(email) {
  const CONVERTKIT_FORM_ID = private_env.CONVERTKIT_FORM_ID;
  const CONVERTKIT_API_KEY = private_env.CONVERTKIT_API_KEY;
  const CONVERTKIT_API_URL = private_env.CONVERTKIT_API_URL;
  try {
    const data = { email, api_key: CONVERTKIT_API_KEY };
    const response = await fetch(`${CONVERTKIT_API_URL}forms/${CONVERTKIT_FORM_ID}/subscribe`, {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    });
    if (response.status >= 400) {
      throw error(400, "couldn't add email to the newsletter");
    } else {
      return new Response(JSON.stringify({ message: "Email added to the newsletter" }), {
        status: 200
      });
    }
  } catch (err) {
    console.error(err);
    throw error(err.status, err.title);
  }
}
async function registerEmail$4(email) {
  const EMAILOCTOPUS_API_URL = private_env.EMAILOCTOPUS_API_URL;
  const EMAILOCTOPUS_API_KEY = private_env.EMAILOCTOPUS_API_KEY;
  const EMAILOCTOPUS_LIST_ID = private_env.EMAILOCTOPUS_LIST_ID;
  try {
    const data = { email_address: email, api_key: EMAILOCTOPUS_API_KEY };
    const API_ROUTE = `${EMAILOCTOPUS_API_URL}lists/${EMAILOCTOPUS_LIST_ID}/contacts`;
    const response = await fetch(API_ROUTE, {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    });
    if (response.status >= 400) {
      throw error(400, "couldn't add email to the newsletter");
    } else {
      return new Response(JSON.stringify({ message: "Email added to the newsletter" }), {
        status: 200
      });
    }
  } catch (err) {
    console.error(err);
    throw error(err.status, err.title);
  }
}
async function registerEmail$3(email) {
  const KLAVIYO_API_KEY = private_env.KLAVIYO_API_KEY;
  const KLAVIYO_LIST_ID = private_env.KLAVIYO_LIST_ID;
  try {
    const response = await fetch(
      `https://a.klaviyo.com/api/v2/list/${KLAVIYO_LIST_ID}/subscribe?api_key=${KLAVIYO_API_KEY}`,
      {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        // You can add additional params here i.e. SMS, etc.
        // https://developers.klaviyo.com/en/reference/subscribe
        body: JSON.stringify({ profiles: [{ email }] })
      }
    );
    if (response.status >= 400) {
      throw error(400, "couldn't add email to the newsletter");
    } else {
      return new Response(JSON.stringify({ message: "Email added to the newsletter" }), {
        status: 200
      });
    }
  } catch (err) {
    console.error(err);
    throw error(err.status, err.title);
  }
}
async function registerEmail$2(email) {
  const MAILCHIMP_DC = private_env.MAILCHIMP_DC;
  const MAILCHIMP_LIST_ID = private_env.MAILCHIMP_LIST_ID;
  const MAILCHIMP_API_KEY = private_env.MAILCHIMP_API_KEY;
  try {
    const url = `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;
    const password = MAILCHIMP_API_KEY;
    const data = { email_address: email, status: "subscribed" };
    let headers = new Headers();
    headers.append("Authorization", "Basic " + base64.encode("somestring:" + password));
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data)
    });
    const mailchimpResponse = await response.json();
    if (mailchimpResponse?.status !== "subscribed") {
      console.error(mailchimpResponse);
      throw error(400, "couldn't add email to the newsletter");
    } else {
      return mailchimpResponse;
    }
  } catch (err) {
    console.error(err);
    throw error(err.status, err.title);
  }
}
async function registerEmail$1(email) {
  const REVUE_API_KEY = private_env.REVUE_API_KEY;
  const REVUE_API_URL = private_env.REVUE_API_URL;
  const REVUE_ROUTE = `${REVUE_API_URL}subscribers`;
  try {
    const response = await fetch(REVUE_ROUTE, {
      method: "POST",
      headers: { Authorization: `Token ${REVUE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email, double_opt_in: false })
    });
    if (response.status >= 400) {
      throw error(400, "couldn't add email to the newsletter");
    } else {
      return new Response(JSON.stringify({ message: "Email added to the newsletter" }), {
        status: 200
      });
    }
  } catch (err) {
    console.error(err);
    throw error(err.status, err.title);
  }
}
const registerEmail = (email) => {
  switch (config.newsletter) {
    case "mailchimp":
      return registerEmail$2(email);
    case "emailoctopus":
      return registerEmail$4(email);
    case "buttondown":
      return registerEmail$6(email);
    case "convertkit":
      return registerEmail$5(email);
    case "klaviyo":
      return registerEmail$3(email);
    case "revue":
      return registerEmail$1(email);
    default:
      return;
  }
};
const POST = async ({ request }) => {
  try {
    const { email } = await request.json();
    let result = await registerEmail(email);
    return new Response(
      JSON.stringify(result, {
        status: result.status
      })
    );
  } catch (err) {
    console.error(err);
    throw error(400, "couldn't add email to the newsletter");
  }
};
export {
  POST
};
