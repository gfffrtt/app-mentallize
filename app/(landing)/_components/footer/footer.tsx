import { FooterDefault } from "./default";
import { FooterMobile } from "./mobile";

export default async function Footer() {
  return (
    <>
      <div className="sm:hidden flex h-[450px] w-screen">
        <FooterMobile />
      </div>
      <div className="sm:flex hidden">
        <FooterDefault />
      </div>
    </>
  );
}
