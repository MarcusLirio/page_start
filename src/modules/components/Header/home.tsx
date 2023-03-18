import Link from "next/link";
import LogoOmega from "../../../../public/assets/images/logo-omegaco-completa-branca.png";
import Image from "next/image";

export default function Header() {
  return (
    <header style={{ zIndex: "2"}}>
      <div className="grid-header">
        <Image src={LogoOmega} alt="Logo Omega" width={150} />
        <ul>
          <li>
            <Link href={"/teste"}>Home</Link>
          </li>
          <li>
            <Link href={"/teste"}>Quem Somos</Link>
          </li>
          <li>
            <Link href={"/teste"}>Portifólio</Link>
          </li>
          <li>
            <Link href={"/teste"}>Serviços</Link>
          </li>
          <li>
            <Link href={"/teste"}>Blog</Link>
          </li>
          <li>
            <Link href={"/teste"}>Vagas</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
