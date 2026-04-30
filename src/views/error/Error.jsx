import { PageHeader } from "../../components/PageHeader/PageHeader";

export const Error = () => {
  return (
    <>
      <PageHeader showHero={false} />
      <div style={{ textAlign: "center", padding: "100px 20px" }}>
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
      </div>
    </>
  );
};
