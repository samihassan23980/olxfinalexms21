import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AdDetails() {
  const [sigleAds, setSingleAds] = useState("");

  useEffect(() => {
    getSinglePost();
  }, []);

  const id = useParams();
  console.log(id.id);

  async function getSinglePost() {
    await fetch("http://localhost:8080/ads/olxPostAd/" + id.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setSingleAds(res.data))

      .catch((e) => console.log("e --->", e));
  }

  if (!sigleAds) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Full Ad Details
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            <div className="group relative w-full">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={sigleAds.imageURl}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={sigleAds.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {sigleAds.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {sigleAds.description}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {sigleAds.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdDetails;
