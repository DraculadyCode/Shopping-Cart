export function Home() {
  const backgroundStyle = {
    backgroundImage: "url('/public/imgs/Background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white" // Optional: to make the text visible on top of the image
  };

  return (
    <div style={backgroundStyle}>
      <h1 className="fs-1 bg-primary p-4 text-center text-white text-uppercase rounded-3">
        Welcome to our Virtual Shop
      </h1>
    </div>
  );
}
