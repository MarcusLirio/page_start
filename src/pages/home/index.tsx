import Header from "@/modules/components/Header/home";
import Container from "@/modules/components/Container";
import Column from "@/modules/components/Column";
import Card from "@/modules/components/Card";

import Image from "next/image";

import BannerInicial from "../../../public/assets/images/Banner-inicial.png";
import Project from "../../../public/assets/images/projetos.png";
import Suporte from "../../../public/assets/images/suporte.png";
import TrabalhoEquipe from "../../../public/assets/images/trabalho-em-equipe.png";

export default function Home() {
  return (
    <div>
      <Container background="blue" height={"90vh"}>
        <Header />
        <Container
          height={"10vh"}
          background={"transparent"}
          padding={"100px 0"}
          fontFamily={"poppins"}
        >
          <h1>Seu time de tecnologia com a cultura da Omega Co Tech.</h1>
          <h2>Design e desenvolvimento de softwer</h2>
        </Container>
        <Column gap={"50px"}>
          <Card
            icon={
              <Image src={Project} alt="Project icon" width={50} height={50} />
            }
            title={"Projetos"}
            subTitle={"Realize suas idéias"}
          />
          <Card
            icon={
              <Image src={Suporte} alt="Suporte icon" width={50} height={50} />
            }
            title={"Operações"}
            subTitle={"Suporte continuo"}
          />
          <Card
            icon={
              <Image
                src={TrabalhoEquipe}
                alt="Trabalho em equipe icon"
                width={50}
                height={50}
              />
            }
            title={"Desenvolvimento"}
            subTitle={"Equipe qualificada"}
          />
        </Column>
      </Container>
          <Container background="#f6f6f6" height={"60vh"}>
              <div>
                  
              </div>
      </Container>
    </div>
  );
}
