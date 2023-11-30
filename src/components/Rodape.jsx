//{} significa js  e {{objeto}}
function Rodape() {
  const exemploEstilos = {
    backgroundColor: "white",
    padding: "2%",
    color: "purple",
    border: "solid 4px #8ac4d7",
  };

  return (
    <footer style={exemploEstilos}>
      <hr />
      <h2 style={{ textAlign: "center" }}>Rodapé</h2>
      <p className="destaque-texto centralizar">Fundamentos de React</p>
      <p>
        Experimentando <b>classes</b>
      </p>
    </footer>
  );
}
export default Rodape;
