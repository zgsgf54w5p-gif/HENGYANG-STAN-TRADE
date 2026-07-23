import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../../data/products";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetails({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main
      style={{
        padding: "80px 8%",
        background: "#F5F8FC",
        minHeight: "100vh",
      }}
    >

      {/* Breadcrumb */}
      <p
        style={{
          marginBottom: "30px",
          color: "#666",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#0B4EA2",
            textDecoration: "none",
          }}
        >
          Home
        </Link>{" "}
        / Products / {product.name}
      </p >


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "start",
        }}
      >


        {/* LEFT - PRODUCT IMAGES */}

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 15px 35px rgba(0,0,0,.1)",
          }}
        >

          <Image
            src={product.images[0]}
            alt={product.name}
            width={700}
            height={700}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "15px",
              objectFit: "cover",
            }}
          />


          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >

            {product.images.map((img: string, index: number) => (
              <Image
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                width={100}
                height={100}
                style={{
                  borderRadius: "10px",
                  objectFit: "cover",
                  border: "1px solid #ddd",
                }}
              />
            ))}

          </div>

        </div>



        {/* RIGHT - PRODUCT INFORMATION */}

        <div>

          <span
            style={{
              background: "#FFD700",
              padding: "8px 18px",
              borderRadius: "30px",
              fontWeight: "bold",
            }}
          >
            {product.badge}
          </span>


          <h1
            style={{
              fontSize: "50px",
              marginTop: "20px",
              color: "#071F3D",
            }}
          >
            {product.name}
          </h1>


          <p
            style={{
              color: "#FFC107",
              fontSize: "22px",
            }}
          >
            ★★★★★ 4.9 (128 Reviews)
          </p >


          <p
            style={{
              marginTop: "20px",
              color: "#666",
              lineHeight: "1.8",
            }}
          >
            {product.description}
          </p >



          {/* SPECIFICATIONS */}

          <h2
            style={{
              marginTop: "35px",
              color: "#0B4EA2",
            }}
          >
            Specifications
          </h2>


          <div
            style={{
              marginTop: "15px",
              lineHeight: "2",
            }}
          >

            {product.moq && <p>📦 MOQ: {product.moq}</p >}

            {product.voltage && (
              <p>⚡ Voltage: {product.voltage}</p >
            )}

            {product.capacity && (
              <p>🥘 Capacity: {product.capacity}</p >
            )}

            {product.power && (
              <p>🔥 Power: {product.power}</p >
            )}

            {product.material && (
              <p>🛠 Material: {product.material}</p >
            )}

            {product.fuelType && (
              <p>🔥 Fuel Type: {product.fuelType}</p >
            )}

            {product.cookingArea && (
              <p>🍖 Cooking Area: {product.cookingArea}</p >
            )}

            {product.dimensions && (
              <p>📏 Dimensions: {product.dimensions}</p >
            )}

            {product.weight && (
              <p>⚖ Weight: {product.weight}</p >
            )}

            {product.color && (
              <p>🎨 Color: {product.color}</p >
            )}

            {product.certification && (
              <p>✅ Certification: {product.certification}</p >
            )}

            {product.warranty && (
              <p>🛡 Warranty: {product.warranty}</p >
            )}

            {product.oem && (
              <p>🏭 OEM/ODM: {product.oem}</p >
            )}

          </div>          {/* PRODUCT VIDEO */}

          {product.video && (
            <div
              style={{
                marginTop: "40px",
              }}
            >
              <h2
                style={{
                  color: "#0B4EA2",
                  marginBottom: "15px",
                }}
              >
                Product Video
              </h2>

              <video
                controls
                style={{
                  width: "100%",
                  borderRadius: "15px",
                }}
              >
                <source
                  src={product.video}
                  type="video/mp4"
                />

                Your browser does not support the video tag.
              </video>
            </div>
          )}



          {/* CONTACT BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >

            {/* Request Quote */}

            <Link
              href={`/quote?product=${encodeURIComponent(product.name)}`}
              style={{
                background: "#0B4EA2",
                color: "white",
                padding: "18px 35px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Request Quote
            </Link>



            {/* WhatsApp */}

            <a
              href= "_blank"
              rel="noopener noreferrer"
              style={{
                background: "#25D366",
                color: "white",
                padding: "18px 35px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >

              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
              />

              WhatsApp

            </a >

          </div>


        </div>

      </div>

    </main>
  );
}