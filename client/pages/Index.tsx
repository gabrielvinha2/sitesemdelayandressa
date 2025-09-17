export default function Index() {
  useEffect(() => {
    // Load the VSL script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/cd080c38-edae-4bc7-a6d5-8dd4c2328a90/players/68bdff64575dfb94b013b570/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[780px] flex flex-col justify-center items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{
            backgroundImage:
              "url('https://api.builder.io/api/v1/image/assets/TEMP/c4a4ca3ce0426000d47522b8ca7ed603946471db?width=783')",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets%2F95a0d65e6e664f9083220b6878574efe%2F9d327bf4c34045f18d2ce646e5fa80b4?format=webp&width=800')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-4 max-w-sm md:max-w-md lg:max-w-lg mx-auto text-center">
          {/* Logo */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5183ca4fcc52b358ec68b2fceb637a959c71ca93?width=540"
            alt="Logo"
            className="w-[270px] h-[115px] mb-6"
          />

          {/* Main Headline */}
          <h1 className="text-[22px] font-bold leading-[27.5px] mb-4 text-shadow-lg">
            Como Ativar as 40.000 Antenas que emitem a Frequência mais Pura de
            prosperidade do Universo
          </h1>

          {/* Subtext */}
          <p className="text-sm font-bold text-gray-300 leading-[22.75px] mb-8 text-shadow-lg">
            A ciência e a espiritualidade se uniram para criar um protocolo que
            não falha. Quem aplicar, prospera. Quem ignora, continua na
            escassez.
          </p>

          {/* VSL Video Player */}
          <div className="w-full max-w-[400px] mx-auto mb-8">
            <vturb-smartplayer 
              id="vid-68bdff64575dfb94b013b570" 
              style={{
                display: 'block',
                margin: '0 auto',
                width: '100%',
                maxWidth: '400px'
              }}
            />
          </div>

          {/* CTA Button */}
          <button className="w-full max-w-[320px] px-6 py-4 bg-gradient-to-r from-emerald-900/90 to-emerald-500/90 border border-emerald-500/50 rounded-xl text-white font-bold text-sm uppercase tracking-wide shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-3 hover:from-emerald-800/90 hover:to-emerald-400/90 transition-all">
            QUERO DESBLOQUEAR OS 40 MIL NEURÔNIOS
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16666 10H15.8333"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 4.16663L15.8333 9.99996L10 15.8333"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* What Is Section */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          <h2 className="text-[30px] md:text-4xl lg:text-5xl font-black leading-9 md:leading-10 lg:leading-[3.5rem] text-center mb-8">
            <span className="text-white">O que é o </span>
            <span className="text-yellow-500">
              Os 40 Mil Neurônios da Abundância
            </span>
            <span className="text-white">?</span>
          </h2>

          <div className="mb-8">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/82c4d3f0901d3715e90fd10fa1965a4ed16db20e?width=798"
              alt="40 Mil Neurônios da Abundância"
              className="w-full h-auto aspect-[22/29]"
            />
          </div>

          <button className="w-full max-w-[320px] mx-auto px-8 py-4 bg-gradient-to-r from-gray-800/50 to-gray-600/80 border border-gray-700 rounded-xl text-white font-bold text-sm uppercase tracking-wide shadow-lg shadow-gray-500/10 flex items-center justify-center gap-3 hover:from-gray-700/50 hover:to-gray-500/80 transition-all">
            QUERO TODO CONTEÚDO
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.32562 10.4092H15.9923"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.159 4.57593L15.9923 10.4093L10.159 16.2426"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          <h2 className="text-[30px] md:text-4xl lg:text-5xl font-black leading-9 md:leading-10 lg:leading-[3.5rem] text-center mb-12">
            <span className="text-yellow-500">BÔNUS</span>
            <span className="text-white"> EXCLUSIVOS:</span>
          </h2>

          <div className="space-y-4 mb-12">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/61f8b8f57e2c69fb4c95ccb44c2ce553daa1e619?width=740"
              alt="Banner Detox"
              className="w-full h-[74px] aspect-[5/1]"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e9264fa7586b98db815360a13bf6e4efbd4fdfc6?width=744"
              alt="Banner Prosperidade"
              className="w-full h-[74px] aspect-[186/37]"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4a30ef18e749b74059dce50dbf84f38c5ed81c55?width=740"
              alt="Banner Escritório"
              className="w-full h-[81px] aspect-[370/81]"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/75604c0d8a54d39d643ef897e8e8aa35ebdc9430?width=744"
              alt="Banner Mapa"
              className="w-full h-[74px] aspect-[186/37]"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ebd85e9c4d284ba2c38dc099a1e3d9265a65a7c5?width=740"
              alt="Banner Manual"
              className="w-full h-[74px] aspect-[5/1]"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a18628814a8bc5287f4f3c0661b1b581602f7749?width=744"
              alt="Banner Código"
              className="w-full h-[74px] aspect-[186/37]"
            />
          </div>

          <button className="w-full max-w-[320px] mx-auto px-8 py-4 bg-gradient-to-r from-gray-800/50 to-gray-600/80 border border-gray-700 rounded-xl text-white font-bold text-sm uppercase tracking-wide shadow-lg shadow-gray-500/10 flex items-center justify-center gap-3 hover:from-gray-700/50 hover:to-gray-500/80 transition-all">
            QUERO OS BÔNUS
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.21664 10.8H15.8833"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.05 4.9668L15.8833 10.8001L10.05 16.6335"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-black py-20 px-4 relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-radial from-yellow-400/20 via-yellow-400/10 to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto relative z-10">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-lg p-8 shadow-2xl shadow-black/80">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3536ce9ac95ebe619deeb980d73f65c8bad81836?width=380"
              alt="Guarantee"
              className="w-[190px] h-[81px] mx-auto mb-8"
            />

            <h2 className="text-[30px] md:text-4xl font-bold leading-[37.5px] md:leading-10 text-center mb-8">
              Quanto vai custar
              <br />
              tudo isso?
            </h2>

            <div className="space-y-3 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white">TODOS OS BÔNUS</span>
                <div className="flex items-center gap-2">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/2981d461ae6587102086f3984e2df92e687dbb24?width=214"
                    alt="Price crossed"
                    className="w-[107px] h-[22px]"
                  />
                  <span className="text-sm font-bold text-yellow-400">
                    R$ 1.341,00
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-white text-center">
                  ACESSO VITALÍCIO À<br />
                  COMUNIDADE
                </span>
                <div className="flex items-center gap-2">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/010fd481b1aecf11cf2254b4823f6b1d9a623982?width=146"
                    alt="Price crossed"
                    className="w-[73px] h-[13px]"
                  />
                  <span className="text-sm font-bold text-yellow-400 text-center">
                    R$
                    <br />
                    397,00
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center mb-4">
              <div className="relative inline-block">
                <span className="text-xl font-bold text-white">
                  De R$ 1.738,00
                </span>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-600 transform -rotate-8"></div>
              </div>
            </div>

            <div className="text-center mb-6">
              <span className="text-5xl font-black text-yellow-400 leading-none">
                TOTAL:
                <br />
                R$37,00
              </span>
            </div>

            <p className="text-sm text-gray-400 text-center mb-8">
              Últimas vagas a esse valor - Valor
              <br />
              Promocional no PIX
            </p>

            <button className="w-full px-6 py-4 bg-gradient-to-r from-emerald-900/90 to-emerald-500/90 border border-emerald-500/50 rounded-xl text-white font-bold text-sm uppercase tracking-wide shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-3 hover:from-emerald-800/90 hover:to-emerald-400/90 transition-all">
              ATIVAR MEU PODER DE ABUNDÂNCIA
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16666 10H15.8333"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 4.1665L15.8333 9.99984L10 15.8332"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto text-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/91737b1a19051aab08c03b49a9133c32daf8de41?width=380"
            alt="Guarantee Icon"
            className="w-[190px] h-[81px] mx-auto mb-8"
          />

          <h2 className="text-2xl font-bold leading-8 mb-6">
            Garantia incondicional de 15
            <br />
            dias
          </h2>

          <p className="text-base text-gray-300 leading-[26px] mb-4">
            Se em 15 dias você sentir que não é pra você,
            <br />
            te devolvemos 100% do valor. Sem letra miúda.
          </p>

          <p className="text-base leading-[26px]">
            <span className="text-gray-300">Sem questionamento. </span>
            <span className="text-yellow-400">
              Você entra com
              <br />
              confiança. E se não sentir que é pra você —<br />
              sai sem prejuízo
            </span>
          </p>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-black py-12 px-4">
        <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          <div className="bg-gradient-to-b from-gray-800 to-black border border-gray-700 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold mb-4">
              Mesmo assim, ainda possui
              <br />
              dúvidas?
            </h3>

            <p className="text-sm text-gray-300 leading-[22.75px] mb-6">
              Fale com o nosso time de suporte pelo
              <br />
              whatsapp
            </p>

            <button className="w-full px-6 py-3 bg-gradient-to-r from-emerald-900/90 to-emerald-500/90 border border-emerald-500/50 rounded-xl text-white font-bold text-sm uppercase tracking-wide shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-3 hover:from-emerald-800/90 hover:to-emerald-400/90 transition-all mb-4">
              TIRE SUAS DÚVIDAS
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.96664 10.7495H16.6333"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8 4.91602L16.6333 10.7493L10.8 16.5827"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f1cd8c35c433600e20bf3ca35a5e8aeabe3fbfcb?width=96"
              alt="WhatsApp"
              className="w-12 h-12 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-sm py-8 px-4">
        <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto text-center">
          <p className="text-base text-gray-400 leading-6">
            <span className="font-bold text-yellow-500">
              NETWORK PRO 2025 ©
            </span>
            <span className="text-gray-400">
              {" "}
              Todos os direitos
              <br />
              reservados.
              <br />
              CNPJ: 58.857.150/0001-04, com sede na Avenida
              <br />
              Mafra, Número 453, Guaratuba, Paraná.
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
