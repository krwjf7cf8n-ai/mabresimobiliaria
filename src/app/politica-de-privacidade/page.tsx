   export default function Page() {
  return (
    <div className="card" style={{ padding: 18 }}>
      <h1 className="h1" style={{ fontSize: 28 }}>
        Política de Privacidade
      </h1>

      <div className="hr" />

      <p className="p" style={{ whiteSpace: "pre-wrap" }}>
        Coletamos apenas os dados necessários para atender você (ex.: nome e WhatsApp) quando você envia formulários.
        {"\n\n"}
        Não divulgamos endereço completo dos imóveis publicamente — apenas bairro e cidade.
        {"\n\n"}
        Se quiser solicitar remoção ou correção de dados, entre em contato pelo WhatsApp.
      </p>
    </div>
  );
}
