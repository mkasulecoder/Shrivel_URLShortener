import clientPromise from "@/lib/mongodb";

export async function getServerSideProps(context) {
  const { captureURLData } = context.params;

  if (captureURLData.length !== 2) {
    return { notFound: true };
  }

  const [customName, shortCode] = captureURLData;
  // http://localhost:3000/elitebytecode/1rl0Nny
  const fullShortenedURL = `${process.env.NEXT_PUBLIC_BASE_URL}/${customName}/${shortCode}`;

  try {
    const client = await clientPromise;
    const db = client.db("urlShrivelDb");
    const collection = db.collection("urlShrivelCollection");

    // find the shortened URL
    const urlData = await collection.findOne({
      shortened_url: fullShortenedURL,
    });

    if (urlData) {
      return {
        redirect: {
          destination: urlData.original_url,
          permanent: false,
        },
      };
    } else {
      return { notFound: true };
    }
  } catch (err) {
    throw new Error(`Server Error ${err}`);
    return { notFound: true };
  }
}

// Page Component Requirement: Next.js expects every page to export a React component, even if the page is only used for server-side logic.
// Routing Mechanism: When Next.js processes a route, it looks for this default export to render something if needed.

export default function Redirect() {
  return null;
}
