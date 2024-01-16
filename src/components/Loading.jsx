import imageloading from "../assets/loading.svg";
function Loading() {
  return (
    <p style={{ textAlign: "center" }}>
      <img src={imageloading} alt="Carregando" />
    </p>
  );
}

export default Loading;
