//{} significa js  e {{objeto}}
function Rodape() {
  const exemploEstilos = {
    backgroundColor: "lightblue",
    padding: "2%",
    color: "purple",
    border: "solid 4px #8ac4d7",
  };

  return (
    <footer style={exemploEstilos}>
      <hr />
      <h2 style={{ textAlign: "center" }}>Rodapé</h2>
    </footer>
  );
}
export default Rodape;
